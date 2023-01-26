import React, { Fragment, useContext } from "react";
import CategoryRow from "./CategoryRow";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { ImgSlidedata, ImgSlideOption } from "../../constant/data";
import ProductContext from "../../context/ProductContext";
import ImagesRow from "./ImagesRow";

const Home = () => {
  const categoriesCtx = useContext(ProductContext);

  const {
    products,
    smartPhoneCategory,
    phoneCategory,
    skincareCategory,
    laptopCategory,
  } = categoriesCtx;

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
            <CategoryRow second data={products} />

            <ImagesRow second data={skincareCategory} />
            <ImagesRow second data={laptopCategory} />
            <CategoryRow third data={products} />
            <ImagesRow second data={smartPhoneCategory} />
            <ImagesRow second data={phoneCategory} />
            <CategoryRow fourth data={products} />
            <CategoryRow fifth data={products} />
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
