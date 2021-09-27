import React, { ReactElement } from "react";
import { Menu } from "../interface";
import { Children } from "../interface/children";

interface Props extends Children {}

function List({ children }: Props): ReactElement {
  return (
    <>
      <ul>{children}</ul>
      <style jsx>{`
        ul {
          padding: 0px;
          margin: 0px;
        }
      `}</style>
    </>
  );
}

interface PropsItem extends Props {
  icon?: string | JSX.Element | JSX.Element[] | ReactElement | ReactElement[];
  color?: string;
  onClick?: (value: any) => void;
  value?: any;
}

function Item({
  icon,
  color,
  children,
  onClick,
  value,
}: PropsItem): ReactElement {
  const onEvent = (
    value: any,
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    onClick(value);
  };
  return (
    <>
      <li onClick={onEvent.bind(null, value)} className="no-copy">
        {typeof icon === "string" && (
          <span className="icon start">
            <img src={icon} />
          </span>
        )}
        {children}
      </li>
      <style jsx>{`
        li {
          display: flex;
          flex-direction: row;
          cursor: pointer;
          list-style: none;
          padding: 8px 16px;
          font-size: 16px;
          transition: 0.2s;
        }
        li:hover {
          background-color: ${color ? color : "#f2f2f2"};
        }
        li:active {
          opacity: 0.7;
        }
        .icon {
          display: flex;
          position: relative;
          flex-flow: row nowrap;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
        }
        img {
          width: 24px;
          height: 24px;
        }
        .start {
          margin-right: ${children && "16px"};
        }
      `}</style>
    </>
  );
}

List.Item = Item;

export default List;
