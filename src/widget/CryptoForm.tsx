import React, { ReactElement } from "react";
import Button from "./Button";
import { IoChevronDown } from "react-icons/io5";
import { Chain } from "../interface";

interface Props {
  chain: Chain;
  value?: string;
  title?: string;
  placeholder?: string;
  eventValue?: (value: string) => void;
}

export default function CryptoForm({
  value = "",
  title,
  placeholder = "0.0",
  chain,
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
        <div className="ornn-form">
          <Button
            style={{ margin: "5px 0" }}
            type="link"
            color="#fff"
            textColor="#3a3637"
            icon={<img src={chain.icon} style={{ width: 20, height: 20 }} />}
          >
            {chain.symbol} <IoChevronDown style={{ marginLeft: 4 }} />
          </Button>
          <input
            type="text"
            name="coin"
            id="coin"
            placeholder={placeholder}
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
        .ornn-form {
          display: flex;
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
          font-size: 24px;
          min-height: 24px;
          padding: 0 !important;
          text-align: right;
          background: none;
          border: none;
          outline: none;
        }
      `}</style>
    </>
  );
}
