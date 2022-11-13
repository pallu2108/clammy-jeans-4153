import { Box, Button, Flex, Image, Spacer } from '@chakra-ui/react'
import React from 'react'

const ProjectCard = ({title, image, brand, onClick}:{title: string, image: string, brand: string, onClick?: React.MouseEventHandler<HTMLButtonElement>} ) => {
  return (
    <Box bg={"yellow"} maxW='7xl'>
        <Flex>
            <Box>
                <Image boxSize={"50px"} src={image} />
            </Box>
            <Spacer />
            <Box>{title}</Box>
            <Spacer />
            <Box>{brand}</Box>
            <Spacer />
            <Box>
                <Button onClick={onClick}>Edit</Button>
            </Box>
        </Flex>
    </Box>
  )
}

export default ProjectCard