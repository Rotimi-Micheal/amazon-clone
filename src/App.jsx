import React from "react";
import { Route, Routes } from "react-router";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/products/detail"/> */}
      </Routes>
    </Layout>
  );
};

export default App;
