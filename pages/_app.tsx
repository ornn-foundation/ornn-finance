import React, { ReactElement } from "react";
import { AppProps } from "next/app";
import { getStorage, KEY_STORAGE } from "../src/utils/storage";
import { Context, initialState, Mode } from "../src/lib/context";
import { reducer } from "../src/lib/reducers";
import "../public/styles/global.css";
import { useTheme } from "../src/utils/useTheme";
import { useRouter } from "next/router";
import Loader from "../src/widget/Loader";

export default function App({ Component, pageProps }: AppProps): ReactElement {
  const [pageLoading, setPageLoading] = React.useState<boolean>(false);
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  const theme = useTheme();
  const router = useRouter();
  React.useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
    return () => {
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
    };
  }, [router]);

  return (
    <>
      {pageLoading ? (
        <Loader />
      ) : (
        <Context.Provider value={value}>
          <Component {...pageProps} />
        </Context.Provider>
      )}
    </>
  );
}
