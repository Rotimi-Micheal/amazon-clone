import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { IMGS, splideOptions } from "../../constant/data";

const ImagesRow = ({ data, second }) => {
  if (data.status === "loading") {
    return <p className="text-blue-600">Loading...</p>;
  }
  if (data.status === "error") {
    return <p className="text-red-600">{data.error.message}</p>;
  }
  console.log(data);
  return (
    <div className="p-6 ">
      <div className="bg-white h-[18rem] flex flex-col p-6 justify-center items-center gap-4 ">
        <div className="w-full">
          <h1 className="text-start  text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold ">
            {second ? data?.data?.products[0].category : ""}
          </h1>
        </div>
        <div className=" flex items-start justify-between ">
          <Splide options={splideOptions}>
            {second
              ? data?.data?.products?.map((product) => {
                  return (
                    <SplideSlide key={product.id}>
                      <div className="">
                        <img
                          className="object-cover h-52"
                          src={product.thumbnail}
                        />
                      </div>
                    </SplideSlide>
                  );
                })
              : ""}
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default ImagesRow;
