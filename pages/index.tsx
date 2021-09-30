import React, { ReactElement } from "react";
import { ENV, Env } from "../src/constants/env";
import { InfiniteScroll } from "../src/widget/InfiniteScroll";

interface Props extends Env {}

export default function Home({ env }: Props): ReactElement {
  const [state, setState] = React.useState([]);

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
