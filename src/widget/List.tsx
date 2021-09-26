import React, { ReactElement } from "react";

interface Props {
  children?:
    | string
    | JSX.Element
    | JSX.Element[]
    | ReactElement
    | ReactElement[];
}

function List({ children }: Props): ReactElement {
  return <ul>{children}</ul>;
}

const Item = ({ children }: Props) => <li>{children}</li>;

List.Item = Item;

export default List;
