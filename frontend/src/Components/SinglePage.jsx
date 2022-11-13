import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getProducts } from "../Admin/features/products/productSlice";
import { useAppDispatch, useAppSelector } from "../Admin/features/hooks";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import Navbar from "./Navbar/Navbar";
import axios from "axios";
import Footer from "./Footer/Footer";

const SinglePage = () => {
  let { id } = useParams();
  console.log(id);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const products = useAppSelector((store) => store.productSlice);
  console.log(products);
  let product = products.products.find((product) => product._id == id);
  console.log(product);
  let token = localStorage.getItem("token");
  console.log(token);
  let quantity = 5;

  const cart = () => {
    axios({
      method: "POST",
      url: "http://localhost:8080/carts/",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: { productId: id, quantity: quantity },
    });
  };

  const handleAdd = () => {
    alert("Item added to cart")
  };

  return (
    <Box w="100%" mt="30px">
      <Navbar />
      <Flex gap="30px" pl="5%" pr="5%">
        <Box h="500px" w="100%">
          <Image src={product?.images[0]}></Image>
        </Box>
        <Box w="100%">
          <Box>
            <Box textAlign={"left"} pl="20px" mb={"10px"}>
              <Box className="overflowTest" mb={"10px"}>
                <Text
                  fontSize={"2xl"}
                  color={"gray"}
                  fontWeight={"bold"}
                  mb={"10px"}
                >
                  {product?.title}
                </Text>
                <Flex mb={"10px"}>
                  <Text
                    mt="3px"
                    fontSize={"xl"}
                    color={"orange"}
                    fontWeight={"bold"}
                  >
                    ₹ {product?.price}
                  </Text>
                  <Text
                    pl="10px"
                    pt="6px"
                    fontSize={"lg"}
                    color={"gray"}
                    as={"del"}
                  >
                    ₹ {product?.mrp}
                  </Text>
                  <Text pl="10px" pt="10px" fontSize={"sm"} color={"green.400"}>
                    UP TO{" "}
                    {Math.ceil(
                      ((product.mrp - product.price) * 100) / product.mrp
                    )}
                    % OFF
                  </Text>
                </Flex>
                <Flex mb={"10px"}>
                  <Text mt="3px" fontSize={"xs"} color={"gray"}>
                    Save up to
                  </Text>

                  <Text pl="10px" pt="3px" fontSize={"xs"} color={"orange"}>
                    ₹ {product.mrp - product.price}
                  </Text>
                </Flex>
                <Box mb={"10px"}>
                  <Text
                    fontSize={"md"}
                    fontWeight="bold"
                    color={"orange"}
                    textDecoration="underline"
                    mb={"10px"}
                  >
                    CASH ON DELIVERY AVILABLE ON ORDERS BETWEEN ₹ 999 AND ₹
                    10,000
                  </Text>
                  <Text fontSize={"md"} color={"gray"} mb={"10px"}>
                    Get up to ₹500 OFF with coupon code PREPAID
                  </Text>
                  <Text fontSize={"md"} color={"gray"} mb={"10px"}>
                    3 interest free payment
                  </Text>
                  <Flex mb={"10px"}>
                    <Text fontSize={"lg"} color={"gray"}>
                      Availability :
                    </Text>
                    <Text fontSize={"lg"} color="green.400">
                      {" "}
                      In Stock
                    </Text>
                  </Flex>

                  <Text
                    fontSize={"2xl"}
                    color={"gray"}
                    fontWeight={"bold"}
                    mb={"10px"}
                  >
                    {product?.title}
                  </Text>
                  <Text
                    fontSize={"md"}
                    color={"gray"}
                    fontWeight={"bold"}
                    mb={"10px"}
                  >
                    Products Category :{product?.rating}
                  </Text>
                  <Text
                    fontSize={"md"}
                    color={"gray"}
                    fontWeight={"bold"}
                    mb={"10px"}
                  >
                    Brand: {product?.brand}
                  </Text>
                  <Text
                    fontSize={"md"}
                    color={"gray"}
                    fontWeight={"bold"}
                    mb={"10px"}
                  >
                    Movement: {product?.quantity}
                  </Text>
                  <Text
                    fontSize={"md"}
                    color={"gray"}
                    fontWeight={"bold"}
                    mb={"10px"}
                  >
                    Brand Material Type: {product?.title}
                  </Text>
                  <Text
                    fontSize={"md"}
                    color={"gray"}
                    fontWeight={"bold"}
                    mb={"10px"}
                  >
                    StoneAccent: {product?.rating}
                  </Text>
                  <Text
                    fontSize={"md"}
                    color={"gray"}
                    fontWeight={"bold"}
                    mb={"10px"}
                  >
                    Quantity: {product?.rating}
                  </Text>
                  <Box w="100px">
                    <Text
                      fontSize={"lg"}
                      color={"gray"}
                      fontWeight={"bold"}
                      mb={"10px"}
                    >
                      Rating: {product.rating}
                    </Text>
                  </Box>
                  <Box>
                    <Flex gap="20px">
                      <Button
                        onClick={handleAdd}
                        color={"white"}
                        colorScheme="orange"
                      >
                        ADD TO CART
                      </Button>
                      <Link to="/checkout">
                        <Button
                          onClick={handleAdd}
                          color={"white"}
                          colorScheme="orange"
                        >
                          BUY NOW
                        </Button>
                      </Link>
                    </Flex>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
};

export default SinglePage;
