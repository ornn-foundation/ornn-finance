import React, { ReactElement } from "react";
import { IoClose } from "react-icons/io5";
import { useOutsideAlerter } from "../utils/useOutsideAlerter";
import Button from "./Button";
import Card from "./Card";
import Space from "./Space";

interface Props {
  modal?: boolean;
  eventModal?: (modal: boolean) => void;
}

export default function Modal({ modal, eventModal }: Props): ReactElement {
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
              style={{ width: 418, marginBottom: 16, backgroundColor: "#fff" }}
            >
              <Card.Header padding="16px 24px">
                <div className="ornn-modal-header">
                  <span>as</span>
                  <Space />
                  <Button
                    onClick={() => eventModal(false)}
                    type="link"
                    color="#fdecef"
                    shape="circle"
                    textColor="#ff647f"
                    icon={<IoClose />}
                  ></Button>
                </div>
              </Card.Header>
              <Card.Content>
                <p>Exchange Trade tokens in an instant</p>
                <p>Exchange Trade tokens in an instant</p>
                <p>Exchange Trade tokens in an instant</p>
                <p>Exchange Trade tokens in an instant</p>
                <p>Exchange Trade tokens in an instant</p>
                <p>Exchange Trade tokens in an instant</p>
              </Card.Content>
            </Card>
          </div>
        </div>
      </div>
      <style jsx>{`
        .ornn-backdrop {
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
          width: fit-content;
        }
        .active {
          visibility: visible;
          /* -webkit-animation-name: fadeIn;
          -webkit-animation-duration: 0.1s;
          animation-name: fadeIn;
          animation-duration: 0.1s; */
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
