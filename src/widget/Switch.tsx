import React, { ReactElement } from "react";

interface Props {
  size?: "default" | "small" | "large";
  color?: string;
  onChange?: (checked: boolean) => void;
  checked?: boolean;
}

export default function Switch({
  checked,
  onChange,
  size,
  color,
}: Props): ReactElement {
  const [Switch, setSwitch] = React.useState(checked);
  React.useEffect(() => {
    setSwitch(checked);
    return () => {};
  }, [checked]);
  return (
    <>
      <label className="switch">
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.checked)
          }
          type="checkbox"
          checked={checked}
        />
        <span className="slider round"></span>
      </label>
      <style jsx>{`
        .switch {
          ${size === "small" ? "transform: scale(0.7);" : ""}
          position: relative;
          display: inline-block;
          width: 60px;
          height: 34px;
        }

        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          -webkit-transition: 0.4s;
          transition: 0.4s;
        }

        .slider:before {
          position: absolute;
          content: "";
          height: 26px;
          width: 26px;
          left: 4px;
          bottom: 4px;
          background-color: white;
          -webkit-transition: 0.4s;
          transition: 0.4s;
        }

        input:checked + .slider {
          background-color: ${color ? color : "#2196f3"};
        }

        input:focus + .slider {
          box-shadow: 0 0 1px ${color ? color : "#2196f3"};
        }

        input:checked + .slider:before {
          -webkit-transform: translateX(26px);
          -ms-transform: translateX(26px);
          transform: translateX(26px);
        }

        /* Rounded sliders */
        .slider.round {
          border-radius: 34px;
        }

        .slider.round:before {
          border-radius: 50%;
        }
      `}</style>
    </>
  );
}
