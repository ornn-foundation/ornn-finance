import React, { ReactElement } from "react";
import { IoWallet, IoSettingsSharp, IoMenu } from "react-icons/io5";
import { I18n } from "../interface/i18n";
import data from "../data/ornn.json";
import i18n from "../data/i18n.json";
import { useRouter } from "next/router";
import { Chain } from "../interface";
import { Context, initialChain, Mode } from "../lib/context";
import {
  Box,
  Button,
  Dropdown,
  Link,
  LinkIcon,
  Logo,
  Modal,
  Space,
  Stack,
  Switch,
  Tooltip,
} from "../widget";
import { getStorage, KEY_STORAGE } from "../utils/storage";

interface Props extends I18n {}

export default function Nav({ locale }: Props): ReactElement {
  const { state, dispatch } = React.useContext(Context);
  const router = useRouter();
  const [modal, setModal] = React.useState(false);
  const { id, chain } = router.query;
  const [stateNav, setStateNav] = React.useState({
    checked: false,
    navClass: "",
  });
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

  const onChange = (checked: boolean) => {
    setStateNav((v) => ({ ...v, checked }));
    if (checked) {
      dispatch({ type: "SET_THEME_DARK" });
    } else {
      dispatch({ type: "SET_THEME_LIGHT" });
    }
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
    const element = getStorage(KEY_STORAGE.mode);
    setStateNav((v) => ({
      ...v,
      checked: element === Mode.dark ? true : false,
    }));
  }, []);
  return (
    <>
      <nav>
        <div className="ornn-nav-content">
          <Logo
            margin="0 8px 0 0"
            onClick={() => {
              router.push("/");
            }}
            color={state.chain?.theme.color}
            scale={0.8}
          />
          <div className="ornn-display-menu">
            <Link
              onClick={() => {
                router.push(`/${locale}/trade`);
              }}
              color={state.chain.theme.hover}
              style={{ marginLeft: 5, fontSize: 14 }}
            >
              Trade
            </Link>
            <Link
              onClick={() => {
                router.push(`/${locale}/swap/eth/bnb`);
              }}
              color={state.chain.theme.hover}
              style={{ marginLeft: 5, fontSize: 14 }}
            >
              Swap
            </Link>
            <Link
              onClick={() => {
                router.push(`/${locale}/pools`);
              }}
              color={state.chain.theme.hover}
              style={{ marginLeft: 5, fontSize: 14 }}
            >
              Pools
            </Link>
            <Link
              onClick={() => {
                router.push(`/${locale}/farms`);
              }}
              color={state.chain.theme.hover}
              style={{ marginLeft: 5, fontSize: 14 }}
            >
              Farms
            </Link>
            <Link
              onClick={() => {
                router.push(`/${locale}/liquidity`);
              }}
              color={state.chain.theme.hover}
              style={{ marginLeft: 5, fontSize: 14 }}
            >
              Liquidity
            </Link>
            <Link
              onClick={() => {
                router.push(`/${locale}/staking`);
              }}
              color={state.chain.theme.hover}
              style={{ marginLeft: 5, fontSize: 14 }}
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
        <Box flex alignItems="center">
          <Tooltip text="Github">
            {stateNav.checked ? "Dark" : "Light"} Mode
          </Tooltip>
          <Space />
          <Switch
            onChange={onChange}
            checked={stateNav.checked}
            size="small"
            color={state.chain?.theme.color}
          />
        </Box>
        <Box
          style={{ marginTop: 16, paddingRight: 10 }}
          flex
          alignItems="center"
        >
          <Tooltip text="Github">Language</Tooltip>
          <Space />
          {locale.toUpperCase()}
        </Box>
      </Modal>
      <style jsx>{`
        nav {
          position: sticky;
          top: 0;
          -webkit-backdrop-filter: saturate(180%) blur(20px);
          backdrop-filter: saturate(180%) blur(20px);
          z-index: 10;
          background: rgba(255, 255, 255, 0.4);
        }

        .ornn-nav-content {
          display: flex;
          align-items: center;
          margin: 0 auto;
          /* max-width: 980px; */
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
