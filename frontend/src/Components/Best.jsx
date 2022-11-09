import React from 'react'
import {Box,Text } from '@chakra-ui/react'
const subcategories=["Keyboards & MouseEvent", "Home Improvement","Bluetooth Earphone","Sporting Bluetooth","Wireless Chardera","Wireless Speakers","School Backpacks","Home Decor","Ballet Flats","Makeup Accessories","Handbags & Clutches","Wired Headphones","Smar Watches","Men's Watches","Electronics","Mobiles Accessories","Top Selleing Smart Watches","Sandals","Small Appliances","Kitchen Wares"]

const Best = () => {
  return (
    <Box textAlign={"left"} pl="30px" w="200px">
      <Text fontSize='xl' mt="10px" pb="10px">Subcategories</Text>  
      {subcategories.map((ele)=>{
        return(<>
           <Text fontSize='md' pb="4px" >{ele}</Text> 
        </>)
      })}
    </Box>
  )
}

export default Best
