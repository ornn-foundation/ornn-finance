import React, { ReactElement } from "react";
import { ENV, Env } from "../src/constants/env";

interface Props extends Env {}

export default function Home({ env }: Props): ReactElement {
  return <div>Home</div>;
}

export async function getStaticProps() {
  return {
    props: {
      env: ENV,
    },
  };
}
