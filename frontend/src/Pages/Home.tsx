import React, { useEffect } from "react";
import { getProducts } from "../Admin/features/products/productSlice";
import { useAppDispatch, useAppSelector } from "../Admin/features/hooks";
// import "./Homemid.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
// import HomePagemid from "../../Pages/HomePagemid";
import Navbar from "../Components/Navbar/Navbar";
import { Box, Center, Divider, Flex, Heading, SimpleGrid, Wrap } from "@chakra-ui/react";
import Slider from "../Components/slider/Slider";
import Slider2 from "../Components/slider2/Slider2";
import HomePagemid from "../Components/HomePage/HomePagemid";
import Footer from "../Components/Footer/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((store) => store.productSlice);
  const essentials = products.products.filter(
    (product) => product.subcategory == "Home Essentials"
  );
  const gaming = products.products.filter(
    (product) => product.subcategory == "Gaming Accessories"
  );
  const men = products.products.filter((product) => product.category == "Men");
  men.length = 4;
  const makeup = products.products.filter(
    (product) => product.subcategory == "Makeup Accessories"
  );
  makeup.length = 4;
  const clothing = products.products.filter(
    (product) => product.subcategory == "Clothing"
  );
  clothing.length = 4;
  const handbags = products.products.filter(
    (product) => product.subcategory == "Handbags & Clutches"
  );
  handbags.length = 4;
  const watches = products.products.filter(
    (product) => product.category == "WOMEN" && product.subcategory == "Watches"
  );
  const mouses = products.products.filter(
    (product) => product.subcategory == "Keyboards & Mouse"
  );
  const messentials = products.products.filter(
    (product) => product.subcategory == "Men's Essentials"
  );
  const backpacks = products.products.filter(
    (product) => product.subcategory == "School Backpacks"
  );
  const flash = products.products.filter(
    (product) => product.category == "Flash Sale"
  );

  console.log(products);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <Box>
      <Navbar />
      <Slider />
      <Flex justifyContent={"space-evenly"} mb="30px">
        <Box width={"25%"}>
          <Heading textAlign={"left"} size={{ base: "sm", md: "md", lg: "lg" }}>
            Men's Watches
          </Heading>
        </Box>
        <Center>
          <Box width={{base:"300px", md:"700px", lg:"900px"}} height="1px" border={"1px solid"}></Box>
        </Center>
      </Flex>
      <Box>
      <Wrap spacing='40px'>
          {men.map((elem) => {
            return <HomePagemid key={elem._id} {...elem} />;
          })}
        </Wrap>
      </Box>
      <Flex justifyContent={"space-evenly"} m="30px 0px">
        <Box width={"25%"}>
          <Heading textAlign={"left"} size={{ base: "sm", md: "md", lg: "lg" }}>
            Electronics
          </Heading>
        </Box>
        <Box>
          <hr
            style={{
              border: "1px solid black",
              width: "950px",
              marginLeft: "10px",
              marginTop: "15px",
            }}
          />
        </Box>
      </Flex>
      <Box>
        <Wrap spacing="25px" justify="space-evenly">
          {gaming.map((elem) => {
            return <HomePagemid key={elem._id} {...elem} />;
          })}
        </Wrap>
      </Box>
      <Flex justifyContent={"space-evenly"} m="30px 0px">
        <Box width={"25%"}>
          <Heading textAlign={"left"} size={{ base: "sm", md: "md", lg: "lg" }}>
            Home Essentials
          </Heading>
        </Box>
        <Box>
          <hr
            style={{
              border: "1px solid black",
              width: "950px",
              marginLeft: "10px",
              marginTop: "15px",
            }}
          />
        </Box>
      </Flex>
      <Box>
        <Wrap spacing="25px" justify="space-evenly">
          {essentials.map((elem) => {
            return <HomePagemid key={elem._id} {...elem} />;
          })}
        </Wrap>
      </Box>
      <Flex justifyContent={"space-evenly"} m="30px 0px">
        <Box width={"25%"}>
          <Heading textAlign={"left"} size={{ base: "sm", md: "md", lg: "lg" }}>
            Makeup Essentials
          </Heading>
        </Box>
        <Box>
          <hr
            style={{
              border: "1px solid black",
              width: "950px",
              marginLeft: "10px",
              marginTop: "15px",
            }}
          />
        </Box>
      </Flex>
      <Box>
        <Wrap spacing="25px" justify="space-evenly">
          {makeup.map((elem) => {
            return <HomePagemid key={elem._id} {...elem} />;
          })}
        </Wrap>
      </Box>
      <Flex justifyContent={"space-evenly"} m="30px 0px">
        <Box>
          <Heading textAlign={"left"} size={{ base: "sm", md: "md", lg: "lg" }}>
            Women's Clothing
          </Heading>
        </Box>
        <Box>
          <hr
            style={{
              border: "1px solid black",
              width: "850px",
              marginLeft: "10px",
              marginTop: "15px",
            }}
          />
        </Box>
      </Flex>
      <Box>
        <Wrap spacing="25px" justify="space-evenly">
          {clothing.map((elem) => {
            return <HomePagemid key={elem._id} {...elem} />;
          })}
        </Wrap>
      </Box>
      <Flex justifyContent={"space-evenly"} m="30px 0px">
        <Box>
          <Heading textAlign={"left"} size={{ base: "sm", md: "md", lg: "lg" }}>
            Women's Handbags
          </Heading>
        </Box>
        <Box>
          <hr
            style={{
              border: "1px solid black",
              width: "850px",
              marginLeft: "10px",
              marginTop: "15px",
            }}
          />
        </Box>
      </Flex>
      <Box>
        <Wrap spacing="25px" justify="space-evenly">
          {handbags.map((elem) => {
            return <HomePagemid key={elem._id} {...elem} />;
          })}
        </Wrap>
      </Box>
      <Flex justifyContent={"space-evenly"} m="30px 0px">
        <Box>
          <Heading textAlign={"left"} size={{ base: "sm", md: "md", lg: "lg" }}>
            Women's Watches
          </Heading>
        </Box>
        <Box>
          <hr
            style={{
              border: "1px solid black",
              width: "850px",
              marginLeft: "10px",
              marginTop: "15px",
            }}
          />
        </Box>
      </Flex>
      <Box>
        <Wrap spacing="25px" justify="space-evenly">
          {watches.map((elem) => {
            return <HomePagemid key={elem._id} {...elem} />;
          })}
        </Wrap>
      </Box>
      <Flex justifyContent={"space-evenly"} m="30px 0px">
        <Box>
          <Heading textAlign={"left"} size={{ base: "sm", md: "md", lg: "lg" }}>
            Keyboards and mouse
          </Heading>
        </Box>
        <Box>
          <hr
            style={{
              border: "1px solid black",
              width: "850px",
              marginLeft: "10px",
              marginTop: "15px",
            }}
          />
        </Box>
      </Flex>
      <Box>
        <Wrap spacing="25px" justify="space-evenly">
          {mouses.map((elem) => {
            return <HomePagemid key={elem._id} {...elem} />;
          })}
        </Wrap>
      </Box>
      <Flex justifyContent={"space-evenly"} m="30px 0px">
        <Box>
          <Heading textAlign={"left"} size={{ base: "sm", md: "md", lg: "lg" }}>
            Men's Essentials
          </Heading>
        </Box>
        <Box>
          <hr
            style={{
              border: "1px solid black",
              width: "850px",
              marginLeft: "10px",
              marginTop: "15px",
            }}
          />
        </Box>
      </Flex>
      <Box>
        <Wrap spacing="25px" justify="space-evenly">
          {messentials.map((elem) => {
            return <HomePagemid key={elem._id} {...elem} />;
          })}
        </Wrap>
      </Box>
      <Flex justifyContent={"space-evenly"} m="30px 0px">
        <Box>
          <Heading textAlign={"left"} size={{ base: "sm", md: "md", lg: "lg" }}>
            School Backpacks
          </Heading>
        </Box>
        <Box>
          <hr
            style={{
              border: "1px solid black",
              width: "850px",
              marginLeft: "10px",
              marginTop: "15px",
            }}
          />
        </Box>
      </Flex>
      <Box>
        <Wrap spacing="25px" justify="space-evenly">
          {backpacks.map((elem) => {
            return <HomePagemid key={elem._id} {...elem} />;
          })}
        </Wrap>
      </Box>
      <Flex justifyContent={"space-evenly"} m="30px 0px">
        <Box>
          <Heading textAlign={"left"} size={{ base: "sm", md: "md", lg: "lg" }}>
            Flash Sales
          </Heading>
        </Box>
        <Box>
          <hr
            style={{
              border: "1px solid black",
              width: "850px",
              marginLeft: "10px",
              marginTop: "15px",
            }}
          />
        </Box>
      </Flex>
      <Box>
        <Wrap spacing="25px" justify="space-evenly">
          {flash.map((elem) => {
            return <HomePagemid key={elem._id} {...elem} />;
          })}
        </Wrap>
      </Box>
      <Footer />
    </Box>
  );
}
