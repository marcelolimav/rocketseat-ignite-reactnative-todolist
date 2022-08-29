import React, { useContext, useState } from "react";
import { Image, FlatList, Switch, Alert } from "react-native";
import { ThemeContext } from "styled-components";
import uuid from "react-native-uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { ToDo, ToDoListProps } from "../../components/ToDo";

import * as S from "./styles";

import logo from "../../assets/logo.png";
import clipboard from "../../assets/clipboard.png";
import { useEffect } from "react";

type Props = {
  themeDark: (isDark: boolean) => void;
  isThemeDark: boolean;
  list: ToDoListProps[];
};

export function Home({ themeDark, isThemeDark, list }: Props) {
  const { colors } = useContext(ThemeContext);
  const [toDoText, setToDoText] = useState<string>("");
  const [toDoList, setToDoList] = useState<ToDoListProps[]>(list);

  async function handleSaveStorage(value: ToDoListProps[]) {
    try {
      await AsyncStorage.setItem("@MLV-ToDoList-list", JSON.stringify(value));
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    handleSaveStorage(toDoList);
  }, [toDoList]);

  function handleAddToDo(text: string) {
    if (text) {
      setToDoList([
        ...toDoList,
        { text, id: String(uuid.v4()), completed: false },
      ]);
      setToDoText("");
    }
  }

  function handleRemoveToDo(id: string) {
    Alert.alert("Remover tarefa", "Confirma a remoção desta tarefa?", [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => setToDoList(toDoList.filter((i) => i.id !== id)),
      },
    ]);
  }

  function handleCompletedToDo(id: string) {
    setToDoList(
      toDoList.map((i) => {
        if (i.id === id) {
          i.completed = !i.completed;
        }
        return i;
      })
    );
  }

  return (
    <S.Container>
      <S.Header>
        <Image source={logo} resizeMode="contain" />
        <S.HeaderTheme
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            paddingEnd: 20,
          }}
        >
          <S.HeaderThemeText style={{ color: colors.text2 }}>
            Tema dark
          </S.HeaderThemeText>
          <Switch
            trackColor={{ false: "#808080", true: colors.secondary }}
            thumbColor={isThemeDark ? colors.primary : "#333333"}
            ios_backgroundColor={colors.gray200}
            onValueChange={themeDark}
            value={isThemeDark}
          />
        </S.HeaderTheme>
      </S.Header>
      <S.Body>
        <S.Form>
          <S.Input
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={colors.text2}
            value={toDoText}
            onChangeText={setToDoText}
          />
          <S.Button onPress={() => handleAddToDo(toDoText)}>
            <S.Icon name="plus-circle" size={24} color="#fff" />
          </S.Button>
        </S.Form>

        <S.TotalContainer>
          <S.TotalInfo>
            <S.TotalText typeTotal="created">Criadas</S.TotalText>
            <S.TotalValue typeTotal="created">
              <S.TotalValueText>{toDoList.length}</S.TotalValueText>
            </S.TotalValue>
          </S.TotalInfo>

          <S.TotalInfo>
            <S.TotalText typeTotal="completed">Concluídas</S.TotalText>
            <S.TotalValue typeTotal="completed">
              <S.TotalValueText>
                {toDoList.filter((i) => i.completed).length}
              </S.TotalValueText>
            </S.TotalValue>
          </S.TotalInfo>
        </S.TotalContainer>

        <FlatList
          data={toDoList}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={<></>}
          ListEmptyComponent={() => (
            <S.NotToDo>
              <Image
                source={clipboard}
                resizeMode="contain"
                style={{ width: 80, height: 80 }}
              />
              <S.NotToDoTitle>
                Você ainda não tem tarefas cadastradas
              </S.NotToDoTitle>
              <S.NotToDoText>
                Crie tarefas e organize seus itens a fazer
              </S.NotToDoText>
            </S.NotToDo>
          )}
          ListFooterComponentStyle={{ height: 15 }}
          renderItem={({ item }: { item: ToDoListProps }) => (
            <ToDo
              data={item}
              removeToDo={handleRemoveToDo}
              completedToDo={handleCompletedToDo}
            />
          )}
        />
      </S.Body>
    </S.Container>
  );
}
