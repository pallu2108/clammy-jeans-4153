import React, { ChangeEvent, useEffect, useState } from "react";
import { getUsers } from "../features/users/userSlice";
import { useAppDispatch, useAppSelector } from "../features/hooks";
import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import loader from "../assets/loader.gif";
import Navbar from "../components/Navbar";

const AdminUsers = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((store) => store.userSlice);
  const auth = useAppSelector((store) => store.authSlice);
  console.log(auth);
  console.log(users);
  useEffect(() => {
    dispatch(getUsers({token: auth.token}));
  }, []);
  return (
    <Box>
      <Navbar />
      <Heading mb={"20px"}>Users</Heading>
      <Box>
        {users.users.map((user) => (
          <Heading fontSize={"18px"} mb={"10px"} key={user._id}>{user.email}</Heading>
        ))}
      </Box>
      {users.loading ? (
        <Flex
          w="100vw"
          h={"100vh"}
          mx={"auto"}
          align={"center"}
          justify={"center"}
          bg={"rgba(245,250,254,.5)"}
          backgroundBlendMode={"hard-light"}
          position={"absolute"}
          top={"0"}
          left={"0"}
        >
          <Image borderRadius={"50%"} src={loader} />
        </Flex>
      ) : null}
    </Box>
  );
};

export default AdminUsers;
