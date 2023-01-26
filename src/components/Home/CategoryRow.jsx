import React from "react";
import Products from "./Products";

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

const CategoryRow = (props) => {
  const { data, second, third, fourth, fifth } = props;

  if (data.status === "loading") {
    return <p className="text-blue-600">Loading...</p>;
  }
  if (data.status === "error") {
    return <p className="text-red-600">{data.error.message}</p>;
  }

  let content;
  const splitData = data;
  if (second) {
    content = splitArray(splitData, 5, 9);
  } else if (third) {
    content = splitArray(splitData, 10, 14);
  } else if (fourth) {
    content = splitArray(splitData, 15, 19);
  } else if (fifth) {
    content = splitArray(splitData, 20, 24);
  } else {
    content = splitArray(splitData, 0, 4);
  }

  // console.log(first);

  return (
    <div className="grid items-center justify-items-center grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-full p-6 gap-5 ">
      {content}
    </div>
  );
};

export default CategoryRow;
