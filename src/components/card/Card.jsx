import React from "react";
import styles from "./card.module.scss"


function Card({title,subtitle,Benefits}) {
  return (
    <div className={styles.card_container}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <ul>
        {Benefits.map((benefits,index) => (
          <li key={index}>{benefits}</li>
        ))}
      </ul>
      {/* <img src={props.image} alt={props.alt} /> */}
    </div>
  );
}

export default Card;
