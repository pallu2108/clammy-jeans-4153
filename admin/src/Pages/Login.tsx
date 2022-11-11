import React, { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../features/hooks";
import { login } from "../features/auth/authSlice";
import loader from "../assets/loader.gif"
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Box,
  Button,
  Checkbox,
  Flex,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

type credsProp = {
  email: string;
  password: string;
};

const Login = () => {
  const isAuth = useAppSelector((store) => store.authSlice.isAuth);
  const Auth = useAppSelector((store) => store.authSlice);
  console.log(Auth);
  const [loginCreds, setLoginCreds] = useState<credsProp>({
    email: "",
    password: "",
  });
  const [changeType, setChangeType] = useState<boolean>(false);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const hanldeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if(loginCreds.password.length>=8){
    //   setPasslen(true)
    dispatch(login(loginCreds));
    // }else{
    //   setPasslen(false)
    // }
  };
console.log(isAuth)
  const prevnavigate = () => {
    navigate("/");
  };

  useEffect(() => {
    if (isAuth) {
      prevnavigate();
    }
  }, [isAuth]);

  return (
    <Box>
    <form onSubmit={handleSubmit}>
      <FormLabel>Log In</FormLabel>
      <Stack direction="column">
        <Input
          variant="outline"
          name="email"
          type="email"
          borderRadius="none"
          placeholder="Enter email"
          onChange={hanldeChange}
          required
        />
        <StackDivider />
        <InputGroup borderRadius={"7px"}>
          <Input
            variant="outline"
            name="password"
            type={changeType ? "text" : "password"}
            borderRadius="none"
            placeholder="Enter password"
            onChange={hanldeChange}
            required
          />
          {/* <InputRightAddon _hover={{cursor:"pointer"}} children={<AiFillEye />}  onClick={()=>setChangeType(!changeType)}/> */}
        </InputGroup>
        <StackDivider />
        <Flex justifyContent="space-between" fontSize="xs">
          <Flex>
            <Checkbox />
            <Text marginLeft=".5rem">Stay logged in</Text>
          </Flex>
          <Box>
            <Text
              color="#03a9f4"
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Forgot password?
            </Text>
          </Box>
        </Flex>
        <StackDivider />
        <Button
          type="submit"
          color="white"
          borderRadius="0"
          bgColor="#03a9f4"
          _hover={{ bg: "#0482bb" }}
        >
          Login
        </Button>
        <StackDivider />
        <StackDivider />

        <h3
          style={{
            width: "100%",
            textAlign: "center",
            borderBottom: "1px solid black",
            lineHeight: "1px",
          }}
        >
          <span
            style={{
              background: "#fff",
              fontSize: ".95rem",
              padding: "0 .4rem",
            }}
          >
            OR
          </span>
        </h3>
        <StackDivider />
        <StackDivider />
        {/* <Button leftIcon={<FcGoogle />} color="gray" borderRadius="none" bgColor="white" border="1px solid gray" _hover={{ bg: '#d4dbdd' }} > Continue with Google</Button> */}

        {Auth.error ? (
          <Box w="100%">
            <Alert status="error">
              {/* <AlertIcon /> */}
              <AlertTitle>Unauthorized</AlertTitle>
              <AlertDescription>
                You are not authorized to the website. Please contact admin
              </AlertDescription>
            </Alert>
          </Box>
        ) : null}

        {Auth.isAuth ? (
          <Box w="100%">
            <Alert status="success">
              {/* <AlertIcon /> */}
              <AlertTitle> Success</AlertTitle>
              <AlertDescription>Logged in Successfully</AlertDescription>
            </Alert>
          </Box>
        ) : null}
      </Stack>
    </form>
    {Auth.loading?
      <Flex w="100vw" h={"100vh"} mx={"auto"} align={"center"} justify={"center"} bg={"rgba(245,250,254,.5)"} backgroundBlendMode={"hard-light"} position={"absolute"} top={"0"} left={"0"}>
          <Image borderRadius={"50%"} src={loader} />
      </Flex>:null}
    </Box>
  );
};

export default Login;
