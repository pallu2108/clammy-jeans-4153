import './Navbar.css';
import img_1 from '../../Images/img_1.png';
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon } from '@chakra-ui/icons';
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
} from '@chakra-ui/react';
import { MenuList, MenuItem, Heading } from '@chakra-ui/react';

const Drop = () => {
  return (
    <>
      <MenuList pl="10px">
        <Flex fontSize={'sm'} w="100%" gap="5px">
          <Box>
            <Heading as={'h4'} size={'sm'} _hover={{textDecoration:"underline"}}>
              MEN
            </Heading>

            <MenuItem>Watches</MenuItem>

            <Heading as={'h4'} mt="40px" size={'sm'} _hover={{textDecoration:"underline"}}>
              WOMEN
            </Heading>
            <MenuItem w="190px">Makeup Accessories</MenuItem>
            <MenuItem>Clothing</MenuItem>
            <MenuItem>handbags & Clutches</MenuItem>
            <MenuItem>Watches</MenuItem>
            <MenuItem>Ballet Flats</MenuItem>
            <MenuItem>Sandals</MenuItem>
            
          </Box>
          <Box w="170px">
            <Heading as={'h4'} size={'sm'} _hover={{textDecoration:"underline"}}>
              ELECTRONICS
            </Heading>
            <MenuItem >Gaming Accessories</MenuItem>
            <MenuItem>Keyboards & Mouse</MenuItem>
            <MenuItem>Small Appliances</MenuItem>
            </Box>

            <Box w="170px">
            <Heading as={'h4'} size={'sm'} _hover={{textDecoration:"underline"}}>
              ESSENTIALS
            </Heading>
            <MenuItem >Home Essential</MenuItem>
            <MenuItem>Men's Essentials</MenuItem>
            <MenuItem>School Backpacks</MenuItem>
            <MenuItem >Sport Essential</MenuItem>
            <MenuItem>Women Essentials</MenuItem>
             </Box>

            <Box w="170px">
            <Heading as={'h4'} size={'sm'} _hover={{textDecoration:"underline"}}>
              FLASH SALE
            </Heading>
            <MenuItem>Flash Sale</MenuItem>
          </Box>  

          <Box w="170px">
            <Heading as={'h4'} size={'sm'} _hover={{textDecoration:"underline"}}>
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
            <Heading as={'h4'} size={'sm'}  _hover={{textDecoration:"underline"}}>
              KIDS & MOMS
            </Heading>
            <MenuItem>Action Figures</MenuItem>
            <MenuItem>Discovery Adventures</MenuItem>
            <MenuItem>Disney</MenuItem>
            <MenuItem>Hello Kitty</MenuItem>
            <MenuItem>Marvel</MenuItem>
            <MenuItem>Toys</MenuItem>
          </Box>
          <Box w="170px" >  
            <Heading as={'h4'} size={'sm'} _hover={{textDecoration:"underline"}}>
              MEANBUY DEALS
            </Heading>
            <MenuItem>Gifts</MenuItem>
            <MenuItem>Electronics</MenuItem>

            <MenuItem>Men's Watches</MenuItem>
            <MenuItem>Smart Watches</MenuItem>
            <MenuItem>Top Selling Ear Buds</MenuItem>
          </Box>

          <Box w="170px">
            <Heading as={'h4'} size={'sm'} _hover={{textDecoration:"underline"}}>
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
    <div className="div">
      <div className="maindiv">
        <div className="firstnavdiv">
          <a href="/">
            <img className="img_1" src={img_1} alt="" />
          </a>
          <input type="text" placeholder="Search.." />
          <button>
            <img
              className="img_2sdf"
              src="https://cdn-icons-png.flaticon.com/128/2811/2811790.png"
              alt=""
            />
          </button>
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: '20px',
            marginLeft: '300px',
          }}
        >
          <p className="ptagdub">
            Seller's Corner | Feedback | Blog | Delivery Info
          </p>
          <div style={{ marginLeft: '30px' }}>
            <div style={{ display: 'flex' }}>
              <a href="">Login</a>&ensp;/&ensp;<a href="">SignUp</a>
            </div>
            <div style={{ fontWeight: 'bolder' }}>Welcome Guest</div>
          </div>
        </div>
        <Button
          style={{ marginTop: '30px', background: 'white' }}
          ref={btnRef}
          bg="transparent"
          onClick={onOpen}
        >
          <img
            style={{
              width: '45px',
              marginLeft: '20px',
              height: '45px',
            }}
            src="https://cdn-icons-png.flaticon.com/128/1972/1972372.png"
            alt=""
          />
        </Button>
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
              <Button w="50%" bg="black" color={'white'}>
                <Link to="/editcart" >
                <Text fontSize="md">EDIT CART</Text>
                </Link>
              </Button>
              <Button w="50%" bg={'white'}>
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
                        src="https://bit.ly/dan-abramov"
                        alt="product"
                      />
                    </Box>
                    <Box>
                      <Text
                        w="120px"
                        color={'orange.300'}
                        fontWeight={'bold'}
                      >
                        Delivery: December 8, 2022
                      </Text>
                    </Box>
                  </Box>
                  <Box>
                    <Text fontWeight={'bold'} fontSize="xs">
                      1 * Mens Casual Business watch
                    </Text>
                    <Text mt="30px" color={'gray'} fontSize="sm">
                      COLOR: BEIGE
                    </Text>
                    <Text color={'gray'} as="del" fontSize="sm">
                      Price: 9,999
                    </Text>
                    <Text color={'gray'} fontSize="sm">
                      Your Price: 2,299.00
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
      </div>
      <Flex
        style={{
          textAlign: 'left',
          borderBottom: '3px solid #e1e1e1',
        }}
      >
        <Box className="adub" href="">
          <Menu>
            <MenuButton bg={'none'} m={0}>
              Categories
              <ChevronDownIcon />
            </MenuButton>
            <Drop />
          </Menu>
          {/* Categories */}
        </Box>
        <Box>
          <a className="adub" href="/flash">
            Flash Sale
          </a>
        </Box>
        <a className="adub" href="/bestdeals">
          Best Deals
        </a>
        <a className="adub" href="/shopbybrands">
          Shop by Brand
        </a>
        <a className="adub" href="/trend">
          Trending
        </a>
        <a className="adub" href="/new">
          New Arrivals
        </a>
      </Flex>
    </div>
  );
}
