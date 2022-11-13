import React, { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useAppDispatch, useAppSelector } from "../Admin/features/hooks";
// import { userLogin } from "../Admin/features/auth/userAuthSlice";
import loader from "../Admin/assets/loader.gif";
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Box,
  Button,
  Checkbox,
  Flex,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import truelogo from "../Images/truelogo.png";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const HandleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  let postData = async () => {
    await axios
      .post("https://truebuy.onrender.com/user/login", { ...data })
      .then(
        (res) => localStorage.setItem("token", JSON.stringify(res.data.token)),
        navigate("/")
      )
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    postData();
  };

  return (
    <Box w="100%" h="auto" mb="30px">
      <Navbar />
      <Flex h="460px" gap="10px" pl="80px" pr="80px" mb={"60px"}>
        {/* Box 1  */}
        <Box w="75%">
          <Text
            fontSize={"lg"}
            fontWeight="bold"
            color="orange"
            textAlign={"left"}
            mt="30px"
          >
            Login or Create Account
          </Text>
          <Box mt="20px" mb="10px">
            <hr />
          </Box>
          <Box>
            <Box>
              <Box maxW={"2xl"}>
                <Text pl="20px" fontSize={"sm"} mt="70px" textAlign="left">
                  Enter Address
                </Text>
                <Input
                  mt="4px"
                  maxW="xl"
                  ml="20px"
                  mr="100px"
                  placeholder="Email Address"
                  onChange={HandleChange}
                />
              </Box>

              <Box mt="20px" maxW={"2xl"}>
                <Text pl="20px" fontSize={"sm"} textAlign="left">
                  Password
                </Text>
                <Input
                  mt="4px"
                  maxW="xl"
                  ml="20px"
                  mr="100px"
                  placeholder="Enter Password"
                  onChange={HandleChange}
                />
              </Box>
              <Box maxW={"2xl"} ml="-26px">
                <Button
                  mt="30px"
                  color={"white"}
                  // w="100%"
                  w={"xl"}
                  colorScheme="orange"
                  onClick={handleSubmit}
                >
                  Login
                </Button>
              </Box>
            </Box>
            <Text mt="20px" fontSize={"sm"}>
              Forget Password
            </Text>
            <Link to={"/signup"}>
              <Text mt="10px" fontSize={"sm"} textDecor="underline">
                New to Truebuy? Sign Up!
              </Text>
            </Link>
          </Box>
        </Box>
        {/* Box 2  */}
        <Box w="30%">
          {/* Box 2 */}
          <Box
            w="280px"
            mt="15px"
            h="300px"
            border={"1px solid rgb(205,205,205)"}
          >
            <Box bg="#f2f2f2" h="80px">
              <Box pt="20px">
                <Text fontsize={"sm"} fontWeight={"bold"} color={"gray"}>
                  Cart Details
                </Text>
              </Box>
            </Box>
            <Box>
              <Box pt="4px">
                <Flex>
                  <Box>
                    <Text
                      color={"gray"}
                      textAlign={"left"}
                      pl="10px"
                      fontWeight="bold"
                      fontSize="md"
                    >
                      Total Items: 2
                    </Text>
                    <Flex>
                      <Box>
                        <Text
                          color={"gray"}
                          textAlign={"left"}
                          pl="10px"
                          fontWeight="bold"
                          fontSize="md"
                        >
                          Sub Total :{" "}
                        </Text>
                      </Box>

                      <Box>
                        <Text
                          color={"blue"}
                          textAlign={"left"}
                          pl="10px"
                          fontWeight="bold"
                          fontSize="md"
                        >
                          Rs 6,598.00{" "}
                        </Text>{" "}
                      </Box>
                    </Flex>

                    <Text
                      color={"green"}
                      textAlign={"left"}
                      pl="10px"
                      fontWeight="bold"
                      fontSize="md"
                    >
                      Shipping : Free
                    </Text>
                  </Box>
                </Flex>
                <Box mt="10px" pl="4px" pr="4px" mb="10px">
                  <hr />
                </Box>
                <br />
                <Flex>
                  <Text
                    color={"gray"}
                    textAlign={"left"}
                    pl="10px"
                    fontWeight="bold"
                    fontSize="md"
                  >
                    Cart Total
                  </Text>
                  <Text
                    color={"black"}
                    textAlign={"left"}
                    pl="10px"
                    fontWeight="bold"
                    fontSize="md"
                  >
                    Rs 2199.34{" "}
                  </Text>
                </Flex>
              </Box>
              <Button mt="20px" bg="orange" color="white">
                <Link to="/editcart">EDIT CART</Link>
              </Button>
            </Box>
          </Box>

          <Box mt="30px" pl="20px">
            <Link to="/">
              <img w="50px" h="50px" src={truelogo} alt="" />
            </Link>
          </Box>

          <Box mt="10px" textAlign={"center"}>
            <Text fontSize="xl" color={"gray.600"} fontWeight={"bold"}>
              Our Shop. Your Price
            </Text>
            <Text fontSize="xs" color={"gray.600"} fontWeight={"bold"}>
              online Shopping Redefined
            </Text>
          </Box>
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
};

export default Login;
