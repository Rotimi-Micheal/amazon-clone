import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

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
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    if (!dataFetched) {
      fetchProductCategory();
      setDataFetched(true);
    }
  }, [dataFetched]);

  // fetch Product Categories
  const fetchCategory = async () => {
    const { data } = await axios.get(`${BASE_URL}/products/categories`);
    return data;
  };

  //    get Category list
  const categories = useQuery(["categories"], () => fetchCategory());

  //   fetch Products
  const fetchProducts = async (result) => {
    const { data } = await axios.get(
      result
        ? `https://dummyjson.com/products/search?q=${result}`
        : `https://dummyjson.com/products`
    );
    return data.products;
  };

  const products = useQuery(["product", result], () => fetchProducts(result));

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

  setTimeout(() => {
    if (result) {
      setResult("");
    }
  }, 10000);

  //   Handle SearchBtn Click
  const onClickSearch = () => {
    if (searchProduct && searchProduct !== "") {
      setResult(searchProduct);
      setsearchProduct("");
    }
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
