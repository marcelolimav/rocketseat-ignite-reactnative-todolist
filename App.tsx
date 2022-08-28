import { useState } from "react";
import { StatusBar, useColorScheme } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { ThemeProvider } from "styled-components";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AppLoading } from "./src/components/AppLoading";
import { Home } from "./src/screens/Home";

import dark from "./src/themes/dark";
import light from "./src/themes/light";

import { ToDoListProps } from "./src/components/ToDo";
import { useEffect } from "react";

export default function App() {
  const deviceTheme = useColorScheme();
  const [load, setLoad] = useState(false);
  const [toDoList, setSetToDoList] = useState<ToDoListProps[]>([]);
  const [theme, setTheme] = useState(deviceTheme === "dark" ? dark : light);
  const [isThemeDark, setIsThemeDark] = useState(true);

  function handleThemeDark(isDark: boolean) {
    setTheme(isDark ? dark : light);
    setIsThemeDark(isDark);

    async function saveTheme(value: boolean) {
      try {
        await AsyncStorage.setItem("@MLV-ToDoList-theme", String(value));
      } catch (e) {
        console.error(e);
      }
    }

    saveTheme(isDark);
  }

  async function getToDoList() {
    try {
      const value = await AsyncStorage.getItem("@MLV-ToDoList-list");
      if (value !== null) {
        setSetToDoList(JSON.parse(value) as ToDoListProps[]);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoad(true);
    }
  }

  async function getTheme() {
    try {
      const value = await AsyncStorage.getItem("@MLV-ToDoList-theme");
      if (value !== null) {
        handleThemeDark(value === "true");
      }
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getTheme();
    getToDoList();
    setLoad(true);
  }, []);

  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded || !load) {
    return (
      <ThemeProvider theme={theme}>
        <AppLoading />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home
        themeDark={handleThemeDark}
        isThemeDark={isThemeDark}
        list={toDoList}
      />
    </ThemeProvider>
  );
}
