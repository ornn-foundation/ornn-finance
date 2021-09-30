import React, { ReactElement } from "react";
import { ENV, Env } from "../src/constants/env";
import { Button, InfiniteScroll } from "../src/widget";

interface Props extends Env {}

export default function Home({ env }: Props): ReactElement {
  const [state, setState] = React.useState([1]);

  return (
    <div>
      <InfiniteScroll
        eventScroll={(v) => {
          if (v) {
          }
        }}
      >
        {state.map((item, index) => (
          <p key={index}>Home {index}</p>
        ))}
      </InfiniteScroll>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      env: ENV,
    },
  };
}
