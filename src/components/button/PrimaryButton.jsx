import React from "react";
import styles from "./primarybutton.module.scss"

function PrimaryButton({ name, type, disableValue, onclick }) {
  return (
    <button className={styles.primarybtn} type={type} disabled={disableValue} onClick={onclick}>
      {name}
    </button>
  );
}

export default PrimaryButton;
