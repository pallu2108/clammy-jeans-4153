import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Flex,
    Box, Heading
  } from '@chakra-ui/react'
  import { ChevronDownIcon  } from '@chakra-ui/icons'


  const Drop = () => {
    return (
      <>
        <MenuList>
          <Flex fontSize={"sm"} 
          w="900px"
          gap="100px"
          >
            <Box>
              <Heading as={"h4"} size={"sm"}>
                MEN
              </Heading>
              
                <MenuItem>Watches</MenuItem>
              
              
                <MenuItem>Men's Watches</MenuItem>
              
              <Heading as={"h4"} size={"sm"}>
                WOMEN
              </Heading>
              <MenuItem>Makeup Accessories</MenuItem>
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

const Category = () => {
  return (
    <div>
    <Menu>
            <MenuButton bg={"none"} m={0}>
              Categories
              <ChevronDownIcon />
            </MenuButton>
            <Drop />
          </Menu>
    </div>
  )
}

export default Category
