import React from 'react'
import AboutCardData from "@/components/body/aboutcard/AboutCardData";
import AboutMICP from "@/components/body/aboutmicp/AboutMICP";
import FoooterCardData from "@/components/body/footercard/FoooterCardData";
import MICPOfferData from "@/components/body/micpoffers/MICPOfferData";
import Images from '@/assests/img';
import axios from 'axios';
import Image from 'next/image';
function DataModelingPage() { 
  const title =["Data Discovery","Data Analytics","Algorithms","Modeling Tools","Virtual Ideation Space","Integration Development Environment","My Downloads"]
  // let items= data.Objects
  // console.log(items,"title")
  let data = [
    {
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam molestias iure dolorem ipsam perferendis quas deserunt numquam vero quam aut natus quia, corrupti quisquam qui et eveniet repellat unde expedita corporis. Illum quae, possimus voluptas laborum impedit perspiciatis explicabo ipsam. Nemo corporis itaque officiis quod inventore eum harum aliquid molestiae?",
      image:Images.datadiscovery,
      href: "./datavisualization"
    },
    {
      // heading: "Data Analytics",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam molestias iure dolorem ipsam perferendis quas deserunt numquam vero quam aut natus quia, corrupti quisquam qui et eveniet repellat unde expedita corporis. Illum quae, possimus voluptas laborum impedit perspiciatis explicabo ipsam. Nemo corporis itaque officiis quod inventore eum harum aliquid molestiae?",
      image: Images.dataanalytics,
      href: "./dataanalytics"
    },
    {
      // heading: "Algorithms",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam molestias iure dolorem ipsam perferendis quas deserunt numquam vero quam aut natus quia, corrupti quisquam qui et eveniet repellat unde expedita corporis. Illum quae, possimus voluptas laborum impedit perspiciatis explicabo ipsam. Nemo corporis itaque officiis quod inventore eum harum aliquid molestiae?",
      image: Images.algorithms,
      href: "./datadiscovery"
    },
    {
      // heading: "Modeling Tools",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam molestias iure dolorem ipsam perferendis quas deserunt numquam vero quam aut natus quia, corrupti quisquam qui et eveniet repellat unde expedita corporis. Illum quae, possimus voluptas laborum impedit perspiciatis explicabo ipsam. Nemo corporis itaque officiis quod inventore eum harum aliquid molestiae?",
      image: Images.modelingtool,
      href: "./datamodeling"
    },
    {
      // heading: "Virtual Ideation Space",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam molestias iure dolorem ipsam perferendis quas deserunt numquam vero quam aut natus quia, corrupti quisquam qui et eveniet repellat unde expedita corporis. Illum quae, possimus voluptas laborum impedit perspiciatis explicabo ipsam. Nemo corporis itaque officiis quod inventore eum harum aliquid molestiae?",
      image: Images.virtualideation,
      href:"./virtualideationspace"
    },
    {
      // heading: "Integration Development Environment",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam molestias iure dolorem ipsam perferendis quas deserunt numquam vero quam aut natus quia, corrupti quisquam qui et eveniet repellat unde expedita corporis. Illum quae, possimus voluptas laborum impedit perspiciatis explicabo ipsam. Nemo corporis itaque officiis quod inventore eum harum aliquid molestiae?",
      image: Images.ide,
      href:"./webide"
    },
    {
      // heading: "My Downloads",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam molestias iure dolorem ipsam perferendis quas deserunt numquam vero quam aut natus quia, corrupti quisquam qui et eveniet repellat unde expedita corporis. Illum quae, possimus voluptas laborum impedit perspiciatis explicabo ipsam. Nemo corporis itaque officiis quod inventore eum harum aliquid molestiae?",
      image: Images.mydownloads,
      href:"./mydownloads"
    },
  ];
  data.map((item,index)=>{
    item.heading = title[index]
    return item;
  });
  const src= "https://micp-image.s3.ap-south-1.amazonaws.com/1678248754016-Group_21415.png";
  return (
    <div>
      <Image loader={()=>src} src={src} width={1280} height={350}/>
      <AboutCardData />
      <AboutMICP />
      <MICPOfferData heading={"What MICP Offers"} subheading={"features & capablities offered by the platform"} data={data} />
      <FoooterCardData />
      <div style={{ height: "100vh" }}></div>
    </div>
  )
}

export default DataModelingPage
// export async function getStaticProps(){
//   const res = await fetch("http://192.168.3.138:8081/api4")
//   const data = await res.json()
//   return {
//     props: {
//       data: data,
//     },
//   }
// }