import React, { ReactElement } from "react";
import { IoWallet, IoSettings } from "react-icons/io5";
import { I18n } from "../interface/i18n";
import Dropdown from "../widget/Dropdown";
import Button from "../widget/Button";
import Stack from "../widget/Stack";
import data from "../data/ornn.json";
import Logo from "../widget/Logo";
import i18n from "../data/i18n.json";
import { useRouter } from "next/router";
import { Menu } from "../interface";
import Modal from "../widget/Modal";

interface Props extends I18n {}

export default function Nav({ locale }: Props): ReactElement {
  const router = useRouter();
  const [modal, setModal] = React.useState(false);
  const { id, chain } = router.query;
  const eventDropdown = (value: Menu) => {
    router.replace(`/swap/${value.symbol.toLowerCase()}/${id.toString()}`);
  };
  const onSetting = () => {
    setModal(true);
  };
  React.useEffect(() => {
    return () => {};
  }, [id]);
  return (
    <>
      <nav>
        <div className="ornn-nav-content">
          <Logo scale={0.7} />
          <span className="space"></span>
          <Stack stack={12}>
            {chain && (
              <Dropdown
                eventDropdown={eventDropdown}
                {...(typeof chain === "string" && { active: chain })}
                menu={data.chain}
              />
            )}
            <Button
              slot="start"
              shape="round"
              textColor="#ffffff"
              size="small"
              icon={<IoWallet />}
            >
              {i18n[locale].connect}
            </Button>
            <Button
              onClick={onSetting}
              type="link"
              color="#fdecef"
              shape="circle"
              textColor="#ff647f"
              icon={<IoSettings />}
            ></Button>
          </Stack>
        </div>
      </nav>
      <Modal modal={modal} eventModal={(modal) => setModal(modal)} />
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
