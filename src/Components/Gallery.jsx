import React from 'react';
import { Box, Badge, SimpleGrid, Container, Image, Link, Text, Divider, Heading } from '@chakra-ui/react';
import Image1 from "../Images/Gallery/Bus -01.JPG"
import Image2 from "../Images/Gallery/Cat Dumper - 01.JPG"
import Image3 from "../Images/Gallery/Cat Dumper - 02.JPG"
import Image4 from "../Images/Gallery/Cat Dumper - 03.JPG"
import Image5 from "../Images/Gallery/Cat Dumper - 04.JPG"
import Image6 from "../Images/Gallery/Cat Dumper - 05.jpg"
import Image7 from "../Images/Gallery/Cat Dumper - 06.jpg"
import Image8 from "../Images/Gallery/Cat Dumper - 07.jpg"
import Image9 from "../Images/Gallery/CHP-01.JPG"
import Image10 from "../Images/Gallery/Coal Dispatch Vehicle.jpg"
import Image11 from "../Images/Gallery/Dozer-01.jpg"
import Image12 from "../Images/Gallery/Drilling Mechine.JPG"
import { SettingsIcon, WarningTwoIcon } from '@chakra-ui/icons';
const dataList = [
  {
    id: 1,
   
    Image : Image1,

  },
  {
    id: 2,
    
    Image : Image2,

  },
  {
    id: 3,
  
    Image : Image3,
  }
  ,
  {
    id: 4,
   
    Image : Image4,
  },
  {
    id: 5,
    
    Image : Image5,
  },
  {
    id: 6,
   
    Image : Image6,
  }
  ,
  {
    id: 7,
   
    Image : Image7,
  },
  {
    id: 8,
   
    Image : Image8,
  },
  {
    id: 9,
   
    Image : Image9,
  },
  {
    id: 10,
   
    Image : Image10,
  },
  {
    id: 11,
   
    Image : Image11,
  },
  {
    id: 12,
   
    Image : Image12,
  }
];

const Gallery = () => {
  return (

    
    <Container maxWidth="1200px" mx="auto" my="auto" p={{ base: 5, md: 10 }}>
    <Box textAlign="center" py={10} px={6}>
      <SettingsIcon boxSize={'50px'} color={'orange.300'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
      Gallery
      </Heading>
     
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

export default Gallery;