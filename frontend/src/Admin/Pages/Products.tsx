import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar";
import ProductsComponent from "../components/ProductsComponent";

const AdminProducts = () => {
  return (
    <Box>
      <Navbar />
      <ProductsComponent />
    </Box>
  );
};

export default AdminProducts;
