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
        "Lorm is simply summy text of the printing and type setting the industry",
    },
    {
      image: Icons.coredata,
      heading: "How to query data",
      paragraph:
      "Lorm is simply summy text of the printing and type setting the industry",  },
    {
      image: Icons.userai,
      heading: "How to use algorithms",
      paragraph:
      "Lorm is simply summy text of the printing and type setting the industry", },
    {
      image: Icons.windowbrowser,
      heading: "How to access WebIde",
      paragraph:
      "Lorm is simply summy text of the printing and type setting the industry",  },
    {
      image: Icons.molecule,
      heading: "How to use tools",
      paragraph:
        "Lorm is simply summy text of the printing and type setting the industry",
    },
    {
      image: Icons.desktopdashboard,
      heading: "Create dashboard",
      paragraph:
        "Lorm is simply summy text of the printing and type setting the industry",
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
