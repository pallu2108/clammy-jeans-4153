import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import FlashFilter from '../Components/FlashFilter';
import { getFlashRecord } from '../Redux/FlashReducer/action';
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Flex,Text, Spacer } from '@chakra-ui/react'


const FlashRecords = () => {

    const dispatch=useDispatch();
    const flashRecords=useSelector((store)=>store.FlashReducer.flashRecords)
    
    useEffect(()=>{
        dispatch(getFlashRecord())
    },[])

    console.log(flashRecords)


    return (
    <Box style={{display:"flex"}}>
      <Box >
        <FlashFilter/>
      </Box>
      <Box border="1px solid lightgray" h="auto" w="1290px"pl="11px">
        <Box textAlign={"left"}>
        <Box mt="10px"><span> Home </span><ChevronRightIcon/><span> Flash sale </span><ChevronRightIcon/><span> Flash span </span></Box>
        </Box>
        <Box  h="auto" pl="15px">
        {/* <Box textAlign={"left"}>
        <Box mt="10px"><span> Home </span><ChevronRightIcon/><span> Flash sale </span><ChevronRightIcon/><span> Flash span </span></Box>
        </Box> */}
      <Box style={{display:"grid",gridTemplateColumns:"repeat(4,300px)",gap:"15px"}}>
        
        {flashRecords.length>0 && flashRecords.map((ele)=>{
          return <Box key={ele.id}  >
            <div>

            <img src={ele.images[0]}></img>
            </div>
            <Box><Text fontSize={"sm"} textAlign="left">{ele.title
}</Text></Box>

<Box mt="2px" mb="2px">
  <hr />
  </Box>
<Flex mt="10px">
  <Spacer/>

            <Box border="1px solid green" w="60px" color='white' bg="green" ><span    textAlign={"right"} pr="4px">{ele.rating}</span></Box>
</Flex>
            <Flex  mt="5px">
              <Box color={"orange.400"}>₹ {ele.mrp
}</Box>
              <Spacer/>  
              <Box>
                <Text fontSize={"sm"} color={"gray"}>

                {ele.productDesc.Product}
                </Text>
                </Box>
            </Flex>
            </Box>
        })}
      </Box>
      </Box>
      </Box>
    </Box>
  )
}

export default FlashRecords
