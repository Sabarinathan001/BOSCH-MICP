import React from 'react'
import AboutCardData from "@/components/body/aboutcard/AboutCardData";
import AboutMICP from "@/components/body/aboutmicp/AboutMICP";
import FoooterCardData from "@/components/body/footercard/FoooterCardData";
import MICPOfferData from "@/components/body/micpoffers/MICPOfferData";
import Images from '@/assests/img';
function DataModelingPage() { 
  const data = [
    {
      heading: "Data Discovery",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam molestias iure dolorem ipsam perferendis quas deserunt numquam vero quam aut natus quia, corrupti quisquam qui et eveniet repellat unde expedita corporis. Illum quae, possimus voluptas laborum impedit perspiciatis explicabo ipsam. Nemo corporis itaque officiis quod inventore eum harum aliquid molestiae?",
      image:Images.datadiscovery,
    },
    {
      heading: "Data Analytics",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam molestias iure dolorem ipsam perferendis quas deserunt numquam vero quam aut natus quia, corrupti quisquam qui et eveniet repellat unde expedita corporis. Illum quae, possimus voluptas laborum impedit perspiciatis explicabo ipsam. Nemo corporis itaque officiis quod inventore eum harum aliquid molestiae?",
      image: Images.dataanalytics,
    },
    {
      heading: "Algorithms",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam molestias iure dolorem ipsam perferendis quas deserunt numquam vero quam aut natus quia, corrupti quisquam qui et eveniet repellat unde expedita corporis. Illum quae, possimus voluptas laborum impedit perspiciatis explicabo ipsam. Nemo corporis itaque officiis quod inventore eum harum aliquid molestiae?",
      image: Images.algorithms,
    },
    {
      heading: "Modeling Tools",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam molestias iure dolorem ipsam perferendis quas deserunt numquam vero quam aut natus quia, corrupti quisquam qui et eveniet repellat unde expedita corporis. Illum quae, possimus voluptas laborum impedit perspiciatis explicabo ipsam. Nemo corporis itaque officiis quod inventore eum harum aliquid molestiae?",
      image: Images.modelingtool,
    },
    {
      heading: "Virtual Ideation Space",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam molestias iure dolorem ipsam perferendis quas deserunt numquam vero quam aut natus quia, corrupti quisquam qui et eveniet repellat unde expedita corporis. Illum quae, possimus voluptas laborum impedit perspiciatis explicabo ipsam. Nemo corporis itaque officiis quod inventore eum harum aliquid molestiae?",
      image: Images.virtualideation,
    },
    {
      heading: "Integration Development Environment",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam molestias iure dolorem ipsam perferendis quas deserunt numquam vero quam aut natus quia, corrupti quisquam qui et eveniet repellat unde expedita corporis. Illum quae, possimus voluptas laborum impedit perspiciatis explicabo ipsam. Nemo corporis itaque officiis quod inventore eum harum aliquid molestiae?",
      image: Images.ide,
    },
    {
      heading: "My Downloads",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam molestias iure dolorem ipsam perferendis quas deserunt numquam vero quam aut natus quia, corrupti quisquam qui et eveniet repellat unde expedita corporis. Illum quae, possimus voluptas laborum impedit perspiciatis explicabo ipsam. Nemo corporis itaque officiis quod inventore eum harum aliquid molestiae?",
      image: Images.mydownloads,
    },
  ];
  return (
    <div>
      <AboutCardData />
      <AboutMICP />
      <MICPOfferData  btnName={"Know More"}  heading={"What MICP Offers"} subheading={"features & capablities offered by the platform"} data={data} />
      <FoooterCardData />
      <div style={{ height: "100vh" }}></div>
    </div>
  )
}

export default DataModelingPage