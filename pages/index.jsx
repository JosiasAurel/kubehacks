import React from "react";

import styles from "../styles/index.module.css";

import { event2021HeroBlurredDataURI } from "../misc";

import { Button, Modal } from "@geist-ui/react";

import Header from "../components/Header";
import Organizer from "../components/Organizer";

import Image from "next/image";

const HomePage = () => {
  const [registratioModal, setRegistrationModal] = React.useState(false);

  return (
    <>
      <Header />
      <main className={styles.content}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
            margin: "1em 0.5em",
          }}
        >
          <Image
            placeholder="blur"
            blurDataURL={event2021HeroBlurredDataURI}
            src="/event2021.png"
            width={600}
            height={400}
          />
          <h2
            style={{
              textDecoration: "underline",
            }}
          >
            KubeHacks Init 2021
          </h2>
          <Button type="success-light">Register</Button>
        </div>
      </main>
      <div>
        <div style={{ fontSize: "1.7em", margin: "0.5em" }}>
          <h1 style={{ fontSize: "1em" }}>Theme : Init</h1>
          <p>
            This hackathon's goal is to help folks with little coding experience
            to improve on their skills by solving bit-sized problems and
            unleashing their problem solving potentials.
          </p>
          <p>
            The hackathon will be held online and will take place for 3 days,
            during which participants will have to solve a set of problems and
            submit for testing. Each test passed is an additional point for the
            participant.
          </p>
        </div>
        <div id="organizers">
          <h2 style={{ textAlign: "center" }}>Organizers</h2>
          <div className={styles.organizersContent}>
            <Organizer
              image={"/josias.jpg"}
              name="Josias Aurel"
              twitter="https://twitter.com/JosiasWing"
              github="https://github.com/JosiasAurel"
            />
            <Organizer
              image={"/josias.jpg"}
              name="Josias Aurel"
              twitter="https://twitter.com/JosiasWing"
              github="https://github.com/JosiasAurel"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
