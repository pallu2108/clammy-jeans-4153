import { Box, Button, Center, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import "./HomePagemid.css";
import { Link } from "react-router-dom";

export default function HomePagemid(props) {
  let discount = Math.ceil(((props.mrp - props.price) * 100) / props.mrp);
  return (
    <Box maxW="23%" p={"10px 5px"} boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px">
      <Link to={`/single/${props._id}`}>
        <Center>
          <Image boxSize={"250px"} src={props.images[0]} alt="" />
        </Center>
        <Text textAlign={"left"} noOfLines={1}>
          {props.title}
        </Text>
        <Box textAlign={"right"}>
          <Box
            p={"2px 5px"}
            display={"inline"}
            bg={"green"}
            color="white"
            borderRadius={"5px"}
          >
            {props.rating}/5
            <i style={{ marginLeft: "3px" }}>★</i>
          </Box>
          <hr style={{ marginTop: "10px" }} />
        </Box>
        <Box style={{ display: "flex", justifyContent: "space-between" }}>
          <Heading
            size={{ base: "sm", md: "md", lg: "lg" }}
            fontWeight="600"
            color={"orange"}
          >
            ₹{props.price}
          </Heading>
          <Text color={"green"}>flat {discount}% OFF</Text>
        </Box>
      </Link>
    </Box>
  );
}
