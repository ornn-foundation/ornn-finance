import { createContext, Dispatch } from "react";

export type ActionType =
  | "SET_INITIAL"
  | "SET_THEME_DARK"
  | "SET_THEME_LIGHT"
  | "SET_MODE_TOGGLE";

interface Theme {
  primary: string;
  secondary: string;
  success: string;
  black: string;
  medium: string;
  white: string;
  link: string;
  warning: string;
  error: string;
  light: string;
  dark: string;
}

interface HomeLayout {
  expanded?: boolean;
  openKeys?: string[];
}

export interface Action {
  type: ActionType;
  payload?: InitialState;
}

export enum Mode {
  dark = "dark",
  light = "light",
}

export interface InitialState {
  theme?: Theme | null;
  mode?: Mode;
}

export const themeDark = {
  primary: "#c72e53",
  secondary: "#ff97ae",
  link: "#3498ff",
  success: "#4CD964",
  warning: "#ffd534",
  error: "#ff4961",
  black: "#000000",
  medium: "#989aa2",
  white: "#ffffff",
  light: "#222428",
  dark: "#f4f5f8",
};

export const theme = {
  primary: "#ff647f",
  secondary: "#ff97ae",
  link: "#3498ff",
  success: "#4CD964",
  warning: "#FF9500",
  error: "#eb445a",
  black: "#000000",
  medium: "#92949c",
  white: "#ffffff",
  light: "#f4f5f8",
  dark: "#222428",
};

export const initialState: InitialState = {
  theme,
  mode: Mode.light,
};

export interface IContext {
  state: InitialState | null;
  dispatch: Dispatch<Action>;
}

export const Context = createContext<IContext>(null);
