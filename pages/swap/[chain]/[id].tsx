import React, { ReactElement } from "react";
import { useRouter } from "next/router";
import Content from "../../../src/components/Content";
import Footer from "../../../src/components/Footer";
import Nav from "../../../src/components/Nav";
import { I18n } from "../../../src/interface/i18n";
import Card from "../../../src/widget/Card";
import CryptoForm from "../../../src/widget/CryptoForm";
import Space from "../../../src/widget/Space";
import { Box } from "../../../src/widget/Box";
import Button from "../../../src/widget/Button";
import { AiOutlineSwap } from "react-icons/ai";
import data from "../../../src/data/ornn.json";
import { IoOptions } from "react-icons/io5";
import { RiRefreshLine } from "react-icons/ri";
import { Link } from "../../../src/widget/Link";
import { Context } from "../../../src/lib/context";

interface Query {
  chain: string;
  id: string;
}
interface Props extends I18n {
  query: Query;
}

export default function Swap({ query, locale }: Props): ReactElement {
  console.log(query);

  const { state, dispatch } = React.useContext(Context);
  // const router = useRouter();
  const { chain, id } = query;
  const [stateSwap, setStateSwap] = React.useState({
    cryptoInput: "",
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
        <Card style={{ width: 418, marginBottom: 16, backgroundColor: "#fff" }}>
          <Card.Header>
            <Box flex>
              <span style={{ fontSize: 18, fontWeight: "bold" }}>Exchange</span>
              <Space />
              <Link style={{ fontSize: 22 }}>
                <RiRefreshLine />
              </Link>
              <Link style={{ fontSize: 22, marginLeft: 16 }}>
                <IoOptions />
              </Link>
            </Box>
            <span style={{ fontSize: 12 }}>Trade tokens in an instant</span>
          </Card.Header>
          <Card.Content>
            <CryptoForm
              chain={
                data.chain.find(
                  (f) =>
                    f.symbol.toLowerCase() === chain?.toString()?.toLowerCase()
                ) || data.chain[0]
              }
              value={stateSwap.cryptoInput}
              title="Form"
              eventValue={(value: string) => {
                setStateSwap((v) => ({ ...v, cryptoInput: value }));
              }}
            />
            <br />
            <CryptoForm
              chain={
                data.chain.find(
                  (f) =>
                    f.symbol.toLowerCase() === id?.toString()?.toLowerCase()
                ) || data.chain[3]
              }
              value={stateSwap.cryptoInput}
              title="To"
              eventValue={(value: string) => {
                setStateSwap((v) => ({ ...v, cryptoInput: value }));
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
        </Card>
        <div style={{ width: 418, padding: "0 16px", color: "gray" }}>
          <Box flex style={{ marginBottom: 8 }}>
            <span style={{ fontSize: 11 }}>Rate</span>
            <Space />

            <span style={{ fontSize: 11 }}>
              1 1INCH = 0.3305 BNB (~$113.71)
            </span>
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
