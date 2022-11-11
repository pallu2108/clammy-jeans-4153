import React, { ChangeEvent, useEffect, useState } from "react";
import { getProducts } from "../features/products/productSlice";
import { useAppDispatch, useAppSelector } from "../features/hooks";
import { Box, Heading } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

const ProductsComponent = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((store) => store.productSlice);
  console.log(products);
  //   const auth = useAppSelector((store) => store.authSlice);
  //   const [client, setClient] = useState<string>("");
  //   const [userId, email, password] = auth.token.split(":");
  //   const [clientId, setClientId] = useState<string>("");
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <Box>
      <Heading>Products</Heading>
      <Box>
        {products.products.map((product) => (
            <Box>
                <ProjectCard title={product.title} image={product.images[0]} brand={product.brand} />
            </Box>
        )
          
        )}
      </Box>
    </Box>
  );
};

export default ProductsComponent;
