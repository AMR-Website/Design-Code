import React from 'react';
import { Box, Badge, SimpleGrid, Container, Image, Link, Text, Divider, Heading } from '@chakra-ui/react';
import C1 from "../Images/Certificates/C1.jpg"
import C2 from "../Images/Certificates/C2.jpg"
import C3 from "../Images/Certificates/C3.jpg"
import C4 from "../Images/Certificates/C4.png"

import { SettingsIcon, WarningTwoIcon } from '@chakra-ui/icons';
const dataList = [
  {
    id: 1,
    title: 'ENVIRONMENTAL HEALTH AND SAFETY POLICY ',
    // authorName: '84',
    Image : C1,

  },
  {
    id: 2,
    title: 'QUALITY POLICY ',
    // authorName: '38',
    Image : C2,

  },
  {
    id: 3,
    title: 'CERTIFICATE OF COMPLIANCE ',
    Image : C3,
  }
  ,
  {
    id: 4,
    title: 'CSR POLICY ',
    Image : C4,
  }
 
];

const Certificates = () => {
  return (

    
    <Container maxWidth="1200px" mx="auto" my="auto" p={{ base: 5, md: 10 }}>
    <Box textAlign="center" py={10} px={6}>
      <SettingsIcon boxSize={'50px'} color={'orange.300'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
      Certificates
      </Heading>
      <Text color={'gray.500'}>

      </Text>
    </Box>
      <SimpleGrid columns={[1, 2]} spacing="15px">
        {dataList.map((blog) => {
          return (
            <Box position="relative" key={blog.id}>
              
              <Link to="#">
                <Box
                  borderWidth="1px"
                  shadow="md"
                  rounded="lg"
                  overflow="hidden"
                  position="relative"
                  mt={'100px'}
                >
                  <Image src={blog.Image} alt="Blog image" />
                  <Box p={{ base: 4, lg: 6 }}>
                    <Box d="flex" alignItems="baseline">
                      <Box
                        fontWeight="semibold"
                        as="h2"
                        letterSpacing="wide"
                        textTransform="uppercase"
                        ml="2"
                      >
                        {blog.title}
                      </Box>
                    </Box>
                    <Box>
                      <Box color="gray.600" fontSize="xl">
                        <Badge rounded="half" fontSize={'18px'} px="20" colorScheme="teal" mt={'15px'}>
                          {blog.authorName}
                        </Badge>
                      </Box>
                    </Box>
                    <Text
                      mt="1"
                      fontWeight="semibold"
                      noOfLines={3}
                      lineHeight="tight"
                      color="gray.600"
                      fontSize="sm"
                    >
                      {blog.content}
                    </Text>
                  </Box>
                </Box>
              </Link>
            </Box>
          );
        })}
      </SimpleGrid>
    </Container>
  );
};

export default Certificates;