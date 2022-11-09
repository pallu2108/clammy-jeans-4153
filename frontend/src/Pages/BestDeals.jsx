import React from 'react'
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux'
import FlashFilter from '../Components/FlashFilter';
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Flex, Spacer } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getBestRecord } from '../Redux/BestReducer/action';
import Best from '../Components/Best';

const BestDeals = () => {
    
    const dispatch=useDispatch();
    const bestRecords=useSelector((store)=>store.BestReducer.bestRecords)
    useEffect(()=>{
       dispatch(getBestRecord())
    },[])
    console.log(bestRecords)
  

    return (
    <Box style={{display:"flex",gap:"25px"}}>
      <Box >
        <Best/>
      </Box>
      <Box border="1px solid lightgray" h="auto" w="1248px"pl="15px">
        {/* <Box textAlign={"left"}>
        <Box mt="10px"><span> Home </span><ChevronRightIcon/><span> Flash sale </span><ChevronRightIcon/><span> Flash span </span></Box>
        </Box> */}
      <Box style={{display:"grid",gridTemplateColumns:"repeat(4,300px)",gap:"7px"}}>
        
        {bestRecords.length>0 && bestRecords.map((ele)=>{
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

export default BestDeals
