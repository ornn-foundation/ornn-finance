import React, { ReactElement } from "react";
import { useRouter } from "next/router";
import { I18n } from "../../../src/interface/i18n";
import data from "../../../src/data/ornn.json";
import { IoOptions, IoChevronBack } from "react-icons/io5";
import { BiReset } from "react-icons/bi";
import { RiRefreshLine } from "react-icons/ri";
import { Context } from "../../../src/lib/context";
import { Content, Footer, Nav } from "../../../src/components";
import {
  Box,
  Link,
  Card,
  CryptoForm,
  Space,
  Button,
  Display,
  Tooltip,
  Rotate,
} from "../../../src/widget";

interface Query {
  chain: string;
  id: string;
}

interface Swap {
  form: string;
  to: string;
}

interface StateSwap {
  display: "exchange" | "options" | "coin";
  swap: Swap;
}
interface Props extends I18n {
  query: Query;
}

export default function Swap({ query, locale }: Props): ReactElement {
  const { state, dispatch } = React.useContext(Context);
  const { chain, id } = query;
  const [stateSwap, setStateSwap] = React.useState<StateSwap>({
    display: "exchange",
    swap: {
      form: "",
      to: "",
    },
  });
  React.useEffect(() => {
    dispatch({
      type: "SET_CHAIN",
      payload: {
        chain: data.chain.find(
          (f) => f.symbol.toLowerCase() === chain?.toString().toLowerCase()
        ),
      },
    });
    return () => {};
  }, [chain]);
  return (
    <>
      <Nav {...{ locale: locale.toString() }} />
      <Content
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Card
          style={{
            width: "100%",
            minWidth: 280,
            maxWidth: 418,
            marginTop: 60,
            marginBottom: 16,
            backgroundColor: "#fff",
          }}
        >
          <Display display={stateSwap.display === "exchange"}>
            <Card.Header>
              <Box flex>
                <span style={{ fontSize: 18, fontWeight: "bold" }}>
                  Exchange
                </span>
                <Space />
                <Tooltip text="Refash">
                  <Link
                    color={state.chain.theme.hover}
                    style={{ fontSize: 22, color: state.chain.theme.color }}
                  >
                    <Rotate>
                      <RiRefreshLine />
                    </Rotate>
                  </Link>
                </Tooltip>
                <Tooltip text="Options">
                  <Link
                    onClick={() =>
                      setStateSwap((v) => ({ ...v, display: "options" }))
                    }
                    color={state.chain.theme.hover}
                    margin="0 0 0 4px"
                    style={{ fontSize: 22, color: state.chain.theme.color }}
                  >
                    <IoOptions />
                  </Link>
                </Tooltip>
              </Box>
              <span style={{ fontSize: 12 }}>Trade tokens in an instant</span>
            </Card.Header>
            <Card.Content>
              <CryptoForm
                onClick={() => setStateSwap((v) => ({ ...v, display: "coin" }))}
                chain={
                  data.chain.find(
                    (f) =>
                      f.symbol.toLowerCase() ===
                      chain?.toString()?.toLowerCase()
                  ) || data.chain[0]
                }
                value={stateSwap.swap.form}
                title="Form"
                eventValue={(value: string) => {
                  setStateSwap((v) => ({
                    ...v,
                    swap: {
                      ...v.swap,
                      form: value,
                    },
                  }));
                }}
              />
              <br />
              <CryptoForm
                onClick={() => setStateSwap((v) => ({ ...v, display: "coin" }))}
                chain={
                  data.chain.find(
                    (f) =>
                      f.symbol.toLowerCase() === id?.toString()?.toLowerCase()
                  ) || data.chain[3]
                }
                value={stateSwap.swap.to}
                title="To"
                eventValue={(value: string) => {
                  setStateSwap((v) => ({
                    ...v,
                    swap: {
                      ...v.swap,
                      to: value,
                    },
                  }));
                }}
              />
              <div style={{ display: "flex", margin: "8px" }}>
                <span style={{ fontSize: 12 }}>Fee</span>
                <Space />
                <span style={{ fontSize: 12 }}>0.1%</span>
              </div>
              <Button
                expand="block"
                slot="start"
                color={state.chain?.theme.color}
                textColor={state.chain?.theme.textColor}
                // icon={<AiOutlineSwap />}
              >
                Swap
              </Button>
            </Card.Content>
          </Display>
          <Display display={stateSwap.display === "options"}>
            <Card.Header>
              <Box flex>
                <Link
                  onClick={() =>
                    setStateSwap((v) => ({ ...v, display: "exchange" }))
                  }
                  color={state.chain.theme.hover}
                  margin="0 0 0 4px"
                  style={{ fontSize: 22, color: state.chain.theme.color }}
                >
                  <IoChevronBack />
                </Link>
                <Space
                  style={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    fontWeight: "bold",
                    marginLeft: 16,
                  }}
                >
                  Advanced Settings
                </Space>
                <Tooltip text="Default">
                  <Link
                    onClick={() => {}}
                    color={state.chain.theme.hover}
                    style={{ fontSize: 22, color: state.chain.theme.color }}
                  >
                    <BiReset />
                  </Link>
                </Tooltip>
              </Box>
            </Card.Header>
            <Card.Content></Card.Content>
          </Display>
          <Display display={stateSwap.display === "coin"}>
            <Card.Header>
              <Box flex>
                <Link
                  onClick={() =>
                    setStateSwap((v) => ({ ...v, display: "exchange" }))
                  }
                  color={state.chain.theme.hover}
                  margin="0 0 0 4px"
                  style={{ fontSize: 22, color: state.chain.theme.color }}
                >
                  <IoChevronBack />
                </Link>
                <Space
                  style={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    fontWeight: "bold",
                    marginLeft: 16,
                  }}
                >
                  Select a token
                </Space>
              </Box>
            </Card.Header>
            <Card.Content></Card.Content>
          </Display>
        </Card>
        <div
          style={{
            width: "100%",
            maxWidth: 418,
            padding: "0 16px",
            color: "gray",
          }}
        >
          <Box flex style={{ marginBottom: 8 }}>
            <span style={{ fontSize: 11 }}>Rate</span>
            <Space />

            <span style={{ fontSize: 11 }}>1 ORNN = 0.3305 BNB (~$113.71)</span>
          </Box>
          <Box flex>
            <span style={{ fontSize: 11 }}>Route</span>
            <Space />
            <span style={{ fontSize: 11 }}>4 steps in the route</span>
          </Box>
        </div>
      </Content>
      <Footer />
    </>
  );
}

export const getServerSideProps = async (context) => {
  const { defaultLocale, locale, locales, query } = context;
  const ch = data.chain.find(
    (f) => f.symbol.toLowerCase() === query.chain?.toString().toLowerCase()
  );
  return {
    props: { locale, query },
  };
};
