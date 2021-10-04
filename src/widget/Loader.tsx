import React, { ReactElement } from "react";

interface Props {}

export default function Loader({}: Props): ReactElement {
  return (
    <>
      <div className="ornn-gooey">
        <span className="ornn-dot"></span>
        <div className="ornn-dots">
          <span className="dot-span"></span>
          <span className="dot-span"></span>
          <span className="dot-span"></span>
        </div>
      </div>
      <style jsx>{`
        .ornn-gooey {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 142px;
          height: 40px;
          margin: -20px 0 0 -71px;
          background: #fff;
          filter: contrast(20);
        }
        .ornn-dot {
          position: absolute;
          width: 16px;
          height: 16px;
          top: 12px;
          left: 15px;
          filter: blur(4px);
          background: #000;
          border-radius: 50%;
          transform: translateX(0);
          animation: dot 2.8s infinite;
        }
        .ornn-dots {
          transform: translateX(0);
          margin-top: 12px;
          margin-left: 31px;
          animation: dots 2.8s infinite;
        }
        .dot-span {
          display: block;
          float: left;
          width: 16px;
          height: 16px;
          margin-left: 16px;
          filter: blur(4px);
          background: #000;
          border-radius: 50%;
        }
        @-moz-keyframes dot {
          50% {
            transform: translateX(96px);
          }
        }
        @-webkit-keyframes dot {
          50% {
            transform: translateX(96px);
          }
        }
        @-o-keyframes dot {
          50% {
            transform: translateX(96px);
          }
        }
        @keyframes dot {
          50% {
            transform: translateX(96px);
          }
        }
        @-moz-keyframes dots {
          50% {
            transform: translateX(-31px);
          }
        }
        @-webkit-keyframes dots {
          50% {
            transform: translateX(-31px);
          }
        }
        @-o-keyframes dots {
          50% {
            transform: translateX(-31px);
          }
        }
        @keyframes dots {
          50% {
            transform: translateX(-31px);
          }
        }
      `}</style>
    </>
  );
}
