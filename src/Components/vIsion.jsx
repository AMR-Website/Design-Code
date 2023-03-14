import { ReactNode } from 'react';
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

function PriceWrapper({ children }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}>
      {children}
    </Box>
  );
}

export default function Vision() {
  return (
    <Box py={12}>
      
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl" _hover={{ textDecoration: 'none',color:"black" }}>
              Vision
            </Text>
            
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                To be the most admired global organisation  primarily mining  and also into Infrastructure, Irrigation and Energy sectors.

              </ListItem>
              
            </List>
            
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box position="relative">
           
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl" _hover={{ textDecoration: 'none',color:"black" }}>
                Mission
              </Text>
           
            </Box>
            <VStack
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}>
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  To emerge as one of the world leaders in the Mining sector and infrastructure by setting high standards of professionalism.

                </ListItem>
                
              </List>
              
            </VStack>
          </Box>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl" _hover={{ textDecoration: 'none',color:"black" }}>
              Values
            </Text>
           
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Enriching customer satisfaction value through Integrity, Excellence, Team Spirit and Responsibility.

              </ListItem>
             
            </List>
            
          </VStack>
        </PriceWrapper>
      </Stack>
    </Box>
  );
}