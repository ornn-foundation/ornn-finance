import React, { ReactElement } from "react";
import { IoClose } from "react-icons/io5";
import { LinkIcon } from ".";
import { Children } from "../interface/children";
import { useOutsideAlerter } from "../utils/useOutsideAlerter";
import Card from "./Card";
import Space from "./Space";

interface Props extends Children {
  color?: string;
  textColor?: string;
  modal?: boolean;
  eventModal?: (modal: boolean) => void;
}

export default function Modal({
  modal,
  children,
  eventModal,
  color,
  textColor,
}: Props): ReactElement {
  const [state, setState] = React.useState({
    modal,
    ornnmodal: "ornn-backdrop",
  });
  const wrapperRef = React.useRef(null);
  const { outside, active } = useOutsideAlerter(wrapperRef);

  React.useEffect(() => {
    eventModal(outside);
  }, [active]);

  React.useEffect(() => {
    setState((e) => ({ ...e, modal }));
    if (modal) {
      document.body.classList.add("overflow-hidden");
      setState((e) => ({ ...e, ornnmodal: "ornn-backdrop active" }));
    } else {
      document.body.classList.remove("overflow-hidden");
      setState((e) => ({ ...e, ornnmodal: "ornn-backdrop out" }));
    }
  }, [modal]);
  return (
    <>
      <div className={state.ornnmodal}>
        <div ref={wrapperRef} id="ornnmodal" className="ornn-modal">
          <div className="ornn-modal-content">
            <Card
              style={{
                width: "100%",
                maxWidth: 418,
                marginBottom: 16,
                backgroundColor: "#fff",
              }}
            >
              <Card.Header padding="16px 24px">
                <div className="ornn-modal-header">
                  <span style={{ fontSize: 18, fontWeight: "bold" }}>
                    Advanced Settings
                  </span>
                  <Space />
                  <div style={{ marginLeft: 8 }}>
                    <LinkIcon
                      onClick={() => eventModal(false)}
                      color={color}
                      style={{ fontSize: 22, color: textColor }}
                    >
                      <IoClose />
                    </LinkIcon>
                  </div>
                </div>
              </Card.Header>
              <Card.Content>{children}</Card.Content>
            </Card>
          </div>
        </div>
      </div>
      <style jsx>{`
        .ornn-backdrop {
          visibility: hidden;
          z-index: 1600;
          position: fixed;
          transition: 0.1s;
          left: 0;
          top: 0;
          height: 100vh;
          width: 100vw;
          background-color: rgba(32, 38, 45, 0.2);
          backdrop-filter: blur(2px);
        }
        .ornn-modal {
          margin: 60px auto auto;
          width: max-content;
        }
        .active {
          visibility: visible;
        }
        .out {
          visibility: hidden;
          opacity: 0;
        }
        .ornn-modal-content {
          padding: 16px;
        }
        .ornn-modal-header {
          display: flex;
          align-items: center;
        }
      `}</style>
    </>
  );
}
