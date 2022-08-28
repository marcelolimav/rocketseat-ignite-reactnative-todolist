import "styled-components";
import dark from "./dark";

export type CustomTheme = typeof dark;

declare module "styled-components" {
  export interface CustomTheme extends DefaultTheme {}
}
