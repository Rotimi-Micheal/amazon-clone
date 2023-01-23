import React from "react";
import Products from "./Products";

const CategoryRow = (props) => {
  const { data, image, name, second } = props;

  return (
    <div className="grid items-center justify-items-center grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-full p-6 gap-5 ">
      {second
        ? data?.data?.products
            ?.slice(0, 4)
            .map((product) => (
              <Products
                key={product.id}
                image={product.images[0]}
                name={product.title}
              />
            ))
        : data?.data
            ?.slice(0, 4)
            .map((product) => (
              <Products
                key={product.id}
                image={product.image}
                name={product.name}
              />
            ))}
    </div>
  );
};

export default CategoryRow;
