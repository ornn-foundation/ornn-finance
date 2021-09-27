import React, { CSSProperties, ReactElement } from "react";
import { Children } from "../interface/children";

interface Props extends Children {
  style?: CSSProperties | undefined;
}

export default function Content({ children, style }: Props): ReactElement {
  return (
    <>
      <div style={style} className="content">
        {children}
      </div>
      <style jsx>{`
        .content {
          padding: 16px;
          max-width: 1024px;
          margin: auto;
        }
      `}</style>
    </>
  );
}
