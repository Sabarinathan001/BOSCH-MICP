import AboutMICP from "@/components/body/aboutmicp/AboutMICP";
import PrimaryButton from "@/components/button/PrimaryButton";
import RegisterForm from "@/components/form/RegisterForm";
import SetPasswordForm from "@/components/form/SetPasswordForm";
import NavbarCenter from "@/components/Navbar/NavbarCenter";
import NavbarFooter from "@/components/Navbar/NavbarFooter";
import NavbarHeader from "@/components/Navbar/NavbarHeader";
import Card from "@/components/card/Card";
import Carousel from "@/components/carousel/Carousel";
import CarouselItem from "@/components/carousel/CarouselItem";
import AboutCardData from "@/components/body/aboutcard/AboutCardData";
import Link from "next/link";
import DropDown from "@/components/body/dropdown/DropDown";

export default function Home() {
  return (
    <>
     <RegisterForm />
      <SetPasswordForm />
      {/* <NavbarHeader /> */}
      {/* <NavbarCenter /> */}
      {/* <NavbarFooter /> */}
      <AboutMICP />
      <PrimaryButton  />
      {/* <Card/> */}
      {/* <CarouselItem/> */}
      <AboutCardData/>
      <DropDown/>

      <Link href={"/datamodeling"}>click</Link>
      <input style={{background:"gray"}} type="range" min={0} max={100}/>
      <div style={{ height: "100vh" }}></div>
    </>
  );
}
