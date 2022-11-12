import React from 'react'
import { json, useParams } from 'react-router-dom'
import {useState,useEffect} from "react"
import { useDispatch, useSelector } from 'react-redux';
// import { getMusicRecord } from '../Redux/AppReducer/action';
import { getFlashRecord } from '../Redux/FlashReducer/action';
// import { Box, Flex, Image, Text } from '@chakra-ui/react'
import {
    Box,
    Text,
    Button,
    Image,
    Flex
  } from "@chakra-ui/react";
  import { Link } from 'react-router-dom';
// import { getFlashRecord } from '../Redux/FlashReducer/action';
const arr=[{
    brand:"Desney",
    category:"MENS",
    images1:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjM1Njc3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6MTAwMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    images2:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjM1Njc3XC9Ccm93bl9uXzFfMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6MTAwMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    mrp:9999,
    price:4999,
    Material: "ALLOY",
    Movement: "Automatic",
    StoneAccent:"Crystal",
    quantity:100,
    rating:3.8,
    subcategory:"Watches",
    title:"My First Demo Product"
}]

const SinglePage = () => {
    const {id}=useParams();
    const dispatch=useDispatch(); 
    const [currentMusicAlbum,setCurrentMusicAlbum]=useState({});
    const flashRecords=useSelector((store)=>store.FlashReducer.flashRecords);
  
   useEffect(()=>{
      if(flashRecords.length===0)
      {
        dispatch(getFlashRecord())
      }
   },[dispatch, flashRecords.length])
  
    useEffect(()=>{
      if(id)
      {
        const currentMusic=flashRecords.find((album)=>album._id==(id));
          currentMusic && setCurrentMusicAlbum(currentMusic)
      }
    },[id,flashRecords]);
    
    // console.log(currentMusic)
    // console.log(musicRecords)
    console.log(currentMusicAlbum)
  return (
    <Box 
    
    // border="1px solid lightgray"
     h="700px" w="100%" mt="30px">



 {/* <h1>{currentMusicAlbum.images[0]}</h1> */}
      <Flex gap="10px" pl="5%" pr="5%">
        <Box 
        border="1px solid lightgray" 
        h="700px" w="100%">
      <Image src={currentMusicAlbum.images[0]}></Image>
           
        </Box>
        <Box 
        border="1px solid lightgray"
         h="700px" w="100%">
            <Box >
            <Box textAlign={"left"} pl="20px">
                            
                            <Box className='overflowTest'>
                            <Text fontSize={"2xl"} color={'gray'} fontWeight={"bold"}>{currentMusicAlbum.title}</Text>
                                <Flex>
                                <Text mt="3px"fontSize={"xl"} color={'orange'} fontWeight={"bold"}>₹ {currentMusicAlbum.price}</Text> 
                                <Text pl="10px" pt="6px"fontSize={"lg"} color={'gray'} as={"del"} >₹ {currentMusicAlbum.mrp}</Text> 
                                <Text pl="10px" pt="10px"fontSize={"sm"} color={'green.400'}  >UP TO 67% OFF</Text> 
                                </Flex>
                                <Flex>
                                <Text mt="3px"fontSize={"xs"} color={"gray"} >Save up to</Text> 
                               
                                <Text pl="10px" pt="3px" fontSize={"xs"} color={'orange'}  >₹ {currentMusicAlbum.rating}</Text> 
                                </Flex>
                                <Box>
                                <Text   fontSize={"sm"} fontWeight="bold" color={'orange'}  textDecoration="underline" >CASH ON DELIVERY AVILABLE ON ORDERS BETWEEN ₹ 999 AND ₹ 10,000</Text> 
                                <Text   fontSize={"sm"}  color={'gray'}   >Get up to ₹500 OFF with coupon code PREPAID</Text> 
                                <Text   fontSize={"sm"}  color={'gray'}   >3 interest free payment</Text> 
                                <Flex>
                                <Text   fontSize={"lg"}  color={'gray'}   >Availability :</Text> 
                                    <Text fontSize={"lg"} color="green.400"> In Stock</Text>
                                </Flex>
                              
                                
                                <Text fontSize={"2xl"} color={'gray'} fontWeight={"bold"}>{currentMusicAlbum.title}</Text>
                                <Text fontSize={"xs"} color={'gray'} fontWeight={"bold"}>Products Category :{currentMusicAlbum.rating}</Text>
                                <Text fontSize={"xs"} color={'gray'} fontWeight={"bold"}>Brand: {currentMusicAlbum.brand}</Text>
                                <Text fontSize={"xs"} color={'gray'} fontWeight={"bold"}>Movement: {currentMusicAlbum.quantity}</Text>
                                <Text fontSize={"xs"} color={'gray'} fontWeight={"bold"}>Brand Material Type: {currentMusicAlbum.title}</Text>
                                <Text fontSize={"xs"} color={'gray'} fontWeight={"bold"}>StoneAccent: {currentMusicAlbum.rating}</Text>
                                <Text fontSize={"xs"} color={'gray'} fontWeight={"bold"}>Quantity: {currentMusicAlbum.rating}</Text>
                                <Box w="100px">
    
                                <Text fontSize={"lg"} color={'gray'} fontWeight={"bold"}>Rating: {currentMusicAlbum.rating}</Text>
                                </Box>
                                <Box>
                                    <Flex gap="20px">
                                        <Button color={"white"} colorScheme="orange">ADD TO CART</Button>
                                        <Link to="/checkout">
                                        <Button color={"white"} colorScheme="orange">BUY NOW</Button>
                                        </Link>
                                    </Flex>
                                </Box>
                                </Box>
                                 <Image src={currentMusicAlbum.images[0]}></Image>
                                 <Image src={currentMusicAlbum.images[1]}></Image> 
                                
                                </Box>
                                </Box>  
            {/* {
                arr.map((ele)=>{
                    return(
                        <Box textAlign={"left"} pl="20px">
                            
                        <Box className='overflowTest'>
                        <Text fontSize={"2xl"} color={'gray'} fontWeight={"bold"}>{ele.title}</Text>
                            <Flex>
                            <Text mt="3px"fontSize={"xl"} color={'orange'} fontWeight={"bold"}>₹ {ele.price}</Text> 
                            <Text pl="10px" pt="6px"fontSize={"lg"} color={'gray'} as={"del"} >₹ {ele.mrp}</Text> 
                            <Text pl="10px" pt="10px"fontSize={"sm"} color={'green.400'}  >UP TO 67% OFF</Text> 
                            </Flex>
                            <Flex>
                            <Text mt="3px"fontSize={"xs"} color={"gray"} >Save up to</Text> 
                           
                            <Text pl="10px" pt="3px" fontSize={"xs"} color={'orange'}  >₹ {ele.price}</Text> 
                            </Flex>
                            <Box>
                            <Text   fontSize={"sm"} fontWeight="bold" color={'orange'}  textDecoration="underline" >CASH ON DELIVERY AVILABLE ON ORDERS BETWEEN ₹ 999 AND ₹ 10,000</Text> 
                            <Text   fontSize={"sm"}  color={'gray'}   >Get up to ₹500 OFF with coupon code PREPAID</Text> 
                            <Text   fontSize={"sm"}  color={'gray'}   >3 interest free payment</Text> 
                            <Flex>
                            <Text   fontSize={"lg"}  color={'gray'}   >Availability :</Text> 
                                <Text fontSize={"lg"} color="green.400"> In Stock</Text>
                            </Flex>
                          
                            
                            <Text fontSize={"2xl"} color={'gray'} fontWeight={"bold"}>{ele.title}</Text>
                            <Text fontSize={"xs"} color={'gray'} fontWeight={"bold"}>Products Category :{ele.category}</Text>
                            <Text fontSize={"xs"} color={'gray'} fontWeight={"bold"}>Brand: {ele.brand}</Text>
                            <Text fontSize={"xs"} color={'gray'} fontWeight={"bold"}>Movement: {ele.Movement}</Text>
                            <Text fontSize={"xs"} color={'gray'} fontWeight={"bold"}>Brand Material Type: {ele.Material}</Text>
                            <Text fontSize={"xs"} color={'gray'} fontWeight={"bold"}>StoneAccent: {ele.StoneAccent}</Text>
                            <Text fontSize={"xs"} color={'gray'} fontWeight={"bold"}>Quantity: {ele.quantity}</Text>
                            <Box w="100px">

                            <Text fontSize={"lg"} color={'gray'} fontWeight={"bold"}>Rating: {ele.rating}</Text>
                            </Box>
                            <Box>
                                <Flex gap="20px">
                                    <Button color={"white"} colorScheme="orange">ADD TO CART</Button>
                                    <Link to="/checkout">
                                    <Button color={"white"} colorScheme="orange">BUY NOW</Button>
                                    </Link>
                                </Flex>
                            </Box>
                            </Box>
                             <Image src={ele.images1}></Image>
                             <Image src={ele.images2}></Image> 
                            
                            </Box>
                            </Box>
                    )
                })
            } */}
                
            </Box>
        </Box>
      </Flex>
    </Box>
  )
}

export default SinglePage
