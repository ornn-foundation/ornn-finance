import { createContext, Dispatch } from "react";
import { Chain } from "../interface";

export type ActionType =
  | "SET_INITIAL"
  | "SET_CHAIN"
  | "SET_THEME_DARK"
  | "SET_THEME_LIGHT"
  | "SET_MODE_TOGGLE";

interface Theme {
  primary: string;
  secondary: string;
  active: string;
  hover: string;
  medium: string;
  white: string;
  link: string;
  success: string;
  warning: string;
  error: string;
  dark: string;
  light: string;
  black: string;
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
  chain?: Chain | null;
}

export const themeDark: Theme = {
  primary: "#c72e53",
  secondary: "#ff97ae",
  active: "#ff3659",
  hover: "#ff3659",
  medium: "#989aa2",
  white: "#ffffff",
  link: "#3498ff",
  success: "#4CD964",
  warning: "#ffd534",
  error: "#ff4961",
  dark: "#f4f5f8",
  light: "#222428",
  black: "#000000",
};

export const theme: Theme = {
  primary: "#ff647f",
  secondary: "#ff97ae",
  hover: "#ff3659",
  active: "#ff3659",
  medium: "#92949c",
  white: "#ffffff",
  link: "#3498ff",
  success: "#4CD964",
  warning: "#FF9500",
  error: "#eb445a",
  light: "#f4f5f8",
  dark: "#222428",
  black: "#000000",
};

export const initialChain: Chain = {
  id: 2539,
  title: "",
  name: "",
  symbol: "",
  icon: "",
  theme: {
    color: "#ff647f",
    hover: "#fdecef",
    textColor: "#ffffff",
  },
};

export const initialState: InitialState = {
  theme,
  mode: Mode.light,
  chain: initialChain,
};

export interface IContext {
  state: InitialState | null;
  dispatch: Dispatch<Action>;
}

export const Context = createContext<IContext>(null);
