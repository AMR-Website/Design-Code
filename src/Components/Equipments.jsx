import React from 'react';
import { Box, Badge, SimpleGrid, Container, Image, Link, Text, Divider, Heading } from '@chakra-ui/react';
import Image1 from "../Images/Equipments/Picture1.jpg"
import Image2 from "../Images/Equipments/Picture2.jpg"
import Image3 from "../Images/Equipments/Picture3.jpg"
import Image4 from "../Images/Equipments/Picture4.jpg"
import Image5 from "../Images/Equipments/Picture5.jpg"
import Image6 from "../Images/Equipments/Picture6.jpg"
import Image7 from "../Images/Equipments/Picture7.jpg"
import { SettingsIcon, WarningTwoIcon } from '@chakra-ui/icons';
const dataList = [
  {
    id: 1,
    title: 'EXCAVATORS ',
    authorName: '84',
    Image : Image1,

  },
  {
    id: 2,
    title: 'DUMPTRUCKS ',
    authorName: '38',
    Image : Image2,

  },
  {
    id: 3,
    title: 'TIPPERS ',
    authorName: '204',
    Image : Image3,
  }
  ,
  {
    id: 4,
    title: 'DOZERS ',
    authorName: '33',
    Image : Image4,
  },
  {
    id: 5,
    title: 'GRADERS ',
    authorName: '09',
    Image : Image5,
  },
  {
    id: 6,
    title: 'LOADERS ',
    authorName: '04',
    Image : Image6,
  }
  ,
  {
    id: 7,
    title: 'COMPACTORS ',
    authorName: '19',
    Image : Image7,
  }
];

const Equipement = () => {
  return (

    
    <Container maxWidth="1200px" mx="auto" my="auto" p={{ base: 5, md: 10 }}>
    <Box textAlign="center" py={10} px={6}>
      <SettingsIcon boxSize={'50px'} color={'orange.300'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
      EQUIPMENTS
      </Heading>
      <Text color={'gray.500'}>
      We equipped with full fleet of  heavy earthmoving equipment to full fill our requirement of Mining /Irrigation/Highways  and hydropower projects.

      </Text>
    </Box>
      <SimpleGrid columns={[1, 2, 3]} spacing="15px">
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

export default Equipement;