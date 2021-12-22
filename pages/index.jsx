import React from "react";

import styles from "../styles/index.module.css";

import { event2021HeroBlurredDataURI } from "../misc";

import { Button, Modal } from "@geist-ui/react";

import Header from "../components/Header";

import Image from "next/image";

const HomePage = () => {
    const [registratioModal, setRegistrationModal] = React.useState(false);
    const [menu, setMenu] = React.useState(false);

    return (
        <>
            <Header />
            <main className={styles.content}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "center"
                }}>
                    <Image placeholder="blur" blurDataURL={event2021HeroBlurredDataURI} src="/event2021.png" width={600} height={400} />
                    <h2 style={{
                        textDecoration: "underline"
                    }}>KubeHacks Init 2021</h2>
                    <Button type="success-light">
                        Register
                    </Button>
                </div>
            </main>
            <Modal visible={menu} onClose={() => setMenu(false)}>
                    <Modal.Title>
                        Menu
                    </Modal.Title>
                    <Modal.Content>
                        Some Menu Items
                    </Modal.Content>
            </Modal>
        </>
    )
}

export default HomePage;