import Image from "next/image";
import React from "react";
import Images from "@/assests/img";
import Icons from "../../../assests/icons/Icons";
import AboutData from "./AboutData";
import AboutCard from "./AboutCard";
import styles from "./aboutmicp.module.scss";

function AboutMICP() {
  const aboutdata = {
    heading: "About MICP",
    logo: Images.aboutmicp,
    paragraph:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, quis.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, quis.Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  };
  const carddata = [
    {
      Name: "Data",
      logo: Icons.datapoints,
      paragraph:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, quis.Lorem, ipsum dolor ",
    },
    {
      Name: "Tools",
      logo: Icons.hammerchisel,
      paragraph:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, quis.Lorem, ipsum dolor",
    },
    {
      Name: "Implementation",
      logo: Icons.materialsadd,
      paragraph:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, quis.Lorem, ipsum dolor",
    },
    {
      Name: "Collaboration",
      logo: Icons.teamlight,
      paragraph:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, quis.Lorem, ipsum dolor ",
    },
  ];
  return (
    <div className={styles.about_container}>
      <AboutData aboutdata={aboutdata} />;
      <div className={styles.carddata}>
        {carddata.map((carddata, index) => (
          <AboutCard key={index} carddata={carddata} />
        ))}
      </div>
    </div>
  );
}

export default AboutMICP;
