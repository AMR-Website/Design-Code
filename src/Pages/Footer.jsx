import React from "react";
import {
  Box,
  Stack,
  Image,
  Center,
  Text,
  Link,
  Container,

  useColorModeValue,
} from "@chakra-ui/react";
import Logo from "../Images/Navbar/Navbar.png";
import {ImLocation,ImPhone,ImFacebook2,ImTwitter,ImLinkedin} from "react-icons/im"
import { FaHome } from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.700")} >
        <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: 10, md: 4, lg: 10 }}
            display="flex"
            justifyContent="center"
            alignItem={"center"}
          >
            <Box  width={"30%"}>
              <Image src={Logo} width={"60%"} margin="auto"/>
              <Text textAlign={"justify"}
      color={useColorModeValue("black")}
      fontSize={"20px"}

      mt="20px"
      >
                AMR Group is a fast growing business conglomerate with focus on
                business in core sectors such as Mining, Constructions,
                Infrastructure and Energy.{" "}
              </Text>
            </Box>
            <Box  width={"30%"} >
              <Text textAlign={"center"}
              mt="25px"
      color={useColorModeValue("orange.500")}
      fontSize={"25px"}>Office Address  </Text>
              <Box   width="40px" ml="90px" mt="-25px">
              <ImLocation  />
              </Box>
              <Text 
      color={useColorModeValue("black")}
      fontSize={"20px"}
      width="80%"
      margin="auto"
      mt="66px"
      textAlign="justify"
      >
                Saikrupa, D.No:8-3-833, Plot: 37 &38, Phase-1, Kamalapuri
                Colony, Hyderabad, Telangana 500073
              </Text>
            </Box>
            <Box  width={"20%"}
            // ml="-20px"
            // border="2px solid"
            >
          <Text textAlign={"left"}
      color={useColorModeValue("orange.500")}
      fontSize={"25px"} 
      ml="3px"
      // border="2px solid"
width="100%"
      mt="25px">Contact Information</Text>
          <Text textAlign={"center"}
            // border="2px solid"

      color={useColorModeValue("black")}
      fontSize={"20px"}
      width="200px"
      mb="12px" 
      mt="60px"
      // border="2px solid "
      ml="-3px"
      >  040-4757-0009</Text>
          <Text textAlign={"center"}

      color={useColorModeValue("black")}
      ml="-32px"
      fontSize={"20px"} >info@amrgroup.in</Text>
            </Box>
          <Box >
            <Box mt="50px">
            <Link href="www.facebook.com" >
            <ImFacebook2 />
            </Link>
            </Box>
          <Box mt="30px">
            <Link href="" >
              <ImTwitter />
            </Link>
            </Box>
          <Box mt="30px">

            <Link href="" >
              <ImLinkedin />
            </Link>
            </Box>

          </Box>
          </Stack>
        </Container>
      </Box>
      {/* <Image src={Logo} /> */}
    </>
  );
}
