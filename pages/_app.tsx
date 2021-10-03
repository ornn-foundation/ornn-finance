import React, { ReactElement } from "react";
import { AppProps } from "next/app";
import { getStorage, KEY_STORAGE } from "../src/utils/storage";
import { Context, initialState, Mode } from "../src/lib/context";
import { reducer } from "../src/lib/reducers";
import "../public/styles/global.css";
import { useTheme } from "../src/utils/useTheme";

export default function App({ Component, pageProps }: AppProps): ReactElement {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  const theme = useTheme();
  React.useEffect(() => {
    const element = getStorage(KEY_STORAGE.mode);
    if (element === Mode.dark) {
      dispatch({ type: "SET_THEME_DARK" });
    } else {
      if (theme) {
        dispatch({ type: "SET_THEME_DARK" });
      } else {
        dispatch({ type: "SET_THEME_LIGHT" });
      }
    }
    return () => {};
  }, []);
  return (
    <Context.Provider value={value}>
      <Component {...pageProps} />
    </Context.Provider>
  );
}
