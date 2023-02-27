import React from "react";
import Icons from "@/assests/icons/Icons";
import FooterCard from "./FooterCard";
import styles from "./footercarddata.module.scss";

function FoooterCardData() {
  let heading = "How To";
  let subtitle = "Guide and knowledge articles on how to use platform";
  const data = [
    {
      image: Icons.registration,
      heading: "How to register",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, atque sit minus doloribus quos nobis libero odio quidem veniam unde!",
    },
    {
      image: Icons.coredata,
      heading: "How to query data",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, atque sit minus doloribus quos nobis libero odio quidem veniam unde!",
    },
    {
      image: Icons.userai,
      heading: "How to use algorithms",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, atque sit minus doloribus quos nobis libero odio quidem veniam unde!",
    },
    {
      image: Icons.windowbrowser,
      heading: "How to access WebIde",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, atque sit minus doloribus quos nobis libero odio quidem veniam unde!",
    },
    {
      image: Icons.molecule,
      heading: "How to use tools",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, atque sit minus doloribus quos nobis libero odio quidem veniam unde!",
    },
    {
      image: Icons.desktopdashboard,
      heading: "Create dashboard",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, atque sit minus doloribus quos nobis libero odio quidem veniam unde!",
    },
  ];
  return (
    <div className={styles.footercard}>
      <h2 className={styles.heading}>{heading}</h2>
      <h5 className={styles.subtitle}>{subtitle}</h5> 
      <div className={styles.card_container}>
        {data.map((data, index) => (
          <FooterCard data={data} key={index} />
        ))}
      </div>
    </div>
  );
}

export default FoooterCardData;
