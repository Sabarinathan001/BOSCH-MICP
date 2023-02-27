import React from "react";
import styles from "./secondarybutton.module.scss"

function SecondaryButton({ name, type, disabledValue, onclick }) {
  return (
    <button className={styles.secondarybtn} type={type} disabled={disabledValue} onClick={onclick}>
      {name}
    </button>
  );
}

export default SecondaryButton;
