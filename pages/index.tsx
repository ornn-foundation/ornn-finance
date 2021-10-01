import React, { ReactElement } from "react";
import { Nav } from "../src/components";
import { ENV, Env } from "../src/constants/env";
import { I18n } from "../src/interface/i18n";
import { Button, InfiniteScroll } from "../src/widget";

interface Props extends I18n {}

export default function Home({ locale }: Props): ReactElement {
  const [state, setState] = React.useState([1]);

  return (
    <>
      <Nav {...{ locale: locale.toString() }} />
    </>
  );
}

export const getServerSideProps = async (context) => {
  const { defaultLocale, locale, locales, query } = context;
  return {
    props: { locale, query },
  };
};
