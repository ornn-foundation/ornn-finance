import { KEY_STORAGE, setStorage } from "../utils/storage";
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
      setStorage(KEY_STORAGE.mode, Mode.dark);
      return {
        ...state,
        mode: Mode.dark,
      };
    case "SET_THEME_LIGHT":
      document.body.classList.remove("dark");
      setStorage(KEY_STORAGE.mode, Mode.light);
      return {
        ...state,
        mode: Mode.light,
      };
    case "SET_MODE_TOGGLE":
      return state;
    default:
      return state;
  }
};
