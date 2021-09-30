import React, { ReactElement } from "react";
import { Children } from "../interface/children";

interface Props extends Children {
  text?: string;
}

export default function Tooltip({ text, children }: Props): ReactElement {
  return (
    <>
      <div className="tooltip">
        {children}
        <div className="text-tooltip">{text}</div>
      </div>
      <style jsx>{`
        .tooltip {
          position: relative;
          display: flex;
          justify-content: center;
          width: fit-content;
          height: fit-content;
        }

        .tooltip .text-tooltip {
          z-index: 2;
          position: absolute;
          width: fit-content;

          left: 50%;
          transform: translate(-50%, -10%);

          top: 60%;
          margin-top: 10px;
          padding: 5px 10px;
          font-size: 11px;
          font-weight: 500;
          white-space: nowrap;
          color: #fff;
          border-radius: 50px;
          background-color: #282828;
          box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1),
            0 5px 15px rgba(0, 0, 0, 0.07);
          pointer-events: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          opacity: 0;
          transition: all 0.2s ease-in-out;
        }
        .tooltip:hover .text-tooltip {
          top: 100%;
          opacity: 0.9;
        }
      `}</style>
    </>
  );
}
