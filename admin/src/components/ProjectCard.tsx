import { Box, Button, Flex, Image } from '@chakra-ui/react'
import React from 'react'

const ProjectCard = ({title, image, brand, onClick}:{title: string, image: string, brand: string, onClick?: React.MouseEventHandler<HTMLButtonElement>} ) => {
  return (
    <Box>
        <Flex>
            <Box>
                <Image boxSize={"50px"} src={image} />
            </Box>
            <Box>{title}</Box>
            <Box>{brand}</Box>
            <Box>
                <Button onClick={onClick}>Edit</Button>
            </Box>
        </Flex>
    </Box>
  )
}

export default ProjectCard