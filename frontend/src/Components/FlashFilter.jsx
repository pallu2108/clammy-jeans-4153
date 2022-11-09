import React from 'react'
import {Accordion,Checkbox,AccordionIcon, AccordionItem,AccordionButton,AccordionPanel,Box } from '@chakra-ui/react'
const FlashFilter = () => {
  return (
    <Box w="230px">
      <Box textAlign="left" ml="9px" h="50px" p="10px">

      <h2  >Filter</h2>
      </Box>
    <Accordion allowMultiple>
      {/* One  */}
    <AccordionItem mb="10px" >
      <h2 >
        <AccordionButton  border="gray" h="50px">
          <Box
            fontSize="sm"
            w="100px"
            flex="1"
            textAlign="left"
            mt="5px"
            >
            BRANDS
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel
      textAlign="left">
        <Checkbox size='sm' colorScheme='yellow'>Awei</Checkbox>
        <br />
        <Checkbox size='sm' colorScheme='yellow'>BOBOBIRD</Checkbox>
        <br />
        <Checkbox size='sm' colorScheme='yellow'>CURREN</Checkbox>
        <br />
        <Checkbox size='sm' colorScheme='yellow'>DACOM</Checkbox>
        <br /> 
        <Checkbox size='sm' colorScheme='yellow'>HAVIT</Checkbox>
        <br />
        <Checkbox size='sm' colorScheme='yellow'>Haylou</Checkbox>
        <br /> 
        <Checkbox size='sm' colorScheme='yellow'>IKF</Checkbox>
        <br />
        <Checkbox size='sm' colorScheme='yellow'>KOSPET</Checkbox>
        <br /> 
        <Checkbox size='sm' colorScheme='yellow'>LOKMAT</Checkbox>
        <br />
        <Checkbox size='sm' colorScheme='yellow'>MB</Checkbox>
        <br /> 
        <Checkbox size='sm' colorScheme='yellow'>PD</Checkbox>
        <br />
        <Checkbox size='sm' colorScheme='yellow'>SandDunes</Checkbox>  
        <br />
        <Checkbox size='sm' colorScheme='yellow'>SKMEI</Checkbox>
        <br />
        <Checkbox size='sm' colorScheme='yellow'>Soundpeats</Checkbox>
        <br />
        <Checkbox size='sm' colorScheme='yellow'>SYLLABLE</Checkbox>
        <br /> 
        <Checkbox size='sm' colorScheme='yellow'>Xiaomi</Checkbox>
        <br />
        <Checkbox size='sm' colorScheme='yellow'>Zeblaze</Checkbox>
        
      </AccordionPanel>
    </AccordionItem>
     


     {/* Two  */}
    <AccordionItem mb="10px" >
      <h2 >
        <AccordionButton  border="gray" h="50px">
          <Box
            fontSize="sm"
            w="100px"
            flex="1"
            textAlign="left"
            mt="5px">
            COLORS
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel
      textAlign="left">
        <Checkbox size='sm' colorScheme='yellow'>Beige</Checkbox>
        <br />
        <Checkbox size='sm' colorScheme='yellow'>Black</Checkbox>
        <br />
        <Checkbox size='sm' colorScheme='yellow'>Blue</Checkbox>
        <br />
        <Checkbox size='sm' colorScheme='yellow'>Brown</Checkbox>
        <br /> 
        <Checkbox size='sm' colorScheme='yellow'>Cobalt Blue</Checkbox>
        <br />
        <Checkbox size='sm' colorScheme='yellow'>Coffee</Checkbox>
        <br /> 
        <Checkbox size='sm' colorScheme='yellow'>Electric Blue</Checkbox>
        <br />
        <Checkbox size='sm' colorScheme='yellow'>Gold</Checkbox>
        <br /> 
        <Checkbox size='sm' colorScheme='yellow'>Gray</Checkbox>
        <br />
        <Checkbox size='sm' colorScheme='yellow'>Green</Checkbox>
        <br /> 
        <Checkbox size='sm' colorScheme='yellow'>Lilac</Checkbox>
        <br />
        <Checkbox size='sm' colorScheme='yellow'>Multi-color</Checkbox>  
        <br />
        <Checkbox size='sm' colorScheme='yellow'>Navy Blue</Checkbox>
        <br />
        <Checkbox size='sm' colorScheme='yellow'>Orange</Checkbox>
        <br />
        <Checkbox size='sm' colorScheme='yellow'>Peach</Checkbox>
        <br /> 
        <Checkbox size='sm' colorScheme='yellow'>pink</Checkbox>
        <br />
        <Checkbox size='sm' colorScheme='yellow'>Red</Checkbox>
        <br />
        <Checkbox size='sm' colorScheme='yellow'>Rose</Checkbox>
        <br />
        <Checkbox size='sm' colorScheme='yellow'>Silver</Checkbox>
        <br />
        <Checkbox size='sm' colorScheme='yellow'>Slate Gray</Checkbox>
        <br /> 
        <Checkbox size='sm' colorScheme='yellow'>White</Checkbox>
        <br />
        <Checkbox size='sm' colorScheme='yellow'>Yellow</Checkbox>
        
      </AccordionPanel>
    </AccordionItem>
    </Accordion>
    </Box>
  )
}

export default FlashFilter
