import React from 'react'
import Image from 'next/image'
import Images from "../../assests/img/index"
import styles from "./navbarheader.module.scss"

import { useState } from 'react'
import SignOutCard from '../signout/SignOutCard'



function NavbarHeader({showNav ,setShowNav}) {
  const [signOut, setsignOut] = useState(false)
  const email="kaushik"
  // const [email, setemail] = useState("")
  // if(email==="")
// {
//   email="Sign In or Create a new account"
// }else{
//   setemail("kaushik")
// } 

  
 // function for showing the hidden navbar which is rendered when screen size reduces 
  const shownavbar=()=>{
    setShowNav(!showNav)
   }

  return (
    <div className={styles.header_container}>
     <Image src={Images.boschLogo} alt="bosch-logo" width={100} height={100} />
     <div className={styles.input}>
        <input type="search"  placeholder='Search' />
        <Image className={styles.searchicon} src={Images.searchicon} alt="searchicon" width={10} height={10} />
     </div>
     <div className={styles.emailbtn}>
     <button className={styles.signin} onClick={()=>setsignOut(!signOut)}>
        {email}
     </button>
     {signOut&&<SignOutCard/>}
     </div>
     <button onClick={shownavbar} className={styles.iconbtn}>
      <Image src={Images.searchicon} width={100} height={100} />
     </button>
    </div>
  )
}

export default NavbarHeader