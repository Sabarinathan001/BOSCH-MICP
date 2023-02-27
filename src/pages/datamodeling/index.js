import React from 'react'
// import AboutCard from "@/components/body/aboutcard/AboutCard";
import AboutCardData from "@/components/body/aboutcard/AboutCardData";
import AboutMICP from "@/components/body/aboutmicp/AboutMICP";
import FoooterCardData from "@/components/body/footercard/FoooterCardData";
import MICPOfferData from "@/components/body/micpoffers/MICPOfferData";
import Navbar from "@/components/Navbar/Navbar";

function DataModelingPage() {
  return (
    <div>
       <Navbar />
      <AboutCardData />
      <AboutMICP />
      <MICPOfferData />
      <FoooterCardData />
      <div style={{ height: "100vh" }}></div>
    </div>
  )
}

export default DataModelingPage