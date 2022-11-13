import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FlashFilter from "../Components/FlashFilter";
import { getFlashRecord } from "../Redux/FlashReducer/action";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Flex, Text, Spacer, Wrap } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { getProducts } from "../Admin/features/products/productSlice";
import { useAppDispatch, useAppSelector } from "../Admin/features/hooks";
import HomePagemid from "../Components/HomePage/HomePagemid";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Trending = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((store) => store.productSlice);
  const flash = products.products.filter(
    (product) =>
      product.category == "MEN" ||
      product.category == "Essentials" ||
      product.category == "Flash Sale"
  );
  console.log(flash);
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <Box>
      <Navbar />
      <Box style={{ display: "flex" }}>
        <Box>
          <FlashFilter />
        </Box>
        <Box border="1px solid lightgray" h="auto" w="1290px" pl="11px">
          <Box textAlign={"left"}>
            <Box mt="10px">
              <span> Home </span>
              <ChevronRightIcon />
              <span> Flash sale </span>
              <ChevronRightIcon />
              <span> Flash span </span>
            </Box>
          </Box>
          <Box h="auto" pl="15px">
            {/* <Box textAlign={"left"}>
        <Box mt="10px"><span> Home </span><ChevronRightIcon/><span> Flash sale </span><ChevronRightIcon/><span> Flash span </span></Box>
        </Box> */}
            <Wrap spacing="100px">
              {flash.length > 0 &&
                flash.map((ele) => {
                  return <HomePagemid key={ele._id} {...ele} />;
                })}
            </Wrap>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Trending;
