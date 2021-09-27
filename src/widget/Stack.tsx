import React, { ReactElement } from "react";
import { Children } from "../interface/children";

interface Props extends Children {
  stack?: string | number;
}

export default function Stack({ children, stack }: Props): ReactElement {
  return (
    <>
      <div className="ornn-space">{children}</div>
      <style jsx>{`
        .ornn-space {
          display: inline-flex;
          gap: ${typeof stack === "number" ? stack + "px" : stack};
          align-items: center;
        }
      `}</style>
    </>
  );
}
