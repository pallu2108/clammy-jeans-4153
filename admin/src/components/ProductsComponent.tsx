import React, { ChangeEvent, useEffect, useState } from "react";
import { getProducts } from "../features/products/productSlice";
import { useAppDispatch, useAppSelector } from "../features/hooks";
import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import loader from "../assets/loader.gif"

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
            <Box key={product._id}>
                <ProjectCard title={product.title} image={product.images[0]} brand={product.brand} />
            </Box>
        )
          
        )}
      </Box>
      {products.loading?
      <Flex w="100vw" h={"100vh"} mx={"auto"} align={"center"} justify={"center"} bg={"rgba(245,250,254,.5)"} backgroundBlendMode={"hard-light"} position={"absolute"} top={"0"} left={"0"}>
          <Image borderRadius={"50%"} src={loader} />
      </Flex>:null}
    </Box>
  );
};

export default ProductsComponent;
