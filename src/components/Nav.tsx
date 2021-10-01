import React, { ReactElement } from "react";
import { IoWallet, IoSettingsSharp, IoMenu } from "react-icons/io5";
import { I18n } from "../interface/i18n";
import data from "../data/ornn.json";
import i18n from "../data/i18n.json";
import { useRouter } from "next/router";
import { Chain } from "../interface";
import { Context, initialChain } from "../lib/context";
import {
  Button,
  Dropdown,
  Link,
  LinkIcon,
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

  const setChain = (value: Chain) => {
    dispatch({
      type: "SET_CHAIN",
      payload: {
        chain: value,
      },
    });
  };

  const eventDropdown = (value: Chain) => {
    setChain(value);
    router.replace(
      `/${locale}/swap/${value.symbol.toLowerCase()}/${id.toString()}`
    );
  };

  React.useEffect(() => {
    const value = data.chain.find(
      (f) => f.symbol.toLowerCase() === chain?.toString().toLowerCase()
    );
    console.log(value);
    if (value) setChain(value);
  }, [chain]);

  const onSetting = () => {
    setModal(true);
  };

  React.useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <>
      <nav>
        <div className="ornn-nav-content">
          <Logo
            margin="0 8px 0 0"
            onClick={() => {
              router.push("/");
              dispatch({ type: "SET_INITIAL" });
            }}
            color={state.chain?.theme.color}
            scale={0.8}
          />
          <div className="ornn-display-menu">
            <Link
              onClick={() => {
                router.push(`/${locale}/swap/eth/bnb`);
              }}
              color={state.chain.theme.hover}
              style={{ marginLeft: 5 }}
            >
              Swap
            </Link>
            <Link
              onClick={() => {
                router.push(`/${locale}/pools`);
              }}
              color={state.chain.theme.hover}
              style={{ marginLeft: 5 }}
            >
              Pools
            </Link>
            <Link
              onClick={() => {
                router.push(`/${locale}/farms`);
              }}
              color={state.chain.theme.hover}
              style={{ marginLeft: 5 }}
            >
              Farms
            </Link>
            <Link
              onClick={() => {
                router.push(`/${locale}/liquidity`);
              }}
              color={state.chain.theme.hover}
              style={{ marginLeft: 5 }}
            >
              Liquidity
            </Link>
            <Link
              onClick={() => {
                router.push(`/${locale}/staking`);
              }}
              color={state.chain.theme.hover}
              style={{ marginLeft: 5 }}
            >
              Staking
            </Link>
          </div>

          <span className="space"></span>
          <Stack stack={12}>
            <div className="ornn-display">
              {chain && (
                <Dropdown
                  iconDropdown
                  eventDropdown={eventDropdown}
                  chain={state.chain}
                  menu={data.chain}
                  color={state.chain?.theme.hover}
                  textColor={state.chain?.theme.color}
                />
              )}
            </div>
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
              <LinkIcon
                onClick={onSetting}
                color={state.chain.theme.hover}
                style={{ fontSize: 22, color: state.chain.theme.color }}
              >
                <IoSettingsSharp />
              </LinkIcon>
            </Tooltip>
            <div className="ornn-menu">
              <Tooltip text="Menu">
                <LinkIcon
                  onClick={() => {}}
                  color={state.chain.theme.hover}
                  style={{ fontSize: 22, color: state.chain.theme.color }}
                >
                  <IoMenu />
                </LinkIcon>
              </Tooltip>
            </div>
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
          border-bottom: 1px solid #c7c7c7;
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

        .ornn-display-menu,
        .ornn-display {
          display: flex;
          align-items: center;
        }
        .ornn-menu {
          display: none;
        }
        @media only screen and (max-width: 600px) {
          .ornn-display {
            display: none;
          }
        }

        @media only screen and (max-width: 870px) {
          .ornn-display-menu {
            display: none;
          }
          .ornn-menu {
            display: block;
          }
        }
      `}</style>
    </>
  );
}
