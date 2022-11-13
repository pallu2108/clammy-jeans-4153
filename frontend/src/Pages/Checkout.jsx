import React from "react";
import truelogo from "../Images/truelogo.png";
import { Link } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  Text,
  Button,
  useDisclosure,
  Image,
  Box,
  Spacer,
  Flex,
  Input,
  Checkbox,
} from "@chakra-ui/react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
// import img_1 from "../Images/img_1.png"

const car = [
  "cash on Delivery",
  "Credit/Debit Card",
  "Net Banking",
  "EMI",
  "UPI",
  "Paytm",
  "Simple Pay",
];
const Checkout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Navbar />
      <Box border={"black"} w="100%" h="1000px">
        <Flex pt="50px" border={"black"} gap="80px" pl="100px" pr="100px">
          {/* box 1  */}
          <Box h="900px" w="48%" textAlign={"left"}>
            <Box>
              <Text fontSize="sm" fontWeight={"bold"}>
                Your Email & Phone Number
              </Text>
            </Box>
            <Box pl="5px" mt="10px">
              <Text fontSize="xs" fontWeight={"bold"}>
                Email Address
              </Text>

              <Text fontSize="md">pallavi@gmail.com</Text>
            </Box>
            <Box pl="5px" mt="10px">
              <Text fontSize="xs" fontWeight={"bold"}>
                Phone Number
              </Text>

              <Input pl="5px" pr="5px" placeholder="Phone Number" />
              <br />
              <Box mt="15px">
                <Checkbox colorScheme="orange">
                  <Text fontSize="xs">
                    I agree to be cantacted through Whatsapp for Order Updates
                  </Text>
                </Checkbox>
              </Box>
            </Box>
            <Box mt="25px">
              <Text mt="10px" fontSize="sm" fontWeight={"bold"}>
                Delivery Address
              </Text>
              <Box pl="5px" pr="5px" mt="10px">
                <Text fontSize="xs" fontWeight={"bold"}>
                  Name
                </Text>

                <Input placeholder="Name" />
                <Flex gap="10px" mt="10px">
                  <Box w="50%" mt="10px">
                    <Text fontSize="xs" fontWeight={"bold"}>
                      Address 1
                    </Text>
                    <Input placeholder="Address 1" />
                  </Box>
                  <Box w="50%" mt="10px">
                    <Text fontSize="xs" fontWeight={"bold"}>
                      Address 2
                    </Text>
                    <Input placeholder="Address 2" />
                  </Box>
                </Flex>
                <br />
                <Flex gap="10px" mt="5px">
                  <Box w="50%">
                    <Text fontSize="xs" fontWeight={"bold"}>
                      State
                    </Text>
                    <Input placeholder="Add State" />
                  </Box>
                  <Box w="50%">
                    <Text fontSize="xs" fontWeight={"bold"}>
                      City
                    </Text>
                    <Input placeholder="City" />
                  </Box>
                </Flex>
                <br />
                <Flex gap="10px" mt="5px">
                  <Box w="50%">
                    <Text fontSize="xs" fontWeight={"bold"}>
                      Country
                    </Text>
                    <Input placeholder="India" />
                  </Box>
                  <Box w="50%">
                    <Text fontSize="xs" fontWeight={"bold"}>
                      Pin Code
                    </Text>
                    <Input placeholder="Pin Code" />
                  </Box>
                </Flex>
              </Box>
            </Box>

            <Box mt="10px">
              <Text fontSize="sm" fontWeight={"bold"}>
                Payment Details
              </Text>
              <Checkbox colorScheme="orange">
                <Text fontSize="xs">Same as Shipping Address</Text>
              </Checkbox>
            </Box>

            <Box mt="20px">
              <Text fontSize="sm" fontWeight={"bold"}>
                Payment Details
              </Text>
              <Image
                pl="20px"
                w="1000px"
                src="https://d64lkarmo2mrq.cloudfront.net/icons/paysymbols_paypage.png"
              ></Image>
              <Flex w="90%" pl="29px" pr="20px" gap="20px">
                {car.map((ele) => {
                  return (
                    <Box w="80px">
                      <Text fontSize="xs" fontWeight={"bold"}>
                        {ele}
                      </Text>
                    </Box>
                  );
                })}
              </Flex>
            </Box>

            <Box>
              <Box>
                <Text pl="50px" mt="40px" fontSize="xs">
                  3 interest free payment of Re 2199.24 with simpl!
                </Text>
              </Box>

              <Button
                onClick={onOpen}
                ml="20px"
                mt="20px"
                w="90%"
                bg="orange"
                color={"white"}
              >
                PAY NOW!
              </Button>
              {/* <Button onClick={onOpen}>Open Modal</Button> */}

              <Modal
                blockScrollOnMount={false}
                isOpen={isOpen}
                onClose={onClose}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>
                    <Image w="200px" h="50px" src={truelogo}></Image>
                  </ModalHeader>
                  <Box>
                    <ModalCloseButton />
                  </Box>
                  <Box>
                    <Text pl="20px" fontSize={"sm"} fontWeight="bold">
                      Add New Card
                    </Text>
                  </Box>
                  <Box>
                    <Flex>
                      <Text mt="50px" pl="50px" fontSize={"sm"}>
                        Card Number
                      </Text>
                      <Spacer />
                      <Text mt="50px" pr="80px" fontSize={"sm"}>
                        Exp
                      </Text>
                    </Flex>
                    <Flex>
                      <Input
                        ml="20px"
                        w="150px"
                        fontSize={"xs"}
                        placeholder="Card Number"
                      />

                      <Spacer />
                      <Input
                        w="150px"
                        mr="20px"
                        fontSize={"sm"}
                        placeholder="Exp"
                      />
                    </Flex>
                  </Box>
                  <Box>
                    <Flex mt="30px">
                      <Text pl="50px" fontSize={"sm"}>
                        Your Name
                      </Text>
                      <Spacer />
                      <Text pr="80px" fontSize={"sm"}>
                        CVV
                      </Text>
                    </Flex>
                    <Flex>
                      <Input
                        ml="20px"
                        w="150px"
                        fontSize={"xs"}
                        placeholder="Card Holder Name"
                      />

                      <Spacer />
                      <Input
                        w="150px"
                        mr="20px"
                        fontSize={"sm"}
                        placeholder="CVV"
                      />
                    </Flex>
                  </Box>

                  <Box pl="20px" mt="20px">
                    <Checkbox colorScheme="orange">
                      <Text fontSize={"sm"}>
                        {" "}
                        Save card securely for future payment
                      </Text>
                    </Checkbox>
                  </Box>

                  {/* <ModalBody>
      <Box>
        <Text fontSize={"lg"} fontWeight="bold">
           Add New Card
        </Text>
      </Box>
      
    </ModalBody> */}

                  <ModalFooter>
                    <Link to="/success">
                      <Button
                        w="100%"
                        colorScheme="orange"
                        mr={3}
                        onClick={onClose}
                      >
                        Pay Rs 2,199.00
                      </Button>
                    </Link>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Box>
          </Box>

          {/* box-2  */}
          <Box textAlign={"left"} h="900px" w="48%">
            <Box
              w="100%"
              h="90px"
              textAlign={"left"}
              border={"1px solid black"}
            >
              <Text fontSize="xs" pt="5px" pl="10px" fontWeight={"bold"}>
                {" "}
                Car LED Makeup Mirror
              </Text>
              <Text fontSize="xs" pl="10px" pt="5px">
                <span color="orange">Delivery Date:</span> December 9, 2022
              </Text>
              <Text fontSize="xs" pl="10px" pt="5px">
                <span color="orange">Price:</span> Rs 2,199.00
              </Text>
            </Box>
            <Text fontSize="lg" pb="5px" pl="10px" pt="20px">
              Edit Cart
            </Text>
            <hr />
            <Box
              w="500px"
              mt="10px"
              borderRadius={"20px 20px 20px 20px "}
              bg="#fff7f2"
              h="50px"
              border={"1px solid black"}
              textAlign={"center"}
              color="orange"
            >
              <Text color={"orange"} pt="10px">
                {" "}
                Congratulations! You have saved Rs 7,800.00
              </Text>
            </Box>

            <Box mt="50px">
              <Flex gap="80px">
                <Box w="200px">
                  <Text fontSize="sm" pl="10px" pt="5px">
                    Sub Total
                  </Text>
                </Box>

                <Box>
                  <Text fontSize="sm" pl="10px" pt="5px">
                    Rs 2,199.00/-
                  </Text>
                </Box>
              </Flex>
              <Flex gap="80px">
                <Box w="200px">
                  <Text fontSize="sm" pl="10px" pt="5px">
                    Shipping Fees
                  </Text>
                </Box>

                <Box>
                  <Text fontSize="sm" pl="10px" pt="5px">
                    Shipping Free
                  </Text>
                </Box>
              </Flex>
              <Flex gap="80px">
                <Box w="200px">
                  <Text fontSize="sm" pl="10px" pt="5px">
                    Custom/Import Dutties, Taxes
                  </Text>
                </Box>

                <Box>
                  <Text fontSize="sm" pl="10px" pt="5px" color={"red"}>
                    Not Applicable!
                  </Text>
                </Box>
              </Flex>
            </Box>
            <Box mt="20px">
              <Box>
                <Text fontSize="sm" pl="10px" pt="5px">
                  Got a Promotional Code? Use below
                </Text>
              </Box>
              <Box>
                <Flex>
                  <Input
                    mt="5px"
                    ml="10px"
                    w="300px"
                    placeholder="Promotional Code"
                  />{" "}
                  <Button color={"white"} bg="orange" mt="5px">
                    Apply Code
                  </Button>
                </Flex>
              </Box>
              <Box mt="20px" mb="20px">
                <hr />
              </Box>
            </Box>
            <Box>
              <Flex gap="80px">
                <Box w="200px">
                  <Text
                    color={"orange"}
                    fontSize="lg"
                    fontWeight={"bold"}
                    pl="10px"
                    pt="5px"
                  >
                    Grand Total
                  </Text>
                </Box>

                <Box>
                  <Text
                    fontSize="lg"
                    fontWeight={"bold"}
                    pl="10px"
                    pt="5px"
                    color={"orange"}
                  >
                    Rs 2,199.00
                  </Text>
                </Box>
              </Flex>
              <br />
              <Text fontSize="lg" pl="10px" color={"gray"}>
                Or 3 interest free payments if Rs733.00 with simpl
              </Text>
              <br />
              <br />
              <Text fontSize="xs" pl="10px">
                Get up to Rs500.00 OFF on your First Time Prepaid Order with
                coupon PREPAID
              </Text>
            </Box>

            <Box mt="30px" pl="160px">
              <Link to="/">
                <Image maxW={"150px"} src={truelogo} alt="" />
              </Link>
            </Box>

            <Box mt="10px" textAlign={"center"}>
              <Text fontSize="xl" color={"gray.600"} fontWeight={"bold"}>
                Our Shop. Your Price
              </Text>
              <Text fontSize="xs" color={"gray.600"} fontWeight={"bold"}>
                online Shopping Redefined
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
};

export default Checkout;
