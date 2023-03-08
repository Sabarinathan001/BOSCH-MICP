import Image from 'next/image'
import React from 'react'
import Images from '@/assests/img'
import PrimaryButton from '../button/PrimaryButton'
import styles from "./datavisualization.module.scss"

function DataVisualization({heading,paragraph,image,status,name,text}) {
  return (
    <div className={styles.card}>
      <h2 className={styles.heading}>{heading}</h2>
      <p className={styles.paragraph}>{paragraph}</p>
      <Image className={styles.image} src={image} alt='image' width={100} height={100} />
      <h5 className={styles.status}>{status}</h5>
      <p className={styles.text}>{text}</p>
      <PrimaryButton name={name}/>
    </div>
  )
}

export default DataVisualization
