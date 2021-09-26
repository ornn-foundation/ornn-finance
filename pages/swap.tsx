import React, { ReactElement } from "react";
import Content from "../src/components/Content";
import Footer from "../src/components/Footer";
import Nav from "../src/components/Nav";

interface Props {}

export default function Swap({}: Props): ReactElement {
  return (
    <>
      <Nav />
      <Content>
        Google
      </Content>
      <Footer />
    </>
  );
}
