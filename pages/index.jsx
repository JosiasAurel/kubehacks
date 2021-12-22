import React from "react";

import styles from "../styles/index.module.css";

import { event2021HeroBlurredDataURI } from "../misc";

import { Button, Modal } from "@geist-ui/react";

import Header from "../components/Header";

import Image from "next/image";

const HomePage = () => {
    const [registratioModal, setRegistrationModal] = React.useState(false);

    return (
        <>
            <Header />
            <main className={styles.content}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    margin: "1em 0.5em"
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
        </>
    )
}

export default HomePage;