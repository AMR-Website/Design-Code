import React, { useEffect } from "react";
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
  useColorModeValue,
} from "@chakra-ui/react";
import AOS from "aos"
import "aos/dist/aos.css"
import {} from "@chakra-ui/react";
import I1 from "../Images/Mining/Image1.jpg";
import I2 from "../Images/Mining/Image2.JPG";
const BlogTags = (props) => {
  useEffect(()=>{
    AOS.init({
      duration:"600"
    })
  })
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

const MiningPage = () => {
  return (
        
    <Container maxW={"7xl"} p="12" >
      <Heading             _hover={{ color:"orange", textDecoration: "none" }}
 as="h1">Our Mining Service</Heading>
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
              textDecoration="none"
              _hover={{ color: "orange", textDecoration: "none" }}
            >
              Mining
            </Link>
          </Heading>
          <Text
            as="b"
            textAlign={"left"}
            marginTop="6"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            The mining division of AMR INDIA LIMITED has its core operations in
            mineral rich belt of INDIA. Right from planning, designing,
            execution and till mine closure in the most possible environmentally
            sustainable manner. The company has capability of dealing with most
            of core minerals including Coal, Limestone, Lignite, Manganese, Iron
            ore & Bauxite.
          </Text>
        </Box>
      </Box>

      {/* <Divider marginTop="5" /> */}
      <Wrap spacing="30px" marginTop="5">
        
      </Wrap>
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Text as="b" fontSize="lg">
         
        </Text>
      </VStack>


      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          
          <Text color={'black'} as='b'  textAlign={'left'}>
          AMR India Limited has annual mining capacity of over 65 million cubic
          meters. Mining operations are mechanized adapting to the
          state-of-the-art technology and equipment. Flexibility in operations
          enables the division to maximize the utilization of resources as well
          as to cater to the needs of diverse customer segments. AMR India
          Limited’s roadmap includes exploring further mine acquisitions and
          leveraging upon both Greenfield and brownfield opportunities.
          Furthermore, to capitalize on the wealth of experience and expertise,
          garnered in the mining sector. Plans to venture into Coal
          gasification, Coal bed methane are on the anvil.
          </Text>
         
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
       
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>
            <IconButton
              aria-label={'Play Button'}
              variant={'ghost'}
              _hover={{ bg: 'transparent' }}
            
              size={'lg'}
              color={'white'}
              position={'absolute'}
              left={'50%'}
              top={'50%'}
              transform={'translateX(-50%) translateY(-50%)'}
            />
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={I2 }
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
};



export default MiningPage;
