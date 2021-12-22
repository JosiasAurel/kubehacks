import React from "react";

import { Card } from "@geist-ui/react";
import { Twitter, Github } from "@geist-ui/react-icons";

import styles from "../styles/components.module.css";

const Organizer = ({ name, twitter, github, image }) => {
  return (
    <Card
      style={{
        margin: "0.8em",
      }}
      className={styles.organizerCard}
    >
      <img src={image} width={80} />
      <h2> {name} </h2>
      <div>
        {twitter ? (
          <a href={twitter}>
            {" "}
            <Twitter />{" "}
          </a>
        ) : (
          ""
        )}

        {github ? (
          <a href={github}>
            {" "}
            <Github />{" "}
          </a>
        ) : (
          ""
        )}
      </div>
    </Card>
  );
};

export default Organizer;
