import React from 'react'
import styles from "./aboutdata.module.scss"
import Image from "next/image"

function AboutData({aboutdata}) {
  return (
    <div className={styles.aboutdata}>
    <div className={styles.subcontainer}>
    <h2 className={styles.heading} >{aboutdata.heading}</h2>
    <p className={styles.paragraph}>{aboutdata.paragraph}</p>
    </div>
    <Image className={styles.image} src={aboutdata.logo} alt="icon"  />
</div>
  )
}

export default AboutData