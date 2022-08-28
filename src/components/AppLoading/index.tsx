import React, { useContext } from "react";
import { View, Text, Image } from "react-native";
import { ThemeContext } from "styled-components";

import logo from "../../assets/logo.png";

export const AppLoading = () => {
  const { colors, font } = useContext(ThemeContext);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.body,
      }}
    >
      <Image source={logo} />
      <Text
        style={{
          marginTop: 30,
          color: colors.text2,
          fontStyle: font.family.bold,
          fontSize: font.size.lg,
        }}
      >
        Só mais um pouquinho...
      </Text>
    </View>
  );
};
