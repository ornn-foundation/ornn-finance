import React, { ReactElement } from "react";
import Button from "../widget/Button";
import Logo from "../widget/Logo";
import { AiOutlineDisconnect } from "react-icons/ai";
import Space from "../widget/Space";
import Dropdown from "../widget/Dropdown";

interface Props {}

export default function Nav({}: Props): ReactElement {
  return (
    <>
      <nav>
        <div className="ornn-nav-content">
          <Logo scale={0.7} />
          <span className="space"></span>
          <Space space={12}>
            <Dropdown></Dropdown>
            <Button
              slot="start"
              shape="round"
              textColor="#ffffff"
              size="small"
              icon={<AiOutlineDisconnect />}
            >
              Connect
            </Button>
          </Space>
        </div>
      </nav>
      <style jsx>{`
        nav {
          /* height: 44px; */
        }
        .ornn-nav-content {
          display: flex;
          align-items: center;
          margin: 0 auto;
          max-width: 980px;
          height: 100%;
          padding: 8px 22px 0 22px;
        }
        .space {
          flex: 1;
        }
      `}</style>
    </>
  );
}
