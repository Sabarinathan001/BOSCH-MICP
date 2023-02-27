import React from "react";
import Images from "@/assests/img";
import MICPOffers from "./MICPOffers";
import styles from "./micpofferdata.module.scss"

function MICPOfferData() {
  const data = [
    {
      heading: "Data Discovery",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam molestias iure dolorem ipsam perferendis quas deserunt numquam vero quam aut natus quia, corrupti quisquam qui et eveniet repellat unde expedita corporis. Illum quae, possimus voluptas laborum impedit perspiciatis explicabo ipsam. Nemo corporis itaque officiis quod inventore eum harum aliquid molestiae?",
      image: Images.datadiscovery,
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
  const btnName="Know More"
  const heading="What MICP Offers"
  const subheading="features & capablities offered by the platform"
  return (
    <div className={styles.data_container}>
        <h2 className={styles.title}>{heading}</h2>
        <h4 className={styles.subtitle}>{subheading}</h4>
      {data.map((data, index) => (
        <MICPOffers key={index} data={data} index={index} name={btnName} />
      ))}
    </div>
  );
}

export default MICPOfferData;
