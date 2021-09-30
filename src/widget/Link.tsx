import React, { CSSProperties } from "react";
import { Children } from "../interface/children";

interface Props extends Children {
  style?: CSSProperties | undefined;
  onClick?: () => void;
}

export const Link = ({ style, onClick, children }: Props) => {
  const clones = React.cloneElement(children as any, {
    style,
  });

  return (
    <>
      <a onClick={onClick}>{clones}</a>
      <style jsx>{`
        a {
          cursor: pointer;
        }
      `}</style>
    </>
  );
};
