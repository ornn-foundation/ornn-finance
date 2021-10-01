import React, { ReactElement } from "react";
import { Content, Nav } from "../src/components";
import { I18n } from "../src/interface/i18n";

interface Props extends I18n {}

export default function Farms({ locale }: Props): ReactElement {
  return (
    <>
      <Nav {...{ locale: locale.toString() }} />
      <Content
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        Farms
      </Content>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const { defaultLocale, locale, locales, query } = context;
  return {
    props: { defaultLocale, locale, query },
  };
};
