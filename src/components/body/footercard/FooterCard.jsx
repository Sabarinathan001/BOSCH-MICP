import PrimaryButton from '@/components/button/PrimaryButton'
import Image from 'next/image'
import React from 'react'
import styles from "./footercard.module.scss"

function FooterCard({data}) {
  return (
    <div className={styles.footercard_container} >
      <div className={styles.image_container}>
     <Image className={styles.image} src={data.image} alt="image" width={100} height={100} />
     </div>
     <h3 className={styles.heading}>{data.heading}</h3>
     <p className={styles.paragraph}>{data.paragraph}</p>
     <PrimaryButton className={styles.btn} name={"View More"}/>
    </div>
  )
}

export default FooterCard