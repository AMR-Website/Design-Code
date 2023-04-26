import {
  Box,
  Center,
  Grid,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import p1 from "../Images/Clients/p1.png";
import p2 from "../Images/Clients/p2.png";
import p3 from "../Images/Clients/p3.png";
import p4 from "../Images/Clients/p4.png";
import p5 from "../Images/Clients/p5.png";
import p6 from "../Images/Clients/p6.png";
import p7 from "../Images/Clients/p7.png";
import p8 from "../Images/Clients/p8.jpg";
import p9 from "../Images/Clients/p9.jpg";
import p10 from "../Images/Clients/p10.jpg";
import { SettingsIcon } from "@chakra-ui/icons";
function Clients() {
  return (
    <div marginBottom="30px" >
       <Box textAlign="center" py={10} px={6}>
      <SettingsIcon boxSize={'50px'} color={'orange.300'} />
      <Heading as="h2" size="xl" mt={6} mb={2} color="red.400">
    Our Clients
      </Heading>
     
    </Box>
      <Center>
        <SimpleGrid mt="80px" width="90%" height="50vh"  boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px' columns={5} spacing={16} mb={'50px'}>

          <Box width="120px" height="120px" mt={"40px"}>
            <Image src={p1} w="100%" h="100%" />
          </Box>
          <Box width="120px" height="120px" mt={"40px"}>
            <Image src={p2}  w="100%" h="100%"/>
          </Box>
          <Box width="120px" height="120px" mt={"40px"}>
            <Image src={p3} w="100%" h="100%" />
          </Box>
          <Box width="120px" height="120px" mt={"40px"}>
            <Image src={p4} w="100%" h="100%" />
          </Box>
          <Box width="120px" height="120px" mt={"40px"}>
            <Image src={p5} w="100%" h="100%"/>
          </Box>
          <Box width="120px" height="120px" mt={"40px"}>
            <Image src={p6}  w="100%" h="100%"/>
          </Box>
          <Box width="120px" height="120px" mt={"40px"}>
            <Image src={p7} w="100%" h="100%" />
          </Box>
          <Box width="120px" height="120px" mt={"40px"}>
            <Image src={p8}  w="100%" h="100%" />
          </Box>
          <Box width="120px" height="120px" mt={"40px"}>
            <Image src={p9} w="100%" h="100%" />
          </Box>
          <Box width="120px" height="120px" mt={"40px"}>
            <Image src={p10} w="100%" h="100%" />
          </Box>
        </SimpleGrid>
      </Center>
    </div>
  );
}

export default Clients;
