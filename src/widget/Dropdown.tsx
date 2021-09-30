import React, { ReactElement } from "react";
import Button from "./Button";
import { useOutsideAlerter } from "../utils/useOutsideAlerter";
import List from "./List";
import { Children } from "../interface/children";
import { Chain } from "../interface";
import { IoChevronDown } from "react-icons/io5";

interface Props extends Children {
  iconDropdown?: boolean;
  color?: string;
  textColor?: string;
  active?: number | string;
  menu?: Chain[];
  eventDropdown?: (value: Chain) => void;
}

export default function Dropdown({
  color,
  textColor,
  menu,
  active,
  eventDropdown,
  iconDropdown,
}: Props): ReactElement {
  const [state, setState] = React.useState({
    active: false,
    menuActive: menu.find(
      (f) => f.symbol.toLowerCase() === active.toString().toLowerCase()
    ),
    chevronDown: "icon-chevron fa-arrow-down open",
  });
  const wrapperRef = React.useRef(null);
  const dropdown = useOutsideAlerter(wrapperRef);

  const onDropdown = () => {
    setState((v) => ({
      ...v,
      active: !v.active,
      chevronDown: v.active
        ? "icon-chevron fa-arrow-down"
        : "icon-chevron fa-arrow-down open",
    }));
  };

  const onMenu = (id: number) => {
    setState((v) => ({
      ...v,
      active: false,
      menuActive: menu[Number(id)],
      chevronDown: "icon-chevron fa-arrow-down",
    }));
    eventDropdown(menu[Number(id)]);
  };

  React.useEffect(() => {
    setState((v) => ({
      ...v,
      active: !dropdown.outside ? dropdown.outside : v.active,
      chevronDown: !dropdown.outside
        ? "icon-chevron fa-arrow-down"
        : "icon-chevron fa-arrow-down open",
    }));
    return () => {};
  }, [dropdown.outside]);
  return (
    <>
      <div ref={wrapperRef} className="ornn-dropdown">
        <Button
          onClick={onDropdown}
          type="link"
          shape="round"
          size="small"
          color={color}
          textColor={textColor}
          active={state.active}
          icon={
            <img
              src={state.menuActive.icon}
              style={{ width: 20, height: 20 }}
            />
          }
        >
          <span style={{ marginRight: iconDropdown && 4 }}>
            {state.menuActive.title}
          </span>
          {iconDropdown && (
            <div className={state.chevronDown}>
              <IoChevronDown className={state.chevronDown} />
            </div>
          )}
        </Button>
        <div className="ornn-menu-dropdown">
          <List>
            {menu.map((item) => (
              <List.Item
                key={item.id}
                value={item.id}
                onClick={onMenu}
                color={color}
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
          visibility: ${state.active ? "visible" : "hidden"};
          opacity: ${state.active ? "1" : "0"};
          transition: 0.1s;
          position: absolute;
          min-width: 194px;
          background-color: #ffffff;
          margin-top: 5px;
          padding: 16px 0;
          border-radius: 16px;
          border: 1px solid rgb(229, 232, 236);
        }
        .icon-chevron {
          font-size: 18px;
          height: 18px;
          width: 18px;
        }
        .fa-arrow-down {
          transform: rotate(0deg);
          transition: transform 0.3s linear;
        }
        .fa-arrow-down.open {
          transform: rotate(180deg);
          transition: transform 0.3s linear;
        }
      `}</style>
    </>
  );
}
