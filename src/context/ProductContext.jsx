import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { createContext, useState } from "react";

const BASE_URL = `https://dummyjson.com`;

const ProductContext = createContext({
  categories: {},
  products: {},
  onSearchChange: () => {},
  onClickSearch: () => {},
  result: "",
  searchProduct: "",
});

export const ProductContextProvider = ({ children }) => {
  const [searchProduct, setsearchProduct] = useState("");
  const [result, setResult] = useState("");

  // fetch Product Categories
  const fetchCategory = async () => {
    const { data } = await axios.get(`${BASE_URL}/products/categories`);
    return data;
  };

  //    get Category list
  const categories = useQuery(["categories"], () => fetchCategory());

  //   fetch Products
  const fetchProducts = async () => {
    const { data } = await axios.get(`${BASE_URL}/products`);
    return data;
  };

  const products = useQuery(["product"], () => fetchProducts());

  //   Handle search change
  const onSearchChange = (e) => {
    setsearchProduct(e.target.value);
  };

  //   Handle SearchBtn Click
  const onClickSearch = (e) => {
    if (!searchProduct && searchProduct === "") return;

    setResult(searchProduct);
    setsearchProduct("");
  };

  return (
    <ProductContext.Provider
      value={{
        categories,
        result,
        onSearchChange,
        onClickSearch,
        searchProduct,
        products,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
