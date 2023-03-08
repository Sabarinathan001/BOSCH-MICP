import React,{useState} from "react";
import HiddenNavbar from "./HiddenNavbar";
import NavbarCenter from "./NavbarCenter";
import NavbarFooter from "./NavbarFooter";
import NavbarHeader from "./NavbarHeader";

function Navbar() {
  const [showNav, setShowNav] = useState(false)
  return (
    <>
      <NavbarHeader setShowNav={setShowNav} showNav={showNav} />
      <NavbarCenter />
      <NavbarFooter />
      {showNav&&<HiddenNavbar/>}
    </>
  );
}

export default Navbar;
