import SecondaryButton from "@/components/button/SecondaryButton";
import Link from "next/link";
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
        <p className={styles.paragraph}>{data.paragraph}</p>
        {/* <SecondaryButton name={name} /> */}
        <Link href={`${data.href}`} className={styles.link} >Know More</Link>
      </div>
      <div> 
        <Image  className={styles.image} src={data.image} alt="images" />
      </div>
    </div>
  );
}

export default MICPOffers;
