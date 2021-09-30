import React from "react";
import { Children } from "../interface/children";

interface Props extends Children {
  eventScroll?: (value: boolean) => void;
}

export const InfiniteScroll = ({ eventScroll, children }: Props) => {
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    eventScroll(true);
    console.log("Fetch more list items!");
  }

  return <div>{children}</div>;
};
