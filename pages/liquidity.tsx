import React, { ReactElement } from "react";
import { I18n } from "../src/interface/i18n";

interface Props extends I18n {}

export default function Liquidity({ locale }: Props): ReactElement {
  return <div>{locale}</div>;
}

export const getServerSideProps = async (context) => {
  const { defaultLocale, locale, locales, query } = context;
  return {
    props: { locale },
  };
};
