import React, { Fragment } from "react";
import Image from "next/image";
import Images from "../../assests/img/index";
import Icons from "@/assests/icons/Icons";
import styles from "./navbarheader.module.scss";
import { useRouter } from "next/router";
import { useState } from "react";
import SignOutCard from "../signout/SignOutCard";

function NavbarHeader({ showNav, setShowNav }) {
  const [signOut, setsignOut] = useState(false);
  const [email, setemail] = useState("Sign In ");
  const router = useRouter();
  // if(email==="")
  // {
  //   email="Sign In or Create a new account"
  // }else{
  //   setemail("kaushik")
  // }

  // function for showing the hidden navbar which is rendered when screen size reduces
  const shownavbar = () => {
    if (email === "Sign In") {
      return router.replace("./webide");
    } else {
      return setShowNav(!showNav);
    }
  };

  return (
    <Fragment>
      <Image src={Images.boschStrip} alt={"bosch strip logo"} className={styles.strip} />
      <div className={styles.header_container}>
        <Image
          className={styles.boschlogo}
          src={Images.boschLogo}
          alt="bosch-logo"
        />
      
        {/* <div className={styles.input}>
          <input type="search" placeholder="Search" />
          <Image
            className={styles.searchicon}
            src={Images.searchicon}
            alt="searchicon"
            width={10}
            height={10}
          />
        </div> */}
        <div className={styles.emailbtn}>
          <Image src={Icons.imageplaceholder}/>
          <button
            className={styles.signin}
            onClick={() => setsignOut(!signOut)}
          >
            {email}
          </button>
          {signOut && <SignOutCard />}
        </div>
        <button onClick={shownavbar} className={styles.iconbtn}>
          <Image src={Images.searchicon} />
        </button>
      </div>
    </Fragment>
  );
}

export default NavbarHeader;
