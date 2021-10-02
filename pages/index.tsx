import React, { ReactElement } from "react";
import { Content, Nav } from "../src/components";
import { ENV, Env } from "../src/constants/env";
import { I18n } from "../src/interface/i18n";
import { Context } from "../src/lib/context";
import { Button, Card, InfiniteScroll } from "../src/widget";

interface Props extends I18n {}

export default function Home({ locale }: Props): ReactElement {
  const [stateHome, setStateHome] = React.useState([1]);
  const { state, dispatch } = React.useContext(Context);
  React.useEffect(() => {
    dispatch({ type: "SET_INITIAL" });
    return () => {};
  }, []);
  return (
    <>
      <Nav {...{ locale: locale.toString() }} />
      <Content style={{}}>
        <div>
          <p>Ornn Protocol</p>
          <h1>Perpetuals, decentralized </h1>
          <p>
            Trade Perpetual Contracts with low fees, deep liquidity, and up to
            25× more Buying Power. Deposit just $10 to get started
          </p>
        </div>
        <Card
          style={{
            width: "100%",
            height: 206,
          }}
        ></Card>
      </Content>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const { defaultLocale, locale, locales, query } = context;
  return {
    props: { locale, query },
  };
};
