import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,Text ,  Button, useDisclosure,Image, Box, Spacer, Flex, Input, Checkbox
  } from '@chakra-ui/react'
  import img_1 from "../Images/img_1.png"

const Modala = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div>
      <Button onClick={onOpen}>Open Modal</Button>

<Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>
        <Image w="200px" h="50px" src={img_1}></Image>
    </ModalHeader>
    <Box >

    <ModalCloseButton />
    </Box>
    <Box>
        <Text pl="20px" fontSize={"sm"} fontWeight="bold">
           Add New Card
        </Text>
      </Box>
      <Box>
        <Flex>
        <Text mt="50px" pl="50px" fontSize={"sm"} >
           Card Number
        </Text>
        <Spacer/>
        <Text mt="50px" pr="80px" fontSize={"sm"} >
          Exp
        </Text>

        </Flex>
        <Flex>
        <Input ml="20px" w="150px" fontSize={"xs"} placeholder="Card Number" />
           
        
        <Spacer/>
        <Input  w="150px"  mr="20px" fontSize={"sm"} placeholder="Exp"/>
        

        </Flex>
      </Box> 
      <Box >
        <Flex mt="30px">
        <Text  pl="50px" fontSize={"sm"} >
          Your Name
        </Text>
        <Spacer/>
        <Text  pr="80px" fontSize={"sm"} >
          CVV
        </Text>

        </Flex>
        <Flex>
        <Input ml="20px" w="150px" fontSize={"xs"} placeholder="Card Holder Name" />
           
        
        <Spacer/>
        <Input  w="150px"  mr="20px" fontSize={"sm"} placeholder="CVV"/>
        

        </Flex>
      </Box>
      
      <Box pl="20px" mt="20px">

        <Checkbox colorScheme='orange'><Text fontSize={"sm"}> Save card securely for future payment</Text></Checkbox>
      </Box>

    {/* <ModalBody>
      <Box>
        <Text fontSize={"lg"} fontWeight="bold">
           Add New Card
        </Text>
      </Box>
      
    </ModalBody> */}

    <ModalFooter>
      <Button w="100%" colorScheme='orange' mr={3} onClick={onClose}>
        Pay Rs 3445
      </Button>
      
    </ModalFooter>
  </ModalContent>
</Modal>
    </div>
  )
}

export default Modala
