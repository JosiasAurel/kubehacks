import React from "react";

import { Tag, Modal } from "@geist-ui/react";
import { Menu } from "@geist-ui/react-icons";

import Link from "next/link";

import styles from "../styles/components.module.css";

import toast from "react-hot-toast";

const Header = ({ setRegisterModal }) => {
  const [menu, setMenu] = React.useState(false);
  const [windowWidth, setWindowWidth] = React.useState(0);

  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);
  return (
    <>
      <header className={styles.header}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-event",
            alignItems: "center",
          }}
        >
          <Tag
            style={{
              background: "transparent",
            }}
            type="success"
          >
            KubeHacks : Init
          </Tag>
        </div>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <a onClick={(_) => setRegisterModal()}>Register</a>
          <a onClick={(_) => toast("You can't sign in at the moment")}>
            Sign In
          </a>
          <a href="#organizers">Organizers</a>
        </nav>
        {windowWidth <= 500 ? (
          <div onClick={(_) => setMenu(!menu)}>
            <Menu />
          </div>
        ) : (
          ""
        )}
      </header>
      <Modal visible={menu} onClose={() => setMenu(false)}>
        <Modal.Title>Menu</Modal.Title>
        <Modal.Content>
          <nav
            className={styles.header__nav}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Link href="/">
              <a>Home</a>
            </Link>
            <a>Register</a>
            <a onClick={(_) => toast("You can't sign in at the moment")}>
              Sign In
            </a>
            <a href="#organizers">Organizers</a>
          </nav>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default Header;
