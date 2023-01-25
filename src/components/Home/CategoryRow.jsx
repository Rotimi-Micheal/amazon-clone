import React from "react";
import Products from "./Products";

const CategoryRow = (props) => {
  const { data, image, name, second, third } = props;
  // console.log(data?.data);

  if (data.status === "loading") {
    return <p className="text-blue-600">Loading...</p>;
  }
  if (data.status === "error") {
    return <p className="text-red-600">{data.error.message}</p>;
  }

  const splitArray = (dataa, num1, num2) => {
    console.log(dataa?.data);
    const split = dataa?.data
      ?.slice(num1, num2)
      .map((product) => (
        <Products
          key={product.id}
          image={product.images[0]}
          name={product.title}
        />
      ));
    return split;
  };

  let content;
  if (second) {
    content = splitArray(data, 5, 9);
  } else if (third) {
    content = splitArray(data, 10, 14);
  } else {
    content = splitArray(data, 0, 4);
  }

  // console.log(first);

  return (
    <div className="grid items-center justify-items-center grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-full p-6 gap-5 ">
      {/* {second ? splitArray(data, 0, 4) : splitArray(data, 5, 9)}
      {third && splitArray(data, 10, 14)} */}
      {content}
      {/* {second
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
                image={product.images[0]}
                name={product.title}
              />
            ))} */}
    </div>
  );
};

export default CategoryRow;
