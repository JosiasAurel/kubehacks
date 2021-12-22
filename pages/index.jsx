import React from "react";

import styles from "../styles/index.module.css";

import { event2021HeroBlurredDataURI } from "../misc";

import { Button, Modal, Spacer, Divider } from "@geist-ui/react";

import Header from "../components/Header";
import Organizer from "../components/Organizer";
import RegisterForm from "../components/Register";

import Image from "next/image";
import Head from "next/head";

const HomePage = () => {
  const [registrationModal, setRegistrationModal] = React.useState(false);
  return (
    <>
      <Head>
        <title>KubeHacks Init 2021</title>
      </Head>
      <Header
        setRegisterModal={(_) => setRegistrationModal(!registrationModal)}
      />
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
          {registrationModal ? (
            <Button
              loading
              onClick={(_) => setRegistrationModal(!registrationModal)}
              type="success-light"
            >
              Register
            </Button>
          ) : (
            <Button
              onClick={(_) => setRegistrationModal(!registrationModal)}
              type="success-light"
            >
              Register
            </Button>
          )}
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

          <p>
            All participants who succeed in completing at least 3 tasks will
            receive a certificate of completion in reward of their hard work.
          </p>
          <p>
            The hackathon will be held online so participants can be from anywhere.
            Participants should be students of age less that 18.
            The hackathon will start from 26 of December 2021 and end the 28 December 2021. 
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
              image={"/glen.jpeg"}
              name="Ngha Glen"
              github="https://github.com/GlenMue"
            />
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <h2>Sponsors</h2>
          <p>No Sponsors yet</p>
          <a target="_blank" href="https://forms.gle/cW4asHFpJypCDH9D7">
            <Button type="success">Become a Sponsor</Button>
          </a>
        </div>
        <Spacer />
      </div>

      <Spacer />
      <Divider />
      <footer
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <img src="/logo.png" alt="KubeHacksLogo" width="40%" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <a href="mailto:josias@josiasw.dev">josias@josiasw.dev</a>
          <span
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <img src="/myhackclub.PNG" width="30px" alt="HackClub" />
            <p>HackClub</p>
          </span>
        </div>
      </footer>
      <Spacer />

      <Modal
        visible={registrationModal}
        onClose={() => setRegistrationModal(!registrationModal)}
      >
        <Modal.Title>Register</Modal.Title>
        <Modal.Content>
          <RegisterForm />
        </Modal.Content>
      </Modal>
    </>
  );
};

export default HomePage;
