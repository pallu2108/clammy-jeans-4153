import "./Navbar.css";
import truelogo from "../../Images/truelogo.png";
import React from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Box,
  Text,
  Flex,
  Spacer,
  Image,
  MenuButton,
  Menu,
  Input,
  Center,
} from "@chakra-ui/react";
import { MenuList, MenuItem, Heading } from "@chakra-ui/react";
import { BsFillCartFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";

const Drop = () => {
  return (
    <>
      <MenuList pl="10px">
        <Flex fontSize={"sm"} w="100%" gap="5px">
          <Box>
            <Heading
              as={"h4"}
              size={"sm"}
              _hover={{ textDecoration: "underline" }}
            >
              MEN
            </Heading>

            <MenuItem><Link to={"/men/watches"}>Watches</Link></MenuItem>

            <Heading
              as={"h4"}
              mt="40px"
              size={"sm"}
              _hover={{ textDecoration: "underline" }}
            >
              WOMEN
            </Heading>
            <MenuItem w="190px"><Link to={"/women/makeup"}>Makeup Accessories</Link></MenuItem>
            <MenuItem>Clothing</MenuItem>
            <MenuItem>handbags & Clutches</MenuItem>
            <MenuItem>Watches</MenuItem>
            <MenuItem>Ballet Flats</MenuItem>
            <MenuItem>Sandals</MenuItem>
          </Box>
          <Box w="170px">
            <Heading
              as={"h4"}
              size={"sm"}
              _hover={{ textDecoration: "underline" }}
            >
              ELECTRONICS
            </Heading>
            <MenuItem>Gaming Accessories</MenuItem>
            <MenuItem>Keyboards & Mouse</MenuItem>
            <MenuItem>Small Appliances</MenuItem>
          </Box>

          <Box w="170px">
            <Heading
              as={"h4"}
              size={"sm"}
              _hover={{ textDecoration: "underline" }}
            >
              ESSENTIALS
            </Heading>
            <MenuItem>Home Essential</MenuItem>
            <MenuItem>Men's Essentials</MenuItem>
            <MenuItem>School Backpacks</MenuItem>
            <MenuItem>Sport Essential</MenuItem>
            <MenuItem>Women Essentials</MenuItem>
          </Box>

          <Box w="170px">
            <Heading
              as={"h4"}
              size={"sm"}
              _hover={{ textDecoration: "underline" }}
            >
              FLASH SALE
            </Heading>
            <MenuItem>Flash Sale</MenuItem>
          </Box>

          <Box w="170px">
            <Heading
              as={"h4"}
              size={"sm"}
              _hover={{ textDecoration: "underline" }}
            >
              HOME & LIVING
            </Heading>
            <MenuItem>Bath & Storage</MenuItem>
            <MenuItem>Gardening</MenuItem>
            <MenuItem>Home Decor</MenuItem>
            <MenuItem>Home Improvement</MenuItem>
            <MenuItem>Kitchen Wares</MenuItem>
            <MenuItem>Nordic Ceilingh Lights</MenuItem>
          </Box>

          <Box w="170px">
            <Heading
              as={"h4"}
              size={"sm"}
              _hover={{ textDecoration: "underline" }}
            >
              KIDS & MOMS
            </Heading>
            <MenuItem>Action Figures</MenuItem>
            <MenuItem>Discovery Adventures</MenuItem>
            <MenuItem>Disney</MenuItem>
            <MenuItem>Hello Kitty</MenuItem>
            <MenuItem>Marvel</MenuItem>
            <MenuItem>Toys</MenuItem>
          </Box>
          <Box w="170px">
            <Heading
              as={"h4"}
              size={"sm"}
              _hover={{ textDecoration: "underline" }}
            >
              MEANBUY DEALS
            </Heading>
            <MenuItem>Gifts</MenuItem>
            <MenuItem>Electronics</MenuItem>

            <MenuItem>Men's Watches</MenuItem>
            <MenuItem>Smart Watches</MenuItem>
            <MenuItem>Top Selling Ear Buds</MenuItem>
          </Box>

          <Box w="170px">
            <Heading
              as={"h4"}
              size={"sm"}
              _hover={{ textDecoration: "underline" }}
            >
              MOBILE & TABS
            </Heading>
            <MenuItem>Blutooth Earphone</MenuItem>
            <MenuItem>Mobile Accessories</MenuItem>
            <MenuItem>Sporting Bluetooth</MenuItem>
            <MenuItem>Wired Headphones</MenuItem>
            <MenuItem>Wireless Chargers</MenuItem>
            <MenuItem>Wireless Speakers</MenuItem>
          </Box>
        </Flex>
      </MenuList>
    </>
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  // const handlechange = () => {
  //   alert('hello ajay');
  // };
  return (
    <Box>
      <Box mb={"15px"}>
        <Flex>
          <Flex>
            <Link to="/">
              <Image width={"150px"} src={truelogo} alt="" />
            </Link>
            <Flex ml={"30px"}>
              <Center>
                <Box>
                  <Input width={"300px"} type="text" placeholder="Search.." />
                </Box>
                <Center pl={"10px"}>
                  <BsSearch fontSize={"20px"} />
                </Center>
              </Center>
            </Flex>
          </Flex>
          <Spacer />
          <Flex>
            <Center pr={"30px"}>
              <Text fontSize={"12px"}>
                Seller's Corner | Feedback | Blog | Delivery Info
              </Text>
            </Center>
            <Box pr={"20px"}>
              <Flex>
                <Link to="/login">Login</Link>
                <Box p={"0px 2px"}>/</Box>
                <Link to="/signup">SignUp</Link>
              </Flex>
              <Box>Welcome Guest</Box>
            </Box>
            <Flex mt={"10px"} onClick={onOpen}>
              <BsFillCartFill color="orange" fontSize={"24px"} />
              {/* <Text mt={"-5px"}>0</Text> */}
            </Flex>
          </Flex>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              {/* <DrawerHeader> */}
              <br></br>
              <Flex mt="20px" mb="10px" pl="25px" pr="25px">
                <Box>
                  <Text>VIEW CART</Text>
                </Box>
                <Spacer />
                <Box>
                  <Text>CART TOTAL</Text>
                </Box>
              </Flex>
              {/* </DrawerHeader> */}
              <Box>
                <Button w="50%" bg="black" color={"white"}>
                  <Link to="/editcart">
                    <Text fontSize="md">EDIT CART</Text>
                  </Link>
                </Button>
                <Button w="50%" bg={"white"}>
                  <Link to="/checkout">
                    <Text fontSize="md">CHECKOUT CART</Text>
                  </Link>
                </Button>
              </Box>

              <DrawerBody>
                <Box>
                  <Flex mt="50px">
                    <Box>
                      <Box>
                        <Image
                          w="80px"
                          h="70px"
                          src="https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMyMTMxXC9QaW5rX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTAwMCwiaGVpZ2h0IjoxMDAwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0="
                          alt="product"
                        />
                      </Box>
                      <Box>
                        <Text
                          w="120px"
                          color={"orange.300"}
                          fontWeight={"bold"}
                        >
                          Delivery: December 8, 2022
                        </Text>
                      </Box>
                    </Box>
                    <Box>
                      <Text fontWeight={"bold"} fontSize="xs">
                        Car LED Makeup Mirror
                      </Text>
                      <Text mt="30px" color={"gray"} fontSize="sm">
                        COLOR: White
                      </Text>
                      <Text color={"gray"} as="del" fontSize="sm">
                        Price: 9,999
                      </Text>
                      <Text color={"gray"} fontSize="sm">
                        Your Price: 2,199.00
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </DrawerBody>

              <DrawerFooter></DrawerFooter>
            </DrawerContent>
          </Drawer>
          {/* <button onClick={handlechange}>
          <img
            style={{
              marginTop: '20px',
              width: '45px',
              marginLeft: '20px',
              height: '45px',
            }}
            src="https://cdn-icons-png.flaticon.com/128/1972/1972372.png"
            alt=""
          />
        </button> */}
        </Flex>
      </Box>
      <Flex mb={"20px"}>
        <Box>
          <Menu>
            <MenuButton bg={"none"} m={0}>
              Categories
              <ChevronDownIcon />
            </MenuButton>
            <Drop />
          </Menu>
          {/* Categories */}
        </Box>
        <Box>
          <Link className="adub" to="/flash">
            Flash Sale
          </Link>
        </Box>
        <Link className="adub" to="/bestdeals">
          Best Deals
        </Link>
        <Link className="adub" to="/shopbybrands">
          Shop by Brand
        </Link>
        <Link className="adub" to="/trending">
          Trending
        </Link>
        <Link className="adub" to="/newArrivals">
          New Arrivals
        </Link>
      </Flex>
    </Box>
  );
}
