import React from "react";
import Link from "next/link";
import styles from "./navbarfooter.module.scss";

function NavbarFooter() {
  const links = [
    {
      name: "Data Discovery ",
      href: "datadiscovery",
    },
    {
      name: "Data Analytics",
      href: "dataanalytics",
    },
    {
      name: "Data Modeling",
      href: "datamodeling",
    },
    {
      name: "Data Visualization",
      href: "datavisualization",
    },
    {
      name: "WebIDE",
      href: "webide",
    },
    {
      name: "Virtual Ideation Space",
      href: "virtualideationspace",
    },
    {
      name: "My Downloads",
      href: "mydownloads",
    },
  ];
  return (
    <div className={styles.link_container}>
      {links.map((link, index) => (
        <Link className={styles.link} key={index} href={"/" + link.href}>
          {link.name}
        </Link>
      ))}
    </div>
  );
}

export default NavbarFooter;
