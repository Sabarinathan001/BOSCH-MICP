import React from "react";
import AboutCard from "./AboutCard";
import styles from "./aboutcarddata.module.scss"

function AboutCardData() {
  const data = [
    {
      heading: "About Living lab?",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod recusandae quis, iste enim sapiente voluptatum nemo. In ex soluta ipsum perspiciatis exercitationem.",
     name:"Read More"
    },
  ];
  return <div className={styles.card_container}>
    {data.map((data,index)=><AboutCard key={index} data={data}/>)}
  </div>;
}

export default AboutCardData;
