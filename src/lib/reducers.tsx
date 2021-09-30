import {
  Action,
  initialState,
  InitialState,
  Mode,
  theme,
  themeDark,
} from "./context";

export const reducer = (
  state: InitialState,
  { type, payload }: Action
): InitialState => {
  switch (type) {
    case "SET_INITIAL":
      return initialState;
    case "SET_CHAIN":
      return {
        ...state,
        chain: payload.chain,
      };
    case "SET_THEME_DARK":
      document.body.classList.add("dark");
      return {
        ...state,
        mode: Mode.dark,
        theme: themeDark,
      };
    case "SET_THEME_LIGHT":
      document.body.classList.remove("dark");
      return {
        ...state,
        mode: Mode.light,
        theme: theme,
      };
    case "SET_MODE_TOGGLE":
      return state;
    default:
      return state;
  }
};
