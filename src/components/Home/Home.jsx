import React, { Fragment } from "react";
import CategoryRow from "./CategoryRow";
import ImagesRow from "./ImagesRow";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { ImgSlidedata, ImgSlideOption } from "../../constant/data";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  // const fetchCategory = () => {
  //   return axios
  //     .get(`https://api.escuelajs.co/api/v1/categories`)
  //     .then((res) => res.data);
  // };

  // const CaterogryQuery = useQuery({
  //   queryKey: ["product"],
  //   queryFn: fetchCategory,
  // });
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
  console.log(CaterogryQuery);
  console.log(data);

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

          <div className="flex flex-col bg-gradient-to-b from-transparent to-[#81819c] ">
            <CategoryRow data={CaterogryQuery} />

            <CategoryRow second data={data} />
            <ImagesRow />
            {/* <ImagesRow /> */}
            <CategoryRow />
            {/* <ImagesRow />
            <ImagesRow /> */}
            <CategoryRow />
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