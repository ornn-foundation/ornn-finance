import React, { CSSProperties, ReactElement } from "react";
import { Children } from "../interface/children";

interface Props extends Children {
  style?: CSSProperties;
}

export default function Rotate({ style, children }: Props): ReactElement {
  const clones = React.cloneElement(children as any, {
    style,
  });
  const [state, setState] = React.useState({
    className: "rotate",
  });
  const onClick = (cs: string) => {
    setState((v) => ({
      ...v,
      className: "rotate open",
    }));
    setTimeout(
      () =>
        setState((v) => ({
          ...v,
          className: "rotate",
        })),
      700
    );
  };
  return (
    <>
      <span
        onClick={() => onClick(state.className)}
        className={state.className}
      >
        {clones}
      </span>
      <style jsx>{`
        .rotate {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .rotate.open {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
          transition: transform 0.7s linear;
        }
      `}</style>
    </>
  );
}
