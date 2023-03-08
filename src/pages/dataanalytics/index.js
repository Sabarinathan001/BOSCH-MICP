import MICPOfferData from '@/components/body/micpoffers/MICPOfferData'
import React, { Fragment } from 'react'
import Images from '@/assests/img';

function DataAnalytics() {
  const btnName="Analyze Data"
  const heading="Data Analytics";
  const subheading="lorem Ipsum is simply dummy text of the printing and typetesting industry"
  const data = [
    {
      heading: "Computer Vision Algorithm",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam molestias iure dolorem ipsam perferendis quas deserunt numquam vero quam aut natus quia, corrupti quisquam qui et eveniet repellat unde expedita corporis. Illum quae, possimus voluptas laborum impedit perspiciatis explicabo ipsam. Nemo corporis itaque officiis quod inventore eum harum aliquid molestiae?",
      image:Images.datadiscovery,
    },
    {
      heading: "Congestion Index Algorithm",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam molestias iure dolorem ipsam perferendis quas deserunt numquam vero quam aut natus quia, corrupti quisquam qui et eveniet repellat unde expedita corporis. Illum quae, possimus voluptas laborum impedit perspiciatis explicabo ipsam. Nemo corporis itaque officiis quod inventore eum harum aliquid molestiae?",
      image:Images.datadiscovery,
    },
  ]
  return (
    <Fragment>
      <MICPOfferData btnName={btnName} heading={heading} subheading={subheading} data={data}  />
    </Fragment>
  )
}

export default DataAnalytics