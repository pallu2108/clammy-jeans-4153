import React from "react";
import { Routes, Route } from "react-router-dom"
import Admin from "../Admin/Admin";
import AdminProducts from "../Admin/Pages/Products";
import AdminHome from "../Admin/Pages/Home";
import AdminLogin from "../Admin/Pages/Login";
import RequireAuth from "../Admin/hoc/RequireAuth";
import AdminUsers from "../Admin/Pages/Users";
import Demo from "../Admin/Pages/Demo";
import BestDeals from '../Pages/BestDeals'
import FlashRecords from '../Pages/FlashRecords'
import Home from "../Pages/Home";
import SinglePage from "../Components/SinglePage";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Checkout from "../Pages/Checkout";
import Success from "../Pages/Success";
import Trending from "../Pages/Trending";
import NewArrivals from "../Pages/NewArrivals";
import ShopByBrands from "../Pages/ShopByBrands";
import Editcart from "../Pages/Editcart";
import Watches from "../Pages/Watches";
import Makeup from "../Pages/Makeup";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/flash" element={<FlashRecords/>} />
      <Route path="/bestdeals"  element={<BestDeals/>} />
      <Route path="/admin" element={<RequireAuth><AdminHome /></RequireAuth>} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/products" element={<RequireAuth><AdminProducts /></RequireAuth>} />
      <Route path="/admin/users" element={<RequireAuth><AdminUsers /></RequireAuth>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/" element={<Home />} />
      <Route path="/success" element={<Success />} />
      <Route path="/single/:id" element={<SinglePage />} />
      <Route path="/trending" element={<Trending />} />
      <Route path="/newArrivals" element={<NewArrivals />} />
      <Route path="/shopbybrands" element={<ShopByBrands />} />
      <Route path="/editcart" element={<Editcart />} />
      <Route path="/men/watches" element={<Watches />} />
      <Route path="/women/makeup" element={<Makeup />} />
    </Routes>
  );
};

export default MainRoute;
