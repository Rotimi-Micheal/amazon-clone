import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { IMGS, splideOptions } from "../../constant/data";

const ImagesRow = ({ data }) => {
  console.log(data);
  return (
    <div className="p-6 ">
      <div className="bg-white h-[18rem] flex flex-col p-6 justify-center items-center gap-4 ">
        <div className="w-full">
          {data?.map((item, index) => {
            const { title } = item;
            if (index < 1) {
              return (
                <h1 className="text-start  text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold ">
                  {title.slice(0, 8)}
                </h1>
              );
            }
          })}
        </div>
        <div className=" flex items-start justify-between ">
          <Splide options={splideOptions}>
            {data?.map((item, index) => {
              const { images } = item;

              return (
                <SplideSlide key={index}>
                  <div className="">
                    <img className="object-cover h-52" src={images} />
                  </div>
                </SplideSlide>
              );
            })}
            {/* {data.map((item, index) => (
              <SplideSlide key={index}>
                <div className="">
                  <img className=" " src={item.img} />
                </div>
              </SplideSlide>
            ))} */}
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default ImagesRow;
