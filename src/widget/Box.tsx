import React, { CSSProperties } from "react";
import { Children } from "../interface/children";

interface Props extends Children {
  style?: CSSProperties;
  flex: boolean;
  justifyContent?: "center" | "end";
  alignItems?: "center";
}

export const Box = ({
  style,
  flex,
  alignItems,
  justifyContent,
  children,
}: Props) => {
  return (
    <>
      <div style={style} className="ornn-box">
        {children}
      </div>
      <style jsx>{`
        .ornn-box {
          display: ${flex ? "flex" : "block"};
          justify-content: ${justifyContent ? justifyContent : "initial"};
          align-items: ${alignItems};
        }
      `}</style>
    </>
  );
};
