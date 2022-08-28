import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";

type PropsHome = {
  typeTotal: "completed" | "created";
};

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.body};
`;

export const Header = styled.View`
  width: 100%;
  height: 200px;
  background-color: ${(props) => props.theme.colors.header};
  align-items: center;
  justify-content: center;
  padding-top: 40px;
`;

export const HeaderTheme = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;
`;

export const HeaderThemeText = styled.Text`
  font-family: ${(props) => props.theme.font.family.regular};
  color: ${(props) => props.theme.colors.title1};
  font-size: ${(props) => props.theme.font.size.sm}px;
`;

export const Body = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.body};
  padding-left: 20px;
  padding-right: 20px;
`;

export const Form = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: -30px;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: ${(props) => props.theme.height}px;
  margin-right: 4px;
  border-color: ${(props) => props.theme.colors.header};
  background-color: ${(props) => props.theme.colors.inputBg};
  border: 1px;
  padding-left: 10px;
  padding-right: 10px;
  font-family: ${(props) => props.theme.font.family.regular};
  color: ${(props) => props.theme.colors.text1};
  font-size: ${(props) => props.theme.font.size.md}px;
  border-radius: ${(props) => props.theme.radius.border}px;
`;

export const Button = styled.TouchableOpacity`
  width: 52px;
  height: 52px;
  background-color: ${(props) => props.theme.colors.button};
  border-radius: ${(props) => props.theme.radius.border}px;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(Feather)``;

export const TotalContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const TotalInfo = styled.View`
  flex-direction: row;
`;

export const TotalText = styled.Text<PropsHome>`
  font-family: ${(props) => props.theme.font.family.bold};
  ${(props) =>
    props.typeTotal === "created"
      ? css`
          color: ${(props) => props.theme.colors.title1};
        `
      : css`
          color: ${(props) => props.theme.colors.title2};
        `}
`;

export const TotalValue = styled.View<PropsHome>`
  width: 56px;
  height: 20px;
  margin-left: 8px;
  margin-top: 2px;
  margin-bottom: 2px;
  ${(props) =>
    props.typeTotal === "created"
      ? css`
          background-color: ${(props) => props.theme.colors.title1};
        `
      : css`
          background-color: ${(props) => props.theme.colors.title2};
        `}
  justify-content: center;
  align-items: center;
  border-radius: 999px;
`;

export const TotalValueText = styled.Text`
  font-family: ${(props) => props.theme.font.family.bold};
  color: ${(props) => props.theme.colors.text1};
  font-size: ${(props) => props.theme.font.size.sm}px;
  padding-left: 8px;
  padding-right: 8px;
`;

export const NotToDo = styled.View`
  width: 100%;
  align-items: center;
  padding-top: 40px;
  border: 0.5px;
  border-color: ${(props) => props.theme.colors.text1};
  border-bottom-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
`;

export const NotToDoTitle = styled.Text`
  padding-top: 16px;
  font-family: ${(props) => props.theme.font.family.bold};
  color: ${(props) => props.theme.colors.text1};
`;

export const NotToDoText = styled.Text`
  font-family: ${(props) => props.theme.font.family.regular};
  color: ${(props) => props.theme.colors.text2};
`;
