import React from "react";
import Images from "@/assests/img";
import Carousel from "./Carousel";

function CarouselItem() {
  const carouselItem = [
    {
      image: Images.datadiscovery,
    },
    {
      image: Images.datadiscovery,
    },
    {
      image: Images.datadiscovery,
    },
  ];
  return (
    <div>
      {carouselItem.map((data, index) => {
        return (
          <div>
            <Carousel key={index} data={data} />
            {console.log(data, "sss")}
          </div>
        );
      })}
    </div>
  );
}

export default CarouselItem;
