import React from 'react';
import {
  Box,
  chakra,
  Container,
  Text,
  HStack,
  VStack,
  Flex,
  useColorModeValue,
  useBreakpointValue
} from '@chakra-ui/react';

const milestones = [
  {
    id: 1,
    date: '1992',
    description: `Mr. A Mahesh Reddy started AMR Constructions Limited along with his brother Mr. Girish Reddy as a partnership firm enabling to carry out business.`
  },
  {
    id: 2,
    date: '1994',
    description: `Undertaken the business of mining with the operation of limestone mines owned by the cement  companies.
    `
  },
  {
    id: 3,
    date: '1995',
    description:
      'Initiated the activities civil works projects for Visakha Cements (India Cements Ltd.) and also executed civil works in Nepal.'
  }
  ,
  {
    id: 4,
    date: '1998',
    description:
      'constEntered into business of housing ruction.'
  }
  ,
  {
    id: 5,
    date: '2001',
    description:
      'Incorporated as a Public Limited Company.'
  }
  ,
  {
    id: 6,
    date: '2003',
    description:
      'Entered into mining ore project with its first awarded.'
  }
  ,
  {
    id: 7,
    date: '2005',
    description:
      'AMR acquires major irrigation project. Polavaram left canal package-5 .'
  } ,
  {
    id: 8,
    date: '2006',
    description:
      'Investment in FCDs by Private Equity(PE) investor (Tranche I). '
  } ,
  {
    id: 9,
    date: '2007',
    description:
      'Mr. A Mahesh Reddy received the Rashtriya Nirman Ratan Award Additional investment by the same PE investor (Tranche I I )Additional investment in FCDs by the same PE investor (Tranche I I I) Involved in coal mining since 2007.'
  } ,
  {
    id: 10,
    date: '2008',
    description:
      'Mr. A Girish Reddy receives the International Excellence Award for Construction Quality & Design'
  } ,
  {
    id: 11,
    date: '2009',
    description:
      'Achieved 240 Million Cubic Meter mining contracts.'
  } ,
  {
    id: 12,
    date: '2010',
    description:
      'AMR’s annual excavation capacity reached 65 M.Cum/annum.'
  } ,
  {
    id: 13,
    date: '2011',
    description:
      'AMRIL entered into an understanding with Adani for development of their Coal Blocks in India and overseas.'
  } ,
  {
    id: 13,
    date: '2011 March',
    description:
      'AMRIL executing the work of Mine planning for development and operation of Bunyu Opencast Project in Indonesia.'
  },
  {
    id: 14,
    date: '2017',
    description:
      'AMRIL Bagged its 1st MDO long term coal mine project i.e. Tadicherla mine Opencast Project. .'
  } ,
  {
    id: 15,
    date: '2020',
    description:
      'Bihar project Koshi canal project.'
  }
];

const Milestones = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Container maxWidth="7xl" p={{ base: 2, sm: 10 }}>
      <chakra.h3 color={'red'} fontSize="4xl" fontWeight="bold" mb={18} textAlign="center">
        Milestones
      </chakra.h3>
      {milestones.map((milestone) => (
        <Flex key={milestone.id} mb="10px">
          {/* Desktop view(left card) */}
          {isDesktop && milestone.id % 2 === 0 && (
            <>
              <EmptyCard />
              <LineWithDot />
              <Card {...milestone} />
            </>
          )}

          {/* Mobile view */}
          {isMobile && (
            <>
              <LineWithDot />
              <Card {...milestone} />
            </>
          )}

          {/* Desktop view(right card) */}
          {isDesktop && milestone.id % 2 !== 0 && (
            <>
              <Card {...milestone} />

              <LineWithDot />
              <EmptyCard />
            </>
          )}
        </Flex>
      ))}
    </Container>
  );
};



const Card = ({ id, title, description, date }) => {
  // For even id show card on left side
  // For odd id show card on right side
  const isEvenId = id % 2 == 0;
  let borderWidthValue = isEvenId ? '15px 15px 15px 0' : '15px 0 15px 15px';
  let leftValue = isEvenId ? '-15px' : 'unset';
  let rightValue = isEvenId ? 'unset' : '-15px';

  const isMobile = useBreakpointValue({ base: true, md: false });
  if (isMobile) {
    leftValue = '-15px';
    rightValue = 'unset';
    borderWidthValue = '15px 15px 15px 0';
  }

  return (
    <HStack
      flex={1}
      p={{ base: 3, sm: 6 }}
      bg={useColorModeValue('gray.100', 'gray.800')}
      spacing={5}
      rounded="lg"
      alignItems="center"
      pos="relative"
      _before={{
        content: `""`,
        w: '0',
        h: '0',
        borderColor: `transparent ${useColorModeValue('#edf2f6', '#1a202c')} transparent`,
        borderStyle: 'solid',
        borderWidth: borderWidthValue,
        position: 'absolute',
        left: leftValue,
        right: rightValue,
        display: 'block'
      }}
    >
      <Box>
        <Text fontSize="lg" color={isEvenId ? 'teal.400' : 'blue.400'}>
          {date}
        </Text>

        <VStack spacing={2} mb={3} textAlign="left">
          <chakra.h1 fontSize="2xl" lineHeight={1.2} fontWeight="bold" w="100%">
            {title}
          </chakra.h1>
          <Text fontSize="md">{description}</Text>
        </VStack>
      </Box>
    </HStack>
  );
};

const LineWithDot = () => {
  return (
    <Flex
      pos="relative"
      alignItems="center"
      mr={{ base: '40px', md: '40px' }}
      ml={{ base: '0', md: '40px' }}
    >
      <chakra.span
        position="absolute"
        left="50%"
        height="calc(100% + 10px)"
        border="1px solid"
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        top="0px"
      ></chakra.span>
      <Box pos="relative" p="10px">
        <Box
          pos="absolute"
          top="0"
          left="0"
          bottom="0"
          right="0"
          width="100%"
          height="100%"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          bg={useColorModeValue('gray.600', 'gray.200')}
          borderRadius="100px"
          backgroundImage="none"
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  );
};

const EmptyCard = () => {
  return <Box flex={{ base: 0, md: 1 }} p={{ base: 0, md: 6 }} bg="transparent"></Box>;
};

export default Milestones;