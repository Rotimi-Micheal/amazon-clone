import React from "react";
import Products from "./Products";

const CategoryRow = (props) => {
  const { data, image, name, second } = props;

  return (
    <div className="grid items-center justify-items-center grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-full p-6 gap-5 ">
      {!second
        ? data?.map((item, index) => {
            const { id, image, name } = item;
            if (index < 4)
              return <Products key={id} image={image} name={name} />;
          })
        : data?.map((item, index) => {
            const { images, title: name } = item;
            if (index < 4)
              return <Products key={index} image={images[0]} name={name} />;
          })}
    </div>
  );
};

export default CategoryRow;
