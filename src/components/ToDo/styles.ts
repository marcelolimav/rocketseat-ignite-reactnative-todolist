import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";

type Props = {
  isConcluded: boolean;
};

export const Container = styled.View`
  width: 100%;
  margin-top: 10px;
  background-color: ${(props) => props.theme.colors.inputBg};
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.border};
  border-radius: 8px;
`;

export const Content = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 8px 12px 12px;
`;

export const ToDoText = styled.Text<Props>`
  font-family: ${(props) => props.theme.font.family.regular};
  color: ${(props) => props.theme.colors.text1};
  font-size: ${(props) => props.theme.font.size.md}px;
  flex-wrap: wrap;
  ${(props) =>
    props.isConcluded &&
    css`
      text-decoration: line-through;
      color: ${(props) => props.theme.colors.text2};
    `}
`;

export const ButtonRemove = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const Icon = styled(Feather)``;

export const Checkbox = styled.TouchableOpacity<Props>`
  width: 28px;
  height: 28px;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  margin-right: 10px;
  ${(props) =>
    props.isConcluded
      ? css`
          background-color: ${(props) => props.theme.colors.title2};
        `
      : css`
          border-width: 3px;
          border-color: ${(props) => props.theme.colors.title1};
          background-color: ${(props) => props.theme.colors.inputBg};
        `}
`;
