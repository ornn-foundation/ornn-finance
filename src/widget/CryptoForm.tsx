import React, { ReactElement } from "react";
import Button from "./Button";
import { IoChevronDown } from "react-icons/io5";
import { Chain } from "../interface";
import { Space } from ".";

interface Props {
  chain: Chain;
  value?: string;
  title?: string;
  placeholder?: string;
  eventValue?: (value: string) => void;
  onClick?: () => void;
}

export default function CryptoForm({
  title,
  value = "0.0",
  placeholder = "0.0",
  chain,
  onClick,
  eventValue,
}: Props): ReactElement {
  const [state, setState] = React.useState({
    value,
  });

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    eventValue(e.target.value.replace(/[^0-9]/g, ""));
  };

  React.useEffect(() => {
    setState((v) => ({ ...v, value }));
    return () => {};
  }, [value]);
  return (
    <>
      <div className="ornn-crypto-form">
        <span className="ornn-coin">{title}</span>
        <div className="ornn-form-input">
          <Button
            onClick={onClick}
            style={{ margin: "5px 0", zIndex: 2 }}
            type="link"
            icon={<img src={chain.icon} style={{ width: 20, height: 20 }} />}
          >
            {chain.symbol} <IoChevronDown style={{ marginLeft: 4 }} />
          </Button>
          <input
            type="text"
            id={`${chain.symbol.toLowerCase()}_coin`}
            placeholder={placeholder}
            size={state.value.length}
            value={state.value}
            onChange={onChangeInput}
          />
        </div>
        <span className="ornn-coin-title">{chain.name}</span>
      </div>
      <style jsx>{`
        .ornn-crypto-form {
          padding: 16px;
          border-radius: 16px;
          background-color: #f3f6f9;
        }
        .ornn-form-input {
          position: relative;
          display: flex;
          flex-direction: row;
          justify-items: baseline;
          justify-content: space-between;
          align-items: center;
        }
        .ornn-coin {
          font-size: 11px;
          color: gray;
        }
        .ornn-coin-title {
          font-size: 14px;
          color: #3a3637;
        }
        input {
          position: absolute;
          right: 0;
          padding: 0 !important;
          font-size: 24px;
          max-width: 230px;
          min-height: 24px;
          text-align: right;
          background: none;
          border: none;
          outline: none;
        }
      `}</style>
    </>
  );
}
