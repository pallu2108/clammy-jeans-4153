import React from 'react'
import { Box, Flex,Text,Image , Input, Button} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
const arr=[{
  "image": "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMyMTMxXC9QaW5rX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTAwMCwiaGVpZ2h0IjoxMDAwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
  "name": "Car LED Makeup Mirror",
  "rating": "5/5",
  "price": 2199,
  "para": "Free Shipping"
}]

const Editcart = () => {
  return (
    <Box>
      <Navbar />
     <Box pl="100px" pr="100px">
        <Flex gap="20px">
          {/* box1  */}
            <Box w="900px" mt="20px" h="auto" border={"1px solid rgb(205,205,205)"}>
               <Box bg="#f2f2f2"   h="80px" w="100%">
                <Flex gap="50px">
                  <Box pt="20px" pl="250px"><Text fontsize={"sm"} fontWeight={"bold"} color={"gray"} >Product Details</Text></Box>
                  <Box pt="20px" pl="200px"><Text fontsize={"sm"} fontWeight={"bold"} color={"gray"} >Our Price</Text></Box>
                  <Box pt="20px" ><Text fontsize={"sm"} fontWeight={"bold"} color={"gray"} >Your Price</Text></Box>
                </Flex>
               </Box>
               <Box>

               {
               arr.map((ele)=>{
                 console.log(ele)
                 return(
                   <Flex gap="50px">
                       <Box><Image pl="30px" w="150px" h="150px" src={ele.image}></Image></Box>
                       <Box w="300px" >
                         <Box textAlign={"left"}>
                            <Text fontSize={"md"} mt="5px" fontWeight="bold">Car LED Makeup Mirror</Text>
                            <br />
                            <Text pl="10px" fontSize={"xs"} >COLOR : White</Text>
                            <Flex>
                              <Box pl="10px">

                            <Text fontSize={"xs"} pt="5px" >Select QTY :</Text>
                              </Box>
                               <Box pl="10px" pt="2px">1</Box>
                            </Flex>
                         </Box>
                         <Box pt="4px">
                          <Text color={"green"} textAlign={"left"} pl="10px" fontWeight="bold" fontSize="xs">Free Delivery</Text>
                         </Box>
                         <Box>
                          <Flex>
                            <Box>
                            <Text color={"blue"} textAlign={"left"} pl="10px" fontWeight="bold" fontSize="xs">DELIVERY DATE : </Text>
                            </Box>
                            <Box>
                            <Text  textAlign={"left"}  fontWeight="bold" fontSize="xs"> DECEMBER 9, 2022</Text>
                            </Box>
                          </Flex>
                         </Box>
                        
                       </Box>
                       <Box pl="60px" pt="40px"> <Text as="del"> Rs 9,999.00</Text></Box>
                       <Box pl="10px" pt="40px"> <Text>
                        RS 2,199.00
                        </Text></Box>
                     </Flex>
                 )
               })
              }
               </Box>
            </Box>

            {/* Box 2 */}
            <Box w="280px" mt="20px" h="350px" border={"1px solid rgb(205,205,205)"}>
            <Box bg="#f2f2f2" h="80px">
            <Box pt="20px" ><Text fontsize={"sm"} fontWeight={"bold"} color={"gray"} >Checkout Details</Text></Box>
            </Box>
            <Box>
            <Box pt="4px">
              <Flex>
               
                <Box>
                <Text color={"gray"} textAlign={"left"} pl="10px" fontWeight="bold" fontSize="md">Total Items: 1</Text>
                <Flex>
                  <Box><Text color={"gray"} textAlign={"left"} pl="10px" fontWeight="bold" fontSize="md">Sub Total : </Text></Box>

                  <Box><Text color={"blue"} textAlign={"left"} pl="10px" fontWeight="bold" fontSize="md">Rs 2,199.00 </Text> </Box>
                </Flex>
                
                <Text color={"green"} textAlign={"left"} pl="10px" fontWeight="bold" fontSize="md">Shipping : Free</Text>
                </Box>
              </Flex>
              <Box mt="10px"pl="4px" pr="4px" mb="10px">
                <hr />
              </Box>
              <br />
              <Text  color={"gray"} textAlign={"left"} pl="10px" fontWeight="bold" fontSize="md">Or 3 interest free payments of</Text>
              <Text mb={"10px"}  color={"black"} textAlign={"left"} pl="10px" fontWeight="bold" fontSize="md">Rs 733.00 </Text>
              
                          
                         </Box>
                         <Button bg="orange" color="white">
                          <Link to="/checkout">
                          CHECKOUT NOW
                          </Link>
                          </Button>
            </Box>
            </Box>
        </Flex>

     </Box>
     <Footer />
    </Box>
  )
}

export default Editcart
