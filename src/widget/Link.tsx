import React, { CSSProperties, ReactElement } from "react";
import { Children } from "../interface/children";

interface Props extends Children {
  margin?: string;
  style?: CSSProperties;
  onClick?: () => void;
  color?: string;
  width?: string;
}

export default function Link({
  margin,
  onClick,
  children,
  width,
  color,
  style,
}: Props): ReactElement {
  return (
    <>
      <a style={style} onClick={onClick}>
        <div className="ornn-link">{children}</div>
      </a>
      <style jsx>{`
        .ornn-link {
          cursor: pointer;
          height: 2.5em;
          padding: 0 1em;
          width: ${width ? width : "max-content"};
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 0.3s;
          border-radius: 10px;
          margin: ${margin ? margin : "0"};
        }
        .ornn-link:hover {
          background-color: ${color ? color : "#f3f5fa"};
        }
      `}</style>
    </>
  );
}
