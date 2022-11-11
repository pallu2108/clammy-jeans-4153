import './Navbar.css';
import img_1 from '../../Images/img_1.png';
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon  } from '@chakra-ui/icons'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Box,Text, Flex, Spacer,Image,MenuButton,Menu, 
} from '@chakra-ui/react'
import {
 
  MenuList,
  MenuItem,

  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  
 Heading
} from '@chakra-ui/react'


const Drop = () => {
  return (
    <>
      <MenuList pl="10px">
        <Flex fontSize={"sm"} 
        w="900px"
        gap="10px"
        >
          <Box >
            <Heading as={"h4"} size={"sm"}>
              MEN
            </Heading>
            
              <MenuItem>Watches</MenuItem>
              
              
            <Heading as={"h4"} mt="40px" size={"sm"}>
              WOMEN
            </Heading>
            <MenuItem w="200px">Makeup Accessories</MenuItem>
            <MenuItem>Fashion</MenuItem>
            <MenuItem>Jewellery</MenuItem>
            <MenuItem>Watches</MenuItem>
          </Box>
          <Box>
            <Heading as={"h4"} size={"sm"}>
              ELECTRONICS
            </Heading>
            <MenuItem>Gaming Accessories</MenuItem>
            <MenuItem>Keyboards & Mouse</MenuItem>
            <MenuItem>Laptops</MenuItem>
            <MenuItem>Small Appliances</MenuItem>

            <Heading as={"h4"} size={"sm"}>
              KIDS & MOMS
            </Heading>
            <MenuItem>DIY Toys</MenuItem>
            <MenuItem>Kid's Shoes</MenuItem>
            <MenuItem>Water Bottle</MenuItem>
            <MenuItem>Sports Bluetooth</MenuItem>
            <MenuItem>Gift</MenuItem>
          </Box>
          <Box>
            <Heading as={"h4"} size={"sm"}>
              MOBILE & TABS
            </Heading>
            <MenuItem>Apple Accessories</MenuItem>
            <MenuItem>Blutooth Earphone</MenuItem>
            <MenuItem>Mobile Accessories</MenuItem>
            <MenuItem>Power Banks</MenuItem>
            <MenuItem>Sporting Bluetooth</MenuItem>
            <MenuItem>Wired Headphones</MenuItem>
            <MenuItem>Wireless Chargers</MenuItem>
            <MenuItem>Wireless Speakers</MenuItem>
          </Box>
          <Box>
            <Heading as={"h4"} size={"sm"}>
              HOME & LIVING
            </Heading>
            <MenuItem>Bath & Storage</MenuItem>
            <MenuItem>Fitness Merchandise</MenuItem>
            <MenuItem>Gardening</MenuItem>
            <MenuItem>Home Decor</MenuItem>
            <MenuItem>Home Improvement</MenuItem>
            <MenuItem>Kitchen Wares</MenuItem>
            <MenuItem>Nordic Ceilingh Lights</MenuItem>
            <MenuItem>Pet Products</MenuItem>
            <MenuItem>USB Fans</MenuItem>
            <MenuItem>Wall Decor</MenuItem>
            <MenuItem>Water Bottles</MenuItem>
          </Box>
          <Box>
            <Heading as={"h4"} size={"sm"}>
              FLASH SALE
            </Heading>
            <MenuItem>Flash Sale</MenuItem>

            <Heading as={"h4"} size={"sm"}>
              MEANBUY DEALS
            </Heading>
            <MenuItem>Electronics</MenuItem>
           
              <MenuItem>Men's Watches</MenuItem>
            
            <MenuItem>Ramadan Gifts</MenuItem>
            <MenuItem>Smart Watches</MenuItem>
            <MenuItem>Top Selling Ear Buds</MenuItem>
          </Box>
        </Flex>
      </MenuList>
    </>
  );
};




export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
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
        <Button ref={btnRef} bg="transparent" onClick={onOpen}>
        <img
            style={{
              marginTop: '40px',
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
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          {/* <DrawerHeader> */}
          <br></br>
          <Flex mt="20px" mb="10px" pl="25px" pr="25px">

            <Box><Text>VIEW CART</Text></Box>
             <Spacer/>
            <Box><Text>CART TOTAL</Text></Box>
          </Flex>
          {/* </DrawerHeader> */}
          <Box>
            <Button w="50%" bg="black"  color={"white"}><Text fontSize='md'>EDIT CART</Text></Button>
            <Button w="50%"   bg={"white"}><Link to="/checkout"><Text fontSize='md'>CHECKOUT CART</Text></Link></Button>
            
          </Box>

          <DrawerBody>
           <Box>
            <Flex mt="50px">
                <Box>
                    
                    <Box>
                    <Image w="80px" h="70px" src='https://bit.ly/dan-abramov' alt='product' />
                    </Box>
                    <Box>
                        <Text w="120px" color={"orange.300"}  fontWeight={"bold"}>Delivery: December 8, 2022</Text>
                    </Box>
                </Box>
                <Box>
                    <Text fontWeight={"bold"} fontSize="xs">1 * Mens Casual Business watch</Text>
                    <Text mt="30px" color={"gray"} fontSize="sm">COLOR: BEIGE</Text>
                    <Text color={"gray"} as="del" fontSize="sm">Price: 9,999</Text>
                    <Text color={"gray"} fontSize="sm">Your Price: 2,299.00</Text>
                    
                </Box>
            </Flex>
           </Box>
          </DrawerBody>

          <DrawerFooter>
           
          </DrawerFooter>
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
            <MenuButton bg={"none"} m={0}>
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
