import { Box, Heading, Text } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export default function Success() {
  return (
    <Box textAlign="center" mt="150px" mb="150px" py={10} px={6}>
      <Link to={"/"}>
        <CheckCircleIcon boxSize={"50px"} color={"green.500"} />
        <Heading as="h2" size="xl" mt={6} mb={2}>
          Transaction Completed Successfully
        </Heading>
        <Box>
          <Text color={"gray.500"}>Thank you for billing</Text>
        </Box>
      </Link>
    </Box>
  );
}
