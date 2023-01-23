import React from "react";

const Products = ({ image, name }) => {
  return (
    <div className="flex flex-col items-start justify-start p-6 bg-white shadow-sm gap-7 ">
      <h1 className="">{name}</h1>
      <div className="h-[13rem] w-[15rem]  flex items-center justify-center">
        <img
          className="max-h-full max-w-full object-contain h-[250px] w-[300px]"
          src={image}
          alt="product/img"
        />
      </div>
      <p>
        <a href="#">shop now</a>
      </p>
    </div>
  );
};

export default Products;
