import React, { ReactElement } from "react";
import { useRouter } from "next/router";
import Content from "../../../src/components/Content";
import Footer from "../../../src/components/Footer";
import Nav from "../../../src/components/Nav";
import { I18n } from "../../../src/interface/i18n";
import Card from "../../../src/widget/Card";

interface Props extends I18n {}

export default function Swap({}: Props): ReactElement {
  const { locale, locales, defaultLocale } = useRouter();
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
          <Card.Content>
            <p>Exchange Trade tokens in an instant</p>
            <p>Exchange Trade tokens in an instant</p>
            <p>Exchange Trade tokens in an instant</p>
            <p>Exchange Trade tokens in an instant</p>
            <p>Exchange Trade tokens in an instant</p>
            <p>Exchange Trade tokens in an instant</p>
          </Card.Content>
        </Card>
      </Content>
      <Footer />
    </>
  );
}

// export async function getStaticPaths() {
//   const paths = data.chain.map((chain) => ({
//     params: { id: chain.symbol.toLowerCase() },
//   }));
//   return { paths, fallback: false };
// }

// export async function getStaticProps(props) {
//   return {
//     props,
//   };
// }
