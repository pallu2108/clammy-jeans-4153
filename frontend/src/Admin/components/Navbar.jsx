import { Box, Divider, Flex, Image, Spacer } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import truelogo from "../../Images/truelogo.png";

const Navbar = () => {
  return (
    <Box w={"1000px"}>
      <Flex mb={"10px"}>
        <Box>
          <Link to={"/admin"}>
            <Image width={"100px"} src={truelogo} />
          </Link>
        </Box>
        <Spacer />
        <Box>
          <Flex gap={"20px"}>
            <Box>
              <Link to={"/admin"}>Home</Link>
            </Box>
            <Box>
              <Link to={"/admin/products"}>Products</Link>
            </Box>
            <Box>
              <Link to={"/admin/users"}>Users</Link>
            </Box>
            <Box>
              <Link to={"/"}>Logout</Link>
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Divider />
    </Box>
  );
};

export default Navbar;
