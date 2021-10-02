import React, { CSSProperties, ReactElement } from "react";
import { Children } from "../interface/children";

interface Props extends Children {
  style?: CSSProperties;
}

function Card({ children, style }: Props): ReactElement {
  return (
    <>
      <div style={style} className="ornn-card">
        {children}
      </div>
      <style jsx>{`
        .ornn-card {
          border-radius: 24px;
          border: 1px solid #e5e8ec;
          width: fit-content;
          background-color: #fff;
          /* box-shadow: rgba(255, 237, 244, 0.5) 0px 6px 24px 0px,
            rgb(229, 232, 236) 0px 0px 0px 1px; */
          /* box-shadow: 0 12px 24px #ffedf4; */
        }
      `}</style>
    </>
  );
}

interface PropsHeader extends Props {
  padding?: string;
}

function Header({ children, padding }: PropsHeader): ReactElement {
  return (
    <>
      <div className="ornn-card-header">{children}</div>
      <style jsx>{`
        .ornn-card-header {
          border-bottom: 1px solid #e5e8ec;
          padding: ${padding ? padding : "24px"};
        }
      `}</style>
    </>
  );
}

interface PropsContent extends Props {}

function Content({ children }: PropsContent): ReactElement {
  return (
    <>
      <div className="ornn-card-content">{children}</div>
      <style jsx>{`
        .ornn-card-content {
          padding: 16px;
        }
      `}</style>
    </>
  );
}

Card.Header = Header;
Card.Content = Content;

export default Card;
