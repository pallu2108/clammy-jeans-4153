import React from 'react'
import {Box,Text, Grid,GridItem } from '@chakra-ui/react'

const A=["Addiesdive","AIPOWER","Amazfit","Amphertz","APEXEL","Awei","AWEI"]
const B=["Badianb","Baseus","Baseus","BENZ AMG","Bluedio","BOBOBIRD","BOTMI","BOUX"];
const C=["Capone","CCA","Cleer","COLMI","CURREN"];
const D=["DACOM","Disney","Doogee","DTNO1"]
const E=["EDIFIER","EUTOUR"];
const F=["Fanbiya","FBYED","FIIL","Floveme"];
const G=["Gocomma","Gravastar","Gwong"];
const H=["Hammer","Havit","Haylou","Hello kitty","Hoco","Honor","HUAWEI"];
const I=["Ikf"];
const J=["Jabees","JBL","Joyroom","JSBP"];
const K=["Kemei","KOSPET","KZ"];
const L=["Langsdom","LEMFO","Lenovo","LIGE","Lofree","LOKMAT","LONCA","Lookcare"];
const M=["Marvel","MB","MC","MSDODO","Microwwar","Miafa","MIFO","MILI","Mobile","Mojixing","Monmax","Monster","Motorola"];
const N=["NAIKU","Naviforce","Neway","Nillkin","Nubia"]
const O=["OPENHEART","Ordro","Orico","Oulm"];
const P=["PD","Peripage","PHILIPS","Picun","Pisen"]
const Q=["QCY","QKZ"]
const R=["RAZER","Redmi","Remax","ROCK","Rogbid"]
const S=["Sabbat","Sandduens","SENBONO","SK","SKMEI","SONG X","SONIFER","SONY","Soundpeats","STARTRC","SYLLABULE"];
const T=["TEVISE","Thecoopidea","Ticwatch","TICWRIS","TOMKAS","TOPK"]
const U=["Ugreen","Usams"]
const W=["Whixxer"]
const X=["XGIMI"]
const Z=["Zeblaze","ZMI"]
const ShopByBrands = () => {
  return (
    <Box pl="100PX" pr="100px" mb="20px" >
        <Text fontSize='3xl' mt="50px" mb="20px" textAlign={"left"}>Shop by Brand</Text>
        <Grid templateColumns='repeat(3, 1fr)' gap={6}>
  <GridItem w='100%' h='auto'  textAlign={"left"} >
    <Text fontSize={"2xl"} >A</Text>
    {A.map((ele)=>{
        return(<>
        <Text color="#428bca" _hover={{textDecoration:"underline"}} >{ele}</Text>
        </>)
    })}
 </GridItem>

 <GridItem w='100%' h='auto'  textAlign={"left"} >
 <Text fontSize={"2xl"} >B</Text>
    {B.map((ele)=>{
        return(<>
        <Text _hover={{textDecoration:"underline"}} color="#428bca">{ele}</Text>
        </>)
    })}
 </GridItem>
 <GridItem w='100%' h='auto'  textAlign={"left"} >
 <Text fontSize={"2xl"} >C</Text>
    {C.map((ele)=>{
        return(<>
        <Text _hover={{textDecoration:"underline"}} color="#428bca">{ele}</Text>
        </>)
    })}
 </GridItem>
 <GridItem w='100%' h='auto'  textAlign={"left"} >
 <Text fontSize={"2xl"} >D</Text>
    {D.map((ele)=>{
        return(<>
        <Text _hover={{textDecoration:"underline"}} color="#428bca">{ele}</Text>
        </>)
    })}
 </GridItem>
 <GridItem w='100%' h='auto'  textAlign={"left"} >
 <Text fontSize={"2xl"} >E</Text>
    {E.map((ele)=>{
        return(<>
        <Text _hover={{textDecoration:"underline"}} color="#428bca">{ele}</Text>
        </>)
    })}
 </GridItem>
 <GridItem w='100%' h='auto' textAlign={"left"} >
 <Text fontSize={"2xl"} >F</Text>
   {F.map((ele)=>{
        return(<>
        <Text _hover={{textDecoration:"underline"}} color="#428bca">{ele}</Text>
        </>)
    })}
 </GridItem>
 <GridItem w='100%' h='auto'  textAlign={"left"} >
 <Text fontSize={"2xl"} >G</Text>
    {G.map((ele)=>{
        return(<>
        <Text _hover={{textDecoration:"underline"}} color="#428bca">{ele}</Text>
        </>)
    })}
 </GridItem>
 <GridItem w='100%' h='auto'  textAlign={"left"} >
 <Text fontSize={"2xl"} >H</Text>
    {H.map((ele)=>{
        return(<>
        <Text _hover={{textDecoration:"underline"}} color="#428bca">{ele}</Text>
        </>)
    })}
 </GridItem>
 <GridItem w='100%' h='auto'  textAlign={"left"} >
 <Text fontSize={"2xl"} >I</Text>
    {I.map((ele)=>{
        return(<>
        <Text _hover={{textDecoration:"underline"}} color="#428bca">{ele}</Text>
        </>)
    })}
 </GridItem>
 <GridItem w='100%' h='auto'  textAlign={"left"} >
 <Text fontSize={"2xl"} >J</Text>
    {J.map((ele)=>{
        return(<>
        <Text _hover={{textDecoration:"underline"}} color="#428bca">{ele}</Text>
        </>)
    })}
 </GridItem>
 <GridItem w='100%' h='auto'  textAlign={"left"} >
 <Text fontSize={"2xl"} >K</Text>
    {K.map((ele)=>{
        return(<>
        <Text _hover={{textDecoration:"underline"}} color="#428bca">{ele}</Text>
        </>)
    })}
 </GridItem>
 <GridItem w='100%' h='auto'  textAlign={"left"} >
 <Text fontSize={"2xl"} >L</Text>
    {L.map((ele)=>{
        return(<>
        <Text _hover={{textDecoration:"underline"}} color="#428bca">{ele}</Text>
        </>)
    })}
 </GridItem>
 <GridItem w='100%' h='auto'  textAlign={"left"} >
 <Text fontSize={"2xl"} >M</Text>
    {M.map((ele)=>{
        return(<>
        <Text _hover={{textDecoration:"underline"}} color="#428bca">{ele}</Text>
        </>)
    })}
 </GridItem>
 <GridItem w='100%' h='auto'  textAlign={"left"} >
 <Text fontSize={"2xl"} >N</Text>
    {N.map((ele)=>{
        return(<>
        <Text _hover={{textDecoration:"underline"}} color="#428bca">{ele}</Text>
        </>)
    })}
 </GridItem>
 <GridItem w='100%' h='auto'  textAlign={"left"} >
 <Text fontSize={"2xl"} >O</Text>
    {O.map((ele)=>{
        return(<>
        <Text _hover={{textDecoration:"underline"}} color="#428bca">{ele}</Text>
        </>)
    })}
 </GridItem>
 <GridItem w='100%' h='auto'  textAlign={"left"} >
 <Text fontSize={"2xl"} >P</Text>
    {P.map((ele)=>{
        return(<>
        <Text _hover={{textDecoration:"underline"}} color="#428bca">{ele}</Text>
        </>)
    })}
 </GridItem>
 <GridItem w='100%' h='auto'  textAlign={"left"} >
 <Text fontSize={"2xl"} >Q</Text>
    {Q.map((ele)=>{
        return(<>
        <Text _hover={{textDecoration:"underline"}} color="#428bca">{ele}</Text>
        </>)
    })}
 </GridItem>
 <GridItem w='100%' h='auto'  textAlign={"left"} >
 <Text fontSize={"2xl"} >R</Text>
    {R.map((ele)=>{
        return(<>
        <Text _hover={{textDecoration:"underline"}} color="#428bca">{ele}</Text>
        </>)
    })}
 </GridItem>
 <GridItem w='100%' h='auto'  textAlign={"left"} >
 <Text fontSize={"2xl"} >S</Text>
    {S.map((ele)=>{
        return(<>
        <Text _hover={{textDecoration:"underline"}} color="#428bca">{ele}</Text>
        </>)
    })}
 </GridItem>
 <GridItem w='100%' h='auto'  textAlign={"left"} >
 <Text fontSize={"2xl"} >T</Text>
    {T.map((ele)=>{
        return(<>
        <Text _hover={{textDecoration:"underline"}} color="#428bca">{ele}</Text>
        </>)
    })}
 </GridItem>
 <GridItem w='100%' h='auto'  textAlign={"left"} >
 <Text fontSize={"2xl"} >U</Text>
    {U.map((ele)=>{
        return(<>
        <Text _hover={{textDecoration:"underline"}} color="#428bca">{ele}</Text>
        </>)
    })}
 </GridItem>
 <GridItem w='100%' h='auto'  textAlign={"left"} >
 <Text fontSize={"2xl"} >W</Text>
    {W.map((ele)=>{
        return(<>
        <Text _hover={{textDecoration:"underline"}} color="#428bca">{ele}</Text>
        </>)
    })}
 </GridItem>
 <GridItem w='100%' h='auto'  textAlign={"left"} >
 <Text fontSize={"2xl"} >X</Text>
    {X.map((ele)=>{
        return(<>
        <Text _hover={{textDecoration:"underline"}} color="#428bca">{ele}</Text>
        </>)
    })}
 </GridItem>
 <GridItem w='100%' h='auto'  textAlign={"left"} >
 <Text fontSize={"2xl"}  >Z</Text>
    {Z.map((ele)=>{
        return(<>
        <Text _hover={{textDecoration:"underline"}} color="#428bca">{ele}</Text>
        </>)
    })}
 </GridItem>

  
</Grid>
      
    </Box>
  )
}

export default ShopByBrands
