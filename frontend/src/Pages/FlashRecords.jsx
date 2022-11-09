import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import FlashFilter from '../Components/FlashFilter';
import { getFlashRecord } from '../Redux/FlashReducer/action';
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Flex, Spacer } from '@chakra-ui/react'


const FlashRecords = () => {

    const dispatch=useDispatch();
    const flashRecords=useSelector((store)=>store.FlashReducer.flashRecords)
    
    useEffect(()=>{
        dispatch(getFlashRecord())
    },[])

    console.log(flashRecords)


    return (
    <Box style={{display:"flex",gap:"10px"}}>
      <Box >
        <FlashFilter/>
      </Box>
      <Box border="1px solid lightgray" h="auto" w="1232px"pl="11px">
        <Box textAlign={"left"}>
        <Box mt="10px"><span> Home </span><ChevronRightIcon/><span> Flash sale </span><ChevronRightIcon/><span> Flash span </span></Box>
        </Box>
      <Box style={{display:"grid",gridTemplateColumns:"repeat(4,300px)",gap:"7px"}}>
        
        {flashRecords.length>0 && flashRecords.map((ele)=>{
          return <Box key={ele.id}>
            <div>

            <img src={ele.image}></img>
            </div>
            <div><h3>{ele.name}</h3></div>
            <div><h3>{ele.rating}</h3></div>
            <Flex >
              <Box>{ele.price}</Box>
              <Spacer/>  
              <Box>{ele.para}</Box>
            </Flex>
            </Box>
        })}
      </Box>
      </Box>
    </Box>
  )
}

export default FlashRecords
