import React, { ReactElement } from "react";

interface Props {
  children?:
    | string
    | JSX.Element
    | JSX.Element[]
    | ReactElement
    | ReactElement[];
}

export default function Content({ children }: Props): ReactElement {
  return (
    <>
      <div className="content">{children}</div>
      <style jsx>{`
        .content {
          padding: 16px;
        }
      `}</style>
    </>
  );
}
