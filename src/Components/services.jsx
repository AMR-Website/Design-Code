import { ReactNode } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} colo  r={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>                                                                                                                                            
    </Flex>
  );
};

export default function Services() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading>What we do</Heading>
          <Text>
            AMR Group is a fast growing business conglomerate with focus on
            business in core sectors such as Mining, Constructions,
            Infrastructure and Energy.{" "}
          </Text>

        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Mining</TestimonialHeading>
              <TestimonialText>
                AMR India Limited has annual mining capacity of over 65 million
                cubic meters.
              </TestimonialText>
              <Link to="/mining">
     <Button
     width={'130px'}
      rounded={"full"}
      size={"lg"}
      fontWeight={"normal"}
      px={6}
      colorScheme={"red"}
      bg={"red.400"}
      _hover={{ bg: "red.500" }}
      ml="0%"
height='30px'

     >Know More</Button>
</Link>
            </TestimonialContent>
           
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Construction</TestimonialHeading>
              <TestimonialText>
                In construction, AMR India Limited is engaged in Industrial
                Buildings, Housing projects, Roads and other related Infra
                works.
              </TestimonialText>
              <Link to="/construction">
     <Button
      rounded={"full"}
     width={'130px'}

      size={"lg"}
      fontWeight={"normal"}
      px={6}
      colorScheme={"red"}
      bg={"red.400"}
      _hover={{ bg: "red.500" }}
      ml="0%"
height='30px'

     >Know More</Button>
</Link>
            </TestimonialContent>
            
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Infrastructure</TestimonialHeading>
              <TestimonialText>
                AMR India Limited is equipped with the requisite expertise and
                wide-ranging experience to undertake its projects on EPC,
                turnkey basis .
              </TestimonialText> <Link to="/irrigation">
     <Button
      rounded={"full"}
     width={'130px'}
height='30px'
      size={"lg"}
      fontWeight={"normal"}
      px={6}
      colorScheme={"red"}
      bg={"red.400"}
      _hover={{ bg: "red.500" }}
      ml="0%"
     >Know More</Button>
</Link>
            </TestimonialContent>
            
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
