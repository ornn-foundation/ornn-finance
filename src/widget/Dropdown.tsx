import React, { ReactElement } from "react";
import Button from "./Button";
import { IoWallet } from "react-icons/io5";
import { useOutsideAlerter } from "../utils/useOutsideAlerter";
import List from "./List";

interface Menu {
  id: number;
  title: string;
}
interface Props {
  active?: number;
  menu?: Menu[];
  children?:
    | string
    | JSX.Element
    | JSX.Element[]
    | ReactElement
    | ReactElement[];
}

export default function Dropdown({ children }: Props): ReactElement {
  const [toggle, setToggle] = React.useState(false);
  const wrapperRef = React.useRef(null);
  const { outside } = useOutsideAlerter(wrapperRef);

  const onDropdown = () => {
    setToggle(!toggle);
  };
  
  React.useEffect(() => {
    console.log(outside);
    if (!outside) setToggle(outside);
    return () => {};
  }, [outside]);
  return (
    <>
      <div ref={wrapperRef} className="ornn-dropdown">
        <Button
          onClick={onDropdown}
          type="link"
          color="#fdecef"
          shape="round"
          size="small"
          textColor="#ff647f"
          active={toggle}
          icon={<IoWallet />}
        >
          Ethereum
        </Button>
        {toggle && (
          <div className="ornn-menu-dropdown">
            <List>
              <List.Item>Menu 1</List.Item>
              <List.Item>Menu 2</List.Item>
            </List>
          </div>
        )}
      </div>
      <style jsx>{`
        .ornn-dropdown {
          position: relative;
        }
        .ornn-menu-dropdown {
          position: absolute;
          min-width: 194px;
          background-color: #ffffff;
          margin-top: 5px;
          padding: 16px 0;
          border-radius: 16px;
          border: 1px solid #eeeeee;
        }
      `}</style>
    </>
  );
}
