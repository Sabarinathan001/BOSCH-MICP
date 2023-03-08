import React from "react";
// import styles from "./card.module.scss"


function Card(props) {
  return (
    <div className={props.className}>{props.children}</div>
  );
}

export default Card;
