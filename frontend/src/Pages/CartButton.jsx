import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Box,Text, Flex, Spacer,Image
  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const CartButton = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
    return (
        <>
           <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Cart button
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
        </>
      )
}

export default CartButton
