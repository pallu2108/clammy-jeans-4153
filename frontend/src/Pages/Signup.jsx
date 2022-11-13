import React, { useState } from "react";
import truebuy from "../Images/truelogo.png";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Flex,
  Input,
  Text,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Signup = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const HandleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  let postData = async () => {
    await axios
      .post("http://localhost:8080/user/signup", { email, password })
      .then((res) => console.log(res.data));
  };

  const alert = () => (
    <Alert status="success">
        <AlertIcon />
        Data uploaded to the server. Fire on!
      </Alert>
  )

  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
    navigate("/login");
  };
  return (
    <Box w="100%" h="auto" mb="30px">
      <Navbar />
      <Flex h="auto" pb="50px" gap="10px" pl="80px" pr="80px">
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
                  onChange={()=>setEmail(e.target.value)}
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
                  onChange={()=>setPassword(e.target.value)}
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
                  placeholder="Confirm Password"
                  // onChange={()=>setPassword(e.target.value)}
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
                  Sign Up
                </Button>
              </Box>
          <Text mt="10px" fontSize={"sm"} textDecor="underline">
            Already have a True Buy account? Log In!
          </Text>
          <Box>
            <Flex pl="250px">
              <Text mt="20px" fontSize={"sm"}>
                {" "}
                By signing up, you agree to our Terms of Use & Privacy Policy -
              </Text>
              <Text mt="20px" fontSize={"sm"} color="blue">
                {" "}
                Terms of Use & Privacy Policy
              </Text>
            </Flex>
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
                <Text fontSize={"sm"} fontWeight={"bold"} color={"gray"}>
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
              <img w="50px" h="50px" src={truebuy} alt="" />
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

export default Signup;
