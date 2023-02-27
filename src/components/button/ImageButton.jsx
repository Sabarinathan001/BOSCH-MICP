import Image from 'next/image'
import React from 'react'
import styles from "./imagebutton.module.scss"

function ImageButton({icon,onclick}) {
  return (
    <button className={styles.imagebtn} onClick={onclick} >
        <Image src={icon} alt="close icon" width={100} height={100} />
    </button>
  )
}

export default ImageButton