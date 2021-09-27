import React, { ReactElement } from "react";
import Button from "./Button";
import { useOutsideAlerter } from "../utils/useOutsideAlerter";
import List from "./List";
import { Children } from "../interface/children";
import { Menu } from "../interface";

interface Props extends Children {
  active?: number | string;
  menu?: Menu[];
  eventDropdown?: (value: Menu) => void;
}

export default function Dropdown({
  menu,
  active,
  eventDropdown,
}: Props): ReactElement {
  const [state, setState] = React.useState({
    active: false,
    menuActive: menu.find(
      (f) => f.symbol.toLowerCase() === active.toString().toLowerCase()
    ),
  });
  const wrapperRef = React.useRef(null);
  const dropdown = useOutsideAlerter(wrapperRef);

  const onDropdown = () => {
    setState((v) => ({ ...v, active: !v.active }));
  };

  const onMenu = (id: number) => {
    setState((v) => ({ ...v, active: false, menuActive: menu[Number(id)] }));
    eventDropdown(menu[Number(id)]);
  };

  React.useEffect(() => {
    if (!dropdown.outside)
      setState((v) => ({ ...v, active: dropdown.outside }));
    return () => {};
  }, [dropdown.outside]);
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
          active={state.active}
          icon={
            <img
              src={state.menuActive.icon}
              style={{ width: 20, height: 20 }}
            />
          }
        >
          {state.menuActive.title}
        </Button>
        <div className="ornn-menu-dropdown">
          <List>
            {menu.map((item) => (
              <List.Item
                key={item.id}
                value={item.id}
                onClick={onMenu}
                color="#fdecef"
                icon={item.icon}
              >
                {item.title}
              </List.Item>
            ))}
          </List>
        </div>
      </div>
      <style jsx>{`
        .ornn-dropdown {
          position: relative;
        }
        .ornn-menu-dropdown {
          display: ${state.active ? "block" : "none"};
          transition: 0.3s;
          position: absolute;
          min-width: 194px;
          background-color: #ffffff;
          margin-top: 5px;
          padding: 16px 0;
          border-radius: 16px;
          border: 1px solid rgb(229, 232, 236);
        }
      `}</style>
    </>
  );
}
