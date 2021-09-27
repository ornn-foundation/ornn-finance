import React, { ReactElement } from "react";
import { Children } from "../interface/children";

interface Props extends Children {
  space?: string | number;
}

export default function Space({ children, space }: Props): ReactElement {
  return (
    <>
      <div className="ornn-space">{children}</div>
      <style jsx>{`
        .ornn-space {
          display: inline-flex;
          gap: ${typeof space === "number" ? space + "px" : space};
          align-items: center;
        }
      `}</style>
    </>
  );
}
