import React from "react";

import { Tag } from "@geist-ui/react";

import Link from "next/link";

import styles from "../styles/components.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <div style={{
                display: "flex",
                justifyContent: "space-event",
                alignItems: "center"
            }}>
                <Tag type="success">
                    KubeHacks : Init
                </Tag>
            </div>
            <nav>
                <a>Home</a>
                <a>Register</a>
                <a>Sign In</a>
                <a>Organizers</a>
            </nav>
        </header>
    )
}

export default Header;