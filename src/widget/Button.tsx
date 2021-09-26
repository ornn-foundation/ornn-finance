import React, { ReactElement } from "react";
import { contrastYIQ } from "../utils/contrastYIQ";

interface Props {
  width?: string;
  color?: string;
  textColor?: string;
  type?: "default" | "link";
  shape?: "default" | "round" | "circle";
  size?: "default" | "small" | "large";
  slot?: "start" | "end";
  icon?: ReactElement;
  active?: boolean;
  children?:
    | string
    | JSX.Element
    | JSX.Element[]
    | ReactElement
    | ReactElement[];
  onClick?: () => void;
}

export default function Button({
  children,
  width,
  shape,
  size,
  icon,
  slot,
  type,
  color,
  textColor,
  active,
  onClick,
}: Props): ReactElement {
  const [activeBt, setActiveBt] = React.useState(active);

  React.useEffect(() => {
    setActiveBt(active);
    return () => {};
  }, [active]);

  return (
    <>
      <button onClick={onClick}>
        {slot === "start" && <span className="icon start">{icon}</span>}
        {icon && !slot && <span className="icon start">{icon}</span>}
        {children}
        {slot === "end" && <span className="icon end">{icon}</span>}
      </button>
      <style jsx>{`
        button {
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
            : "#ff92a5"};
          color: ${textColor ? textColor : contrastYIQ(color || "#ffffff")};
          font-weight: 500;
          margin-left: 0px;
          margin-right: 0px;
          padding: ${shape === "round" ? "0 1.5em" : "0 1em"};
          border-style: initial;
          border-width: initial;
          border-color: initial;
          box-sizing: border-box;
          height: 2.8em;
          display: block;
          width: ${width} || fit-content;
          clear: both;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          contain: content;
          vertical-align: -webkit-baseline-middle;
          -webkit-user-select: none; /* Chrome all / Safari all */
          -moz-user-select: none; /* Firefox all */
          -ms-user-select: none; /* IE 10+ */
          user-select: none; /* Likely future */
        }
        button:hover {
          background-color: ${type === "link" ? color : "#ff647f"};
        }
        button:active {
          background-color: ${type === "link" ? "" : "#ff3659"};
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
          margin-right: 4px;
        }
        .end {
          margin-left: 4px;
        }
      `}</style>
    </>
  );
}
