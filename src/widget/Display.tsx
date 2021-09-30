import React, { ReactElement } from "react";
import { Children } from "../interface/children";

interface Props extends Children {
  display: boolean;
}

export default function Display({ display, children }: Props): ReactElement {
  const [state, setState] = React.useState({
    display: true,
    className: "ornn-display active",
  });
  React.useEffect(() => {
    setState((v) => ({
      ...v,
      display,
      className: display ? "ornn-display active" : "ornn-display",
    }));
    return () => {};
  }, [display]);
  return (
    <>
      <div className={state.className}>{children}</div>
      <style jsx>{`
        .ornn-display {
          display: none;
          opacity: 0;
          animation: fadeIn 0.2s ease-in-out both;
        }
        .ornn-display.active {
          display: block;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
