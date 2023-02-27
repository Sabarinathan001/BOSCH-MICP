import React from 'react'
import Image from 'next/image'
import Images from "../../assests/img/index"
import styles from "./navbarheader.module.scss"



function NavbarHeader() {
    const email="kaushik"
  return (
    <div className={styles.header_container}>
     <Image src={Images.boschLogo} alt="bosch-logo" width={100} height={100} />
     <div>
        <input type="search"  placeholder='Search' />
        <Image className={styles.searchicon} src={Images.searchicon} alt="searchicon" width={10} height={10} />
     </div>
     <button>
        {email}
     </button>
    </div>
  )
}

export default NavbarHeader