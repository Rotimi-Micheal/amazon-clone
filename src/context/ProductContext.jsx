import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { createContext, useState } from "react";

const BASE_URL = `https://dummyjson.com`;

// fetch product Category
const fetchProductCategory = async (category) => {
  const { data } = await axios.get(
    `https://dummyjson.com/products/category/${category}`
  );
  return data;
};

// useQuery Of fetched category
const useQueryFetchedCategory = (queryKey, fetchCategory) => {
  const useQueryCategory = useQuery([queryKey], () =>
    fetchProductCategory(fetchCategory)
  );
  return useQueryCategory;
};

const ProductContext = createContext({
  categories: {},
  products: {},
  onSearchChange: () => {},
  onClickSearch: () => {},
  result: "",
  searchProduct: "",
  smartPhoneCategory: {},
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

  // fetchProductCategory("home-decoration");
  const smartPhoneCategory = useQueryFetchedCategory(
    "smartPhone",
    "home-decoration"
  );

  // fetch skincareCategory
  const skincareCategory = useQueryFetchedCategory("skincare", "skincare");

  //  fetch laptop category
  const laptopCategory = useQueryFetchedCategory("laptops", "laptops");

  // fetch smarthphone category
  const phoneCategory = useQueryFetchedCategory("phone", "smartphones");

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
        smartPhoneCategory,
        skincareCategory,
        laptopCategory,
        phoneCategory,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
