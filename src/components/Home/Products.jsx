import React from "react";

const Products = ({ image, name }) => {
  return (
    <div className="flex flex-col items-start justify-start p-6 bg-white shadow-sm gap-7">
      <h1 className="">{name}</h1>
      <img src={image} alt="product/img" />
      <p>
        <a href="#">shop now</a>
      </p>
    </div>
  );
};

export default Products;
