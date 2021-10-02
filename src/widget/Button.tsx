import React, { CSSProperties, ReactElement } from "react";
import { Children } from "../interface/children";
import { contrastYIQ } from "../utils/contrastYIQ";

interface Props extends Children {
  style?: CSSProperties;
  width?: string;
  color?: string;
  textColor?: string;
  height?: string;
  expand?: "default" | "block";
  type?: "default" | "link";
  shape?: "default" | "round" | "circle";
  size?: "default" | "small" | "large";
  slot?: "start" | "end";
  icon?: ReactElement;
  active?: boolean;
  onClick?: () => void;
}

export default function Button({
  children,
  width,
  height,
  shape,
  size,
  icon,
  slot,
  type,
  color,
  textColor,
  expand,
  active,
  style,
  onClick,
}: Props): ReactElement {
  const [activeBt, setActiveBt] = React.useState(active);

  React.useEffect(() => {
    setActiveBt(active);
    return () => {};
  }, [active]);

  return (
    <>
      <button style={style} className="ornn-bt no-copy" onClick={onClick}>
        {slot === "start" && <span className="icon start">{icon}</span>}
        {icon && !slot && <span className="icon start">{icon}</span>}
        {children}
        {slot === "end" && <span className="icon end">{icon}</span>}
      </button>
      <style jsx>{`
        .ornn-bt {
          font-size: ${size === "large"
            ? "20px"
            : size === "small"
            ? "13px"
            : "16px"};
          border-radius: ${shape === "round"
            ? "50px"
            : shape === "circle"
            ? "50%"
            : "10px"};
          cursor: pointer;
          background: ${type === "link"
            ? activeBt
              ? color
              : "initial"
            : color
            ? color
            : "#ff647f"};
          /* ${textColor ? "color: textColor !important" : ""} */
          color: ${textColor ? textColor : ""};
          transition: 0.3s;
          font-weight: 500;
          margin-left: 0px;
          margin-right: 0px;
          padding: ${shape === "round" ? "0 1.5em" : "0 1em"};
          border-style: initial;
          border-width: initial;
          border-color: initial;
          box-sizing: border-box;
          height: ${shape === "circle" ? "42px" : height ? height : "2.8em"};
          display: block;
          width: ${shape === "circle"
            ? "42px"
            : expand === "block"
            ? "100%"
            : width || "max-content"};
          clear: both;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          contain: content;
          vertical-align: -webkit-baseline-middle;
        }
        .ornn-bt:hover {
          background-color: ${type === "link" ? color : "none"};
          filter: ${type !== "link" ? "brightness(92%)" : "none"};
        }
        .ornn-bt:active {
          /* background-color: ${type === "link" ? "" : "#ff3659"}; */
          opacity: 0.9;
        }
        .icon {
          display: flex;
          position: relative;
          flex-flow: row nowrap;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
        }
        .start {
          margin-right: ${children && "6px"};
        }
        .end {
          margin-left: 6px;
        }
      `}</style>
    </>
  );
}
