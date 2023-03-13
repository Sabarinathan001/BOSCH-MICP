import React from "react";
import Images from "@/assests/img";
import MICPOffers from "./MICPOffers";
import styles from "./micpofferdata.module.scss"

function MICPOfferData({btnName,heading,subheading,data}) {
  // console.log(title,"MIC")
  return (
    <div className={styles.data_container}>
        <h2 className={styles.title}>{heading}</h2>
        <h4 className={styles.subtitle}>{subheading}</h4>
      {data.map((data, index) => (
        <MICPOffers key={index} data={data} index={index} name={btnName} />
      ))}
    </div>
  );
}

export default MICPOfferData;
