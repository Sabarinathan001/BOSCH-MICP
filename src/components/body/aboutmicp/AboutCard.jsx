import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
// import Images from '@/assests/img'
import styles from "./aboutcard.module.scss"

function AboutCard({carddata}) {
  return (
    <div className={styles.aboutcard}>
      <div className={styles.image_container}>
     <Image className={styles.image} src={carddata.logo} alt="icons" width={100} height={1000} />
     </div>
     <Link className={styles.link} href={'/'} >{carddata.Name}</Link>
     <p>{carddata.paragraph}</p>
    </div>
  )
}

export default AboutCard