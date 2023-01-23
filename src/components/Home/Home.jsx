import React, { Fragment, useContext } from "react";
import CategoryRow from "./CategoryRow";
import ImagesRow from "./ImagesRow";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { ImgSlidedata, ImgSlideOption } from "../../constant/data";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import ProductContext from "../../context/ProductContext";

const Home = () => {
  const categoriesCtx = useContext(ProductContext);

  const {
    categories,
    products,
    smartPhoneCategory,
    skincareCategory,
    laptopCategory,
    phoneCategory,
  } = categoriesCtx;
  console.log(skincareCategory?.data);

  const imageUrl = `https://api.escuelajs.co/api/v1/products/?title=Handmade`;
  const anoURL = `https://api.escuelajs.co/api/v1/products/?title=Generic`;
  const UrL = `https://api.escuelajs.co/api/v1/categories`;

  const { data: CaterogryQuery } = useQuery(["product"], async () => {
    const res = await axios.get(UrL);
    return await res.data;
  });
  const { data } = useQuery(["productss"], async () => {
    const res = await axios.get(anoURL);
    return await res.data;
  });
  const { data: rowData } = useQuery(["row"], async () => {
    const res = await axios.get(imageUrl);
    return await res.data;
  });
  // console.log(CaterogryQuery);
  // console.log(data);

  // if (CaterogryQuery.status === "loading")
  //   return <h1 className="text-5xl">Loading.....</h1>;

  // if (CaterogryQuery.status === "error") {
  //   return <h1 className="text-5xl">{JSON.stringify(CaterogryQuery.error)}</h1>;
  // }

  return (
    <Fragment>
      <main className="">
        <section className="">
          <Splide options={ImgSlideOption}>
            {ImgSlidedata.map((img) => (
              <SplideSlide key={img.id}>
                <img
                  className="w-full -z-[1]  -mb-[200px]  xl:-mb-[200px] lg:-mb-[150px] md:-mb-[100px] sm:-mb-[0px] xsm:-mb-[0px]   home-image"
                  src={img.img}
                  alt=""
                />
              </SplideSlide>
            ))}
          </Splide>

          <div className="flex flex-col bg-gradient-to-b from-[#f3efef] to-[#81819c] ">
            <CategoryRow data={products} />
            <CategoryRow second data={smartPhoneCategory} />

            <ImagesRow second data={skincareCategory} />
            <ImagesRow second data={laptopCategory} />
            <CategoryRow second data={skincareCategory} />
            <ImagesRow second data={smartPhoneCategory} />
            <ImagesRow second data={phoneCategory} />
            <CategoryRow second data={laptopCategory} />
            <CategoryRow second data={phoneCategory} />
            {/* <ImagesRow />
            <ImagesRow />
            <ImagesRow /> */}
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Home;
