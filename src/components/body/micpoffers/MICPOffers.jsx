import SecondaryButton from "@/components/button/SecondaryButton";
import Image from "next/image";
import React from "react";
import styles from "./micpoffers.module.scss";

function MICPOffers({ data, name, index }) {
  let reverse = index % 2 === 0 ? styles.offer_container : styles.reverse;
  let rev =index % 2 === 0 ? styles.subcontainer : styles.subreverse;
//   console.log(reverse);
  return (
    <div className={reverse}>
      <div className={rev}>
        <h4 className={styles.heading}>{data.heading}</h4>
        <p>{data.paragraph}</p>
        <SecondaryButton name={name} />
      </div>
      <div>
        <Image className={styles.image} src={data.image} alt="images" width={100} height={100} />
      </div>
    </div>
  );
}

export default MICPOffers;
