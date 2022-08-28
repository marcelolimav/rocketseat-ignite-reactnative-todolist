import React, { useContext, useState } from "react";
import { View } from "react-native";
import { ThemeContext } from "styled-components";

import * as S from "./styles";

export type ToDoListProps = {
  completed: boolean;
  text: string;
  id: string;
};

type Props = {
  data: ToDoListProps;
  removeToDo: (id: string) => void;
  completedToDo: (id: string) => void;
};

export function ToDo({ data, removeToDo, completedToDo }: Props) {
  const { colors } = useContext(ThemeContext);

  return (
    <S.Container>
      <S.Content>
        <S.Checkbox
          onPress={() => completedToDo(data.id)}
          isConcluded={data.completed}
        >
          {data.completed && <S.Icon name="check" size={18} color="#fff" />}
        </S.Checkbox>
        <View style={{ flex: 1 }}>
          <S.ToDoText isConcluded={data.completed}>{data.text}</S.ToDoText>
        </View>
        <S.ButtonRemove>
          <S.Icon
            name="trash-2"
            size={24}
            color={colors.danger}
            onPress={() => removeToDo(data.id)}
          />
        </S.ButtonRemove>
      </S.Content>
    </S.Container>
  );
}
