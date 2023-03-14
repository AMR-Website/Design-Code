import React from "react";
import {
  Link,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  Container,
  VStack,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
} from "@chakra-ui/react";

import I1 from "../Images/Construction/Image1.jpg";

import I2 from "../Images/Construction/Image2.JPG";
import { MdCheckCircle } from "react-icons/md";
const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

export const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const Construction = () => {
  return (
    <Container maxW={"7xl"} p="12">
      <Heading
        color={"red"}
        _hover={{ color: "orange", textDecoration: "none" }}
        as="h1"
      >
        Our Construction Service
      </Heading>
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: "100%", sm: "85%" }}
            zIndex="2"
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop="5%"
          >
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Image
                borderRadius="lg"
                src={I1}
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                "radial(orange.600 1px, transparent 1px)",
                "radial(orange.300 1px, transparent 1px)"
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
        >
          <Heading marginTop="1">
            <Link
              color={"green"}
              textDecoration="none"
              _hover={{ color: "orange", textDecoration: "none" }}
            >
              Construction
            </Link>
          </Heading>
          <Text
            as="b"
            textAlign={"left"}
            marginTop="6"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            In construction, AMR India Limited is engaged in Industrial
            Buildings, Housing projects, Roads and other related Infra works.
            AMR India Limited is engaged in civil engineering contracts and has
            executed various civil work projects in India and Nepal. AMR India
            Limited’s clientele includes Government, Quasi Government and
            reputed Indian Companies and Corporations.
          </Text>
        </Box>
      </Box>

      {/* <Divider marginTop="5" /> */}
      <Wrap spacing="30px" marginTop="5"></Wrap>
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Text as="b" fontSize="lg"></Text>
      </VStack>

      <Stack
      
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
        width='100%'
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <List gap={8}>
            <ListItem fontSize="28px" textAlign={'left'}  width='110%'>
              <Text fontSize={"15px"} color="black" as={"b"}>
                {" "}
                <ListIcon
                  as={MdCheckCircle}
                  color="green.500"
                  h="30px"
                  w="50px"
                />{" "}
                AMR India Limited is into civil engineering contracts

              </Text>
            </ListItem>
            <ListItem fontSize="28px" textAlign={'left'} >
              <Text fontSize={"15px"} color="black" as={"b"}>
                {" "}
                <ListIcon
                  as={MdCheckCircle}
                  color="green.500"
                  h="30px"
                  w="50px"
                />{" "}
                The company has executed a number of civil works in India and Nepal

              </Text>
            </ListItem>
            <ListItem fontSize="28px" textAlign={'left'}  width='120%' >
              <Text fontSize={"15px"} color="black" as={"b"} >
                {" "}
                <ListIcon
                  as={MdCheckCircle}
                  color="green.500"
                  h="30px"
                  w="50px"
                />{" "}
                The clien tele includes Government, Quasi Government and esteemed Indian Corporates


              </Text>
            </ListItem>

            <ListItem width={'140%'} fontSize="28px" textAlign={'left'} >
            <ListIcon
                  as={MdCheckCircle}
                  color="green.500"
                  h="30px"
                  w="50px"
                />
              <Text fontSize={"15px"} color="black" as={"b"} textAlign="left" width={'100%'}>
              
                Industrial Buildings, Site Grading and related Infra works, Construction of housing projects, roads   etc.,


              </Text>
            </ListItem>


            <ListItem fontSize="28px" textAlign={'left'} >
              <Text fontSize={"15px"} color="black" as={"b"}>
                {" "}
                <ListIcon
                  as={MdCheckCircle}
                  color="green.500"
                  h="30px"
                  w="50px"
                />{" "}
                Feasibility study, pre- engineering


              </Text>
            </ListItem>

            <ListItem fontSize="28px" textAlign={'left'} >
              <Text fontSize={"15px"} color="black" as={"b"}>
                {" "}
                <ListIcon
                  as={MdCheckCircle}
                  color="green.500"
                  h="30px"
                  w="50px"
                />{" "}
                Engineering and design


              </Text>
            </ListItem>


            <ListItem fontSize="28px" textAlign={'left'} width='140%'>
            <ListIcon
                  as={MdCheckCircle}
                  color="green.500"
                  h="30px"
                  w="50px"
                />
              <Text fontSize={"15px"} color="black" as={"b"} textAlign='left'>
                
                
                Complete civil and structural services for all types of buildings and infrastructure projects.


              </Text>
            </ListItem>

           
          </List>
          
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"40%"}
        >
          <Box
          ml='150px'

            position={"relative"}
            height={"300px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"60%"}
            overflow={"hidden"}
          >
            <IconButton
              aria-label={"Play Button"}
              variant={"ghost"}
              _hover={{ bg: "transparent" }}
              size={"lg"}
              color={"white"}
              position={"absolute"}
              left={"50%"}
              top={"50%"}
              transform={"translateX(-50%) translateY(-50%)"}
            />
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={I2}
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
};

export default Construction;
