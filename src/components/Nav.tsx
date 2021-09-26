import React, { ReactElement } from "react";
import Button from "../widget/Button";
import Logo from "../widget/Logo";
import { IoWallet, IoSettings } from "react-icons/io5";
import Space from "../widget/Space";
import Dropdown from "../widget/Dropdown";
import data from "../data/ornn.json";
interface Props {}

export default function Nav({}: Props): ReactElement {
  return (
    <>
      <nav>
        <div className="ornn-nav-content">
          <Logo scale={0.7} />
          <span className="space"></span>
          <Space space={12}>
            <Button
              type="link"
              color="#fdecef"
              shape="circle"
              textColor="#ff647f"
              icon={<IoSettings />}
            ></Button>
            <Dropdown menu={data.listChain}></Dropdown>
            <Button
              slot="start"
              shape="round"
              textColor="#ffffff"
              size="small"
              icon={<IoWallet />}
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
