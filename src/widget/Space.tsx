import React, { ReactElement } from "react";

interface Props {
  space?: string | number;
  children?:
    | string
    | JSX.Element
    | JSX.Element[]
    | ReactElement
    | ReactElement[];
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
