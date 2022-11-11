import React from 'react'
import img_1  from "../Images/img_1.png"
import {
   
    Box, Checkbox, Flex,Input,Text, Image, Button
  } from '@chakra-ui/react'

  const car=["cash on Delivery","Credit/Debit Card","Net Banking","EMI","UPI","Paytm","Simple Pay"]
const Checkout = () => {
  return (
    <Box border={"black"} w="100%" h="1000px">
      <Flex h="1000px" pt="50px" border={"black"} gap="8px" pl="100px" pr="100px">
      {/* box 1  */}
      <Box h="900px" w="48%"  textAlign={"left"}>
        <Box >
        <Text fontSize='sm' fontWeight={"bold"} >Your Email & Phone Number</Text>
        </Box>
        <Box pl="5px" mt="10px">
        <Text fontSize='xs' fontWeight={"bold"}>Email Address</Text>
        
        <Text fontSize='md'>tinna131@gmail.com</Text>
        </Box>
        <Box pl="5px" mt="10px">
        <Text fontSize='xs' fontWeight={"bold"}>Phone Number</Text>
        
        <Input pl="5px" pr="5px" placeholder='Phone Number'/>
        <br />
        <Box mt="15px">

          <Checkbox colorScheme='orange'><Text fontSize='xs'>I agree to be cantacted through Whatsapp for Order Updates</Text></Checkbox>
        </Box>
        </Box>
        <Box mt="25px">
        <Text mt="10px" fontSize='sm' fontWeight={"bold"} >Delivery Address</Text>
        <Box pl="5px" pr="5px" mt="10px">

        <Text fontSize='xs' fontWeight={"bold"}>Name</Text>
        
        <Input  placeholder='Name'/>
        <Flex gap="10px" mt="10px">
          <Box w="50%" mt="10px">
          <Text fontSize='xs' fontWeight={"bold"}>Address 1</Text>
          <Input placeholder='Address 1' />
          </Box>
          <Box w="50%" mt="10px">
          <Text fontSize='xs' fontWeight={"bold"} >Address 2</Text>
          <Input  placeholder='Address 2'/>
          </Box>
        </Flex>
        <br />
        <Flex gap="10px" mt="5px">
          <Box w="50%">
          <Text fontSize='xs' fontWeight={"bold"}>State</Text>
          <Input placeholder='Add State' />
          </Box>
          <Box w="50%">
          <Text fontSize='xs' fontWeight={"bold"}>City</Text>
          <Input  placeholder='City'/>
          </Box>
        </Flex>
        <br />
        <Flex gap="10px" mt="5px">
          <Box w="50%">
          <Text fontSize='xs' fontWeight={"bold"}>Country</Text>
          <Input placeholder='India' />
          </Box>
          <Box w="50%">
          <Text fontSize='xs' fontWeight={"bold"}>Pin Code</Text>
          <Input  placeholder='Pin Code'/>
          </Box>
        </Flex>
        </Box>
        </Box>
        
        <Box mt="10px">
        <Text fontSize='sm' fontWeight={"bold"} >Payment Details</Text>
        <Checkbox colorScheme='orange'><Text fontSize='xs'>Same as Shipping Address</Text></Checkbox>
        </Box>

        <Box mt="20px">
        <Text fontSize='sm' fontWeight={"bold"} >Payment Details</Text>
        <Image pl="20px"w="1000px" src="https://d64lkarmo2mrq.cloudfront.net/icons/paysymbols_paypage.png"></Image>
        <Flex w="90%" pl="29px" pr="20px" gap="20px">
          {car.map((ele)=>{
            return(
            <Box w="80px">
              <Text fontSize='xs' fontWeight={"bold"} >{ele}</Text>
            </Box>
            )

          })}
        </Flex>
        </Box>
       
        <Box>
          <Box>
          <Text pl="50px" mt="40px" fontSize='xs'>3 interest free payment of Re 2199.24 with simpl!</Text>
          </Box>
          <Button ml="20px" mt="20px" w="90%" bg="orange" color={"white"}> PAY NOW!</Button>
        </Box>

      </Box>
      
      {/* box-2  */}
      <Box textAlign={"left"} h="900px" w="48%" >
        <Box w="100%" h="90px" textAlign={"left"} border={"1px solid black"}>
        <Text fontSize='xs' pt="5px" pl="10px" fontWeight={"bold"}> 1* Mens business Watch - Beige</Text>
        <Text fontSize='xs' pl="10px" pt="5px"><span color='orange'>Delivery Date:</span> December 9, 2022</Text>
        <Text fontSize='xs' pl="10px" pt="5px"><span color='orange'>Price:</span> Rs 3,299.00</Text>
        </Box>
        <Box mt="5px" w="100%" h="90px" textAlign={"left"} border={"1px solid black"}>
        <Text fontSize='xs' pt="5px" pl="10px" fontWeight={"bold"}> 1* Mens business Watch - Beige</Text>
        <Text fontSize='xs' pl="10px" pt="5px"><span color='orange'>Delivery Date:</span> December 9, 2022</Text>
        <Text fontSize='xs' pl="10px" pt="5px"><span color='orange'>Price:</span> Rs 3,299.00</Text>

        </Box>
        <Text fontSize='sm' pb="5px" pl="10px" pt="5px">Edit Cart</Text>
        <hr />
        <Box ml="45px" w="500px" mt="10px" borderRadius={"20px 20px 20px 20px "} bg="#fff7f2" h="50px" border={"1px solid black"}  textAlign={"center"} color="orange">
          <Text color={"orange"} pt="10px"> Congratulations! You have saved Rs 13,400.00</Text>
          </Box>


        <Box mt="50px">
          <Flex gap="80px">
            <Box w="200px">
            <Text fontSize='sm' pl="10px" pt="5px">Sub Total</Text>
            </Box>
           
            <Box>
            <Text fontSize='sm' pl="10px" pt="5px">Rs 6,598.00/-</Text>
            </Box>
          </Flex>
          <Flex gap="80px">
            <Box w="200px">
            <Text fontSize='sm' pl="10px" pt="5px">Shipping Fees</Text>
            </Box>
           
            <Box>
            <Text fontSize='sm' pl="10px" pt="5px">Shipping Free</Text>
            </Box>
          </Flex>
          <Flex gap="80px">
            <Box w="200px">
            <Text fontSize='sm' pl="10px" pt="5px">Custom/Import Dutties, Taxes</Text>
            </Box>
           
            <Box>
            <Text fontSize='sm' pl="10px" pt="5px" color={"red"}>Not Applicable!</Text>
            </Box>
          </Flex>
        </Box>
        <Box mt="20px">
           <Box>
           <Text fontSize='sm' pl="10px" pt="5px">Got a Promotional Code? Use below</Text>
           </Box>
           <Box>
            <Flex>
              <Input mt="5px" ml="10px" w="300px" placeholder='Promotional Code'/> <Button color={"white"} bg="orange" mt="5px">Apply Code</Button>
            </Flex>
           </Box>
           <Box mt="20px" mb="20px">

           <hr />
           </Box>
        </Box>
        <Box>
        <Flex gap="80px">
            <Box w="200px">
            <Text color={"orange"} fontSize='lg' fontWeight={"bold"} pl="10px" pt="5px">Grand Total</Text>
            </Box>
           
            <Box>
            <Text fontSize='lg' fontWeight={"bold"} pl="10px" pt="5px" color={"orange"}>Rs 6,598.00</Text>
            </Box>
          </Flex>
          <br />
          <Text fontSize='lg'  pl="10px"  color={"gray"}>Or 3 interest free payments if Rs2199.34 with simpl</Text>
          <br />
          <br />
          <Text fontSize='xs'  pl="10px"  >Get up to Rs500.00 OFF on your First Time Prepaid Order with coupon PREPAID</Text>
        </Box>

         <Box mt="30px" pl="190px">
        <a href="/">
            <img className="img_1" src={img_1} alt="" />
          </a>   
          </Box>   

         <Box mt="10px" textAlign={"center"}>
          <Text fontSize='xl' color={"gray.600"} fontWeight={"bold"}>Our Shop. Your Price</Text>
          <Text fontSize='xs' color={"gray.600"} fontWeight={"bold"}>online Shopping Redefined</Text>
         </Box>
        </Box>
     
      </Flex>
    </Box>
  )
}

export default Checkout
