import React from "react";
import { Routes, Route } from "react-router-dom"
import Products from "./Pages/Products";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import RequireAuth from "./hoc/RequireAuth";
import Users from "./Pages/Users";
import Demo from "./Pages/Demo";

const Admin = () => {
  return (
    <Routes>
      <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
      <Route path="/login" element={<Login />} />
      <Route path="/products" element={<RequireAuth><Products /></RequireAuth>} />
      <Route path="/users" element={<RequireAuth><Users /></RequireAuth>} />
      <Route path="/demo" element={<Demo />} />
    </Routes>
  );
};

export default Admin;
