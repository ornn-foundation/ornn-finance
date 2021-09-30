import React, { ReactElement } from "react";
import { IoWallet, IoSettingsSharp } from "react-icons/io5";
import { I18n } from "../interface/i18n";
import data from "../data/ornn.json";
import i18n from "../data/i18n.json";
import { useRouter } from "next/router";
import { Chain } from "../interface";
import { Context, initialChain } from "../lib/context";
import {
  Button,
  Dropdown,
  Logo,
  Modal,
  Stack,
  Switch,
  Tooltip,
} from "../widget";

interface Props extends I18n {}

export default function Nav({ locale }: Props): ReactElement {
  const { state, dispatch } = React.useContext(Context);
  const router = useRouter();
  const [modal, setModal] = React.useState(false);
  const { id, chain } = router.query;
  const eventDropdown = (value: Chain) => {
    dispatch({
      type: "SET_CHAIN",
      payload: {
        chain: value,
      },
    });
    router.push(`/${locale}/swap/${value.symbol.toLowerCase()}/${id.toString()}`);
  };

  const onSetting = () => {
    setModal(true);
  };
  return (
    <>
      <nav>
        <div className="ornn-nav-content">
          <Logo color={state.chain?.theme.color} scale={0.7} />
          <span className="space"></span>
          <Stack stack={12}>
            {chain && (
              <Dropdown
                iconDropdown
                eventDropdown={eventDropdown}
                {...(typeof chain === "string" && { active: chain })}
                menu={data.chain}
                color={state.chain?.theme.hover}
                textColor={state.chain?.theme.color}
              />
            )}
            <Button
              slot="start"
              shape="round"
              textColor={state.chain?.theme.textColor}
              color={state.chain?.theme.color}
              size="small"
              icon={<IoWallet />}
            >
              {i18n.connect[locale] || ""}
            </Button>
            <Tooltip text="Settings">
              <Button
                onClick={onSetting}
                type="link"
                shape="circle"
                color={state.chain?.theme.hover}
                textColor={state.chain?.theme.color}
                icon={<IoSettingsSharp />}
              ></Button>
            </Tooltip>
          </Stack>
        </div>
      </nav>
      <Modal
        modal={modal}
        color={state.chain?.theme.hover}
        textColor={state.chain?.theme.color}
        eventModal={(modal) => setModal(modal)}
      >
        <Tooltip text="Github">Github</Tooltip>
        <Switch size="small" color={state.chain?.theme.color} />
      </Modal>
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
          padding: 8px 22px;
        }
        .space {
          flex: 1;
        }
      `}</style>
    </>
  );
}
