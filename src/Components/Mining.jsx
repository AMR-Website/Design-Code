import React, { useEffect } from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
  Button,
} from '@chakra-ui/react';
import AOS from "aos"
import MiningImg from '../Images/home/Mining.JPG'

const BlogTags= (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};



// export const BlogAuthor = (props) => {
//   return (
//     <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
//       <Image
//         borderRadius="full"
//         boxSize="40px"
//         src="https://100k-faces.glitch.me/random-image"
//         alt={`Avatar of ${props.name}`}
//       />
//       <Text fontWeight="medium">{props.name}</Text>
//       <Text>—</Text>
//       <Text>{props.date.toLocaleDateString()}</Text>
//     </HStack>
//   );
// };

const Mining = () => {
  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  })
  return (
    <Container maxW={'7xl'} p="12" data-aos="fade-up">
      <Heading as="h1">Our Service In Mining</Heading>
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius="lg"
                src={MiningImg}
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)'
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
          marginTop={{ base: '3', sm: '0' }}>
          {/* <BlogTags tags={['Engineering', 'Product']} /> */}
          <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              Mining
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="5"
            // color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg"
            color={"gray.500"}
            textAlign={'left'}>
           The mining division of AMR INDIA LIMITED has its core operations in mineral rich belt of India. Right from planning, designing, execution and till mine closure in the most possible environmentally sustainable manner. 
           AMR India Limited holds a leading position in the Indian mining industry for its superior mining techniques, equipment, flexibility in operations and systems with zero tolerance in safety and sustainability.
           The company has capability of dealing with most of core minerals including Coal, Limestone, Lignite, Manganese, Iron ore & Bauxite.

          </Text>
        </Box>

      </Box>
     <Box>
      <Link to="/mining">
     <Button
      rounded={"full"}
      size={"lg"}
      fontWeight={"normal"}
      px={6}
      colorScheme={"red"}
      bg={"red.400"}
      _hover={{ bg: "red.500" }}
      ml="50%"
     >Know More</Button>
</Link>
     </Box>
      <Divider marginTop="5" />
     
    </Container>
  );
};

export default Mining;