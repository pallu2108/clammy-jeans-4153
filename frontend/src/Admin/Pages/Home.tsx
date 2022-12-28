import { Box, Flex, Heading } from '@chakra-ui/react'
import React, {useEffect} from 'react'
import Navbar from '../components/Navbar'
import { useAppDispatch, useAppSelector } from "../features/hooks";
import { getProducts } from "../features/products/productSlice";
import { getUsers } from "../features/users/userSlice";

const AdminHome = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((store) => store.userSlice);
  const products = useAppSelector((store) => store.productSlice);
  const auth = useAppSelector((store) => store.authSlice);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  useEffect(() => {
    dispatch(getUsers({token: auth.token}));
  }, []);
  return (
    <Box>
      <Navbar />
      <Box height="1000px">
        <Heading>Admin Home</Heading>
        <Box>
          <Flex>
            <Heading>Total Products:-</Heading>
            <Heading ml={"20px"}>{products.products.length}</Heading>
          </Flex>
        </Box>
        <Box>
          <Flex>
            <Heading>Total Users:-</Heading>
            <Heading ml={"20px"}>{users.users.length}</Heading>
          </Flex>
        </Box>
        </Box>
      </Box>
  )
}

export default AdminHome