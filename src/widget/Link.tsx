import React, { CSSProperties, ReactElement } from "react";
import { Children } from "../interface/children";

interface Props extends Children {
  margin?: string;
  style?: CSSProperties;
  onClick?: () => void;
  color?: string;
}

export default function Link({
  margin,
  style,
  onClick,
  children,
  color,
}: Props): ReactElement {
  const clones = React.cloneElement(children as any, {
    style,
  });

  return (
    <>
      <a onClick={onClick}>
        <div className="ornn-link">{clones}</div>
      </a>
      <style jsx>{`
        .ornn-link {
          margin: ${margin ? margin : "0"};
          cursor: pointer;
          height: 36px;
          width: 36px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 0.3s;
          border-radius: 10px;
        }
        .ornn-link:hover {
          background-color: ${color ? color : "#f3f5fa"};
        }
      `}</style>
    </>
  );
}
