import React, { CSSProperties, ReactElement } from "react";
import { Children } from "../interface/children";

interface Props extends Children {
  style?: CSSProperties;
}

export default function Space({ style, children }: Props): ReactElement {
  return <div style={{ ...style, flex: 1 }}>{children}</div>;
}
