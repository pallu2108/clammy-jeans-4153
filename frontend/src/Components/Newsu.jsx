import React from 'react'
import {Box,Text } from '@chakra-ui/react'
const subcategories=["Arts & Crafts","Sports Essentials","Ballet Flats","Sandals","Stiletto Heels & Slip On","Handbags & Clutes","Clothing","Home Essentials","Men's Essentials","Discovery Adventures","Marvel","Hello Kitty","Women Essentials","Bath & Storage","Gifts","Gardening","Home Decor","Kitchen Wares","Nordic Celing Lights","Disney"];

const Newsu = () => {
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

export default Newsu
