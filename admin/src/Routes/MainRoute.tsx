import React from "react";
import { Routes, Route } from "react-router-dom"
import Products from "../Pages/Products";
import Home from "../Pages/Home";
import Login from "../Pages/Login";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
};

export default MainRoute;
