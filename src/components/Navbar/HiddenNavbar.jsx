import React from 'react'
import Link from 'next/link';
import styles from "./hiddennavbar.module.scss"

function HiddenNavbar() {
    const links = [
        {
          name: "Data Discovery ",
          href: "/datadiscovery",
        },
        {
          name: "Data Analytics",
          href: "/dataanalytics",
        },
        {
          name: "Data Modeling",
          href: "/datamodeling",
        },
        {
          name: "Data Visualization",
          href: "/datavisualization",
        },
        {
          name: "WebIDE",
          href: "/webide",
        },
        {
          name: "Virtual Ideation Space",
          href: "/virtualideationspace",
        },
        {
          name: "My Downloads",
          href: "/mydownloads",
        },
      ]; 
  return (
    <div className={styles.hiddenlink} >
      {links.map((link,index)=><Link key={index} href={link.href}>{link.name}</Link>)}
    </div>
  )
}

export default HiddenNavbar
