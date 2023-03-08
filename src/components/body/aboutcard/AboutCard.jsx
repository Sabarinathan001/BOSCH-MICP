import React from "react";
import styles from "./aboutcard.module.scss";

function AboutCard({ data }) {
  const { heading, paragraph, name } = data;
  return (
    <div className={styles.aboutcard}>
      <div className={styles.subcard}>
        <h1 className={styles.heading}>{heading}</h1>
        <p className={styles.paragraph}>{paragraph}</p>
      </div>
      <button className={styles.button}>{name}</button>
    </div>
  );
}

export default AboutCard;
