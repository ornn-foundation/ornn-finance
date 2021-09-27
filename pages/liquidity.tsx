import React, { ReactElement } from "react";

interface Props {}

export default function Liquidity({}: Props): ReactElement {
  return <div></div>;
}

export async function getStaticProps(props) {
  return {
    props,
  };
}
