import React from 'react'
import {Box,Text } from '@chakra-ui/react'
const subcategories=["Watches","Bluetooth Earphone","Smart Watches","Electronics","Men's Watches","Flash Sale","Men's Essentials","Toys","Mobiles Accessories","Home Improvement","Handbags & Clutches","Sandals","Clothing","Stiltto Heels & Slip On","Wired Headphones","Action Figures","Small Application","Top Selling Smart Watches","home Decor","Sporting Bluetooth"];


const Trendsub = () => {
  return (
    <Box textAlign={"left"} pl="30px" w="200px">
      <Text fontSize='xl' mt="10px" pb="10px">Subcategories</Text>  
      {subcategories.map((ele)=>{
        return(<>
           <Text fontSize='sm' pb="4px" >{ele}</Text> 
        </>)
      })}
    </Box>
  )
}

export default Trendsub
