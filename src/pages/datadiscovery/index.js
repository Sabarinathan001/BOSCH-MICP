import React, { Fragment } from "react";
import Images from "@/assests/img";
import MICPOfferData from "@/components/body/micpoffers/MICPOfferData";

function DataDicoveyPage() {
  const btnName="Get Data"
  const heading="Data Discovery";
  const subheading="lorem Ipsum is simply dummy text of the printing and typetesting industry"
  const data = [
    {
      heading: "Map Data",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam molestias iure dolorem ipsam perferendis quas deserunt numquam vero quam aut natus quia, corrupti quisquam qui et eveniet repellat unde expedita corporis. Illum quae, possimus voluptas laborum impedit perspiciatis explicabo ipsam. Nemo corporis itaque officiis quod inventore eum harum aliquid molestiae?",
      image:Images.datadiscovery,
    },
    {
      heading: "Traffic Video Data",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam molestias iure dolorem ipsam perferendis quas deserunt numquam vero quam aut natus quia, corrupti quisquam qui et eveniet repellat unde expedita corporis. Illum quae, possimus voluptas laborum impedit perspiciatis explicabo ipsam. Nemo corporis itaque officiis quod inventore eum harum aliquid molestiae?",
      image:Images.datadiscovery,
    },
    {
      heading: "Camera Processed Data",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam molestias iure dolorem ipsam perferendis quas deserunt numquam vero quam aut natus quia, corrupti quisquam qui et eveniet repellat unde expedita corporis. Illum quae, possimus voluptas laborum impedit perspiciatis explicabo ipsam. Nemo corporis itaque officiis quod inventore eum harum aliquid molestiae?",
      image:Images.datadiscovery,
    },
    {
      heading: "Air Quality",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam molestias iure dolorem ipsam perferendis quas deserunt numquam vero quam aut natus quia, corrupti quisquam qui et eveniet repellat unde expedita corporis. Illum quae, possimus voluptas laborum impedit perspiciatis explicabo ipsam. Nemo corporis itaque officiis quod inventore eum harum aliquid molestiae?",
      image:Images.datadiscovery,
    },
  ]
  return (
    <Fragment>
      <MICPOfferData btnName={btnName} heading={heading} subheading={subheading} data={data}  />
    </Fragment>
  );
}

export default DataDicoveyPage;
