import React from 'react'
import {
    Avatar,
    Box,
    chakra,
    Container,
    Flex,
    Icon,
    List,
    ListIcon,
    ListItem,
    SimpleGrid,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { MdSettings, MdCheckCircle } from 'react-icons/md'
import Md  from '../Images/Directors/md.jpg'
import Mallesh  from '../Images/Directors/Mallesh.jpg'
import Satta  from '../Images/Directors/Mr.K.Satta Reddy.jpg'
import radhikamma  from '../Images/Directors/Radhikaamma.png'
import sub  from '../Images/Directors/Subbarami.jpg'



const testimonials = [
    {
        name: 'Mr. A Mahesh Kumar Reddy',
        role: 'Managing Director',
        content:
            "Mr. A Mahesh Kumar Reddy, having completed his graduation from Dharward University, started the career with “AAN Constructions “, a well known contractors, established by his father Mr. A. Audinarayana Reddy and thus gained decent exposure in the construction industry. Having acquired the technical and administrative capabilities, he floated an independent firm, along with his brother Mr. A. Girish Reddy, a qualified Civil Engineer, for the execution of various civil works by name and style of AMR CONSTRUCTIONS in the year 1992. Since its inception, the firm has been proved as a leader in the construction and mining contracting arena due to his acumen. By 1995, under the leadership of Mr. A. Mahesh Kumar Reddy, the firm entered into various segments of civil works in the construction industry and executed various prominent projects in India & Nepal and as well forayed in to coal and lime stone mining contracts. Mr. A. Mahesh Kumar Reddy besides being an able administrator also possess impeccable marketing skills with immense personnel relationship and great understanding of human values.",
        avatar: Md,
    },
    {
        name: 'Mrs. A. Radhika Reddy',
        role: 'Director',
        content:
            "Mrs. A. Radhika Reddy, belongs to Promoters group and she is on the Board as Director since 16.03.2015.",
        avatar:radhikamma,
    },
    {
        name: 'Mr. B. Subbarami Reddy',
        role: 'Executive Director',
        content:
            "Mr. B. Subbarami Reddy, Executive Director: He is a Post Graduate in Science from Sri Venkateswara University. He was earlier with Andhra Bank and thus have banking experience of 30 years. He has joined AMR India Limited in the year 2007 as Vice President ( Finance and Administration) and elevated as Executive Director on the Board of the Company on 4 th June, 2022.",
        avatar:
            sub,
    },
    {
        name: 'Mr. K. Satha Reddy',
        role: 'Independent Director',
        content:
            'Mr. Satha Reddy Keesara, B.E., has retired as Superintending Engineer, Irrigation Department, Andhra Pradesh, after having served in various Irrigation projects in erstwhile Andhra Pradesh state such as Sriram sagar Project, Lower Manair dam Karimnagar, Somasila Project and Srisailam Left Bank Canal. He retired as Superintending Engineer in Designs, Quality Control and Dam Safety Cell. Post retirement, he worked as adviser for GVPR Infra, Hyderabad, Hyderabad Engineers Syndicate for Paidipalem Project, Cuddapah, MVPR infrastructure Limited, Hyderabad for HUBLI water supply scheme and acted as analyst of expenditure for Chincholi Sugars, Karnataka. He was appointed on 15.06.2017 as one of the Independent Directors on the Board.',
        avatar:Satta,
    },
    {
        name: 'Mr. Mallesh Madasi',
        role: 'Independent Director',
        content:
            'He is a graduate in Mining Engineering from Osmania University and holder of First Class Mines Manager Certificate awarded by Directorate General of Mines Safety (DGMS). He has worked at Singareni Collieries Company Limited (SCCL) in various capacities from Under Manager to Chief General Manager and retired in the year 2020 as Chief General Manager, Chief of Safety. He has work experience of over 35 years at SCCL. He is appointed on the Board on 4 th June, 2022 as an Independent Director of the Company.',
        avatar:Mallesh ,
    },
];

const backgrounds = [
    `url("data:image/svg+xml, %3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'560\' height=\'185\' viewBox=\'0 0 560 185\' fill=\'none\'%3E%3Cellipse cx=\'102.633\' cy=\'61.0737\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23ED64A6\' /%3E%3Cellipse cx=\'399.573\' cy=\'123.926\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23F56565\' /%3E%3Cellipse cx=\'366.192\' cy=\'73.2292\' rx=\'193.808\' ry=\'73.2292\' fill=\'%2338B2AC\' /%3E%3Cellipse cx=\'222.705\' cy=\'110.585\' rx=\'193.808\' ry=\'73.2292\' fill=\'%23ED8936\' /%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ED8936'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%2348BB78'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%230BC5EA'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%23ED64A6'/%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='%23ED8936'/%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='%2348BB78'/%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='%230BC5EA'/%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='%23ED64A6'/%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ECC94B'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%239F7AEA'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%234299E1'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%2348BB78'/%3E%3C/svg%3E")`,
];

// interface TestimonialCardProps {
//     name: string;
//     role: string;
//     content: string;
//     avatar: string;
//     index: number;
// }

const Director = () => {


    return (
        <Box>
            <Flex
                textAlign={'center'}
                pt={10}
                justifyContent={'center'}
                direction={'column'}
                // border="1px solid red"
                overflow={'hidden'}>
                <Box width={{ base: '100%', sm: 'lg', lg: 'xl' }} margin={'auto'}>
                    <chakra.h3
                        fontFamily={'Work Sans'}
                        fontWeight={'bold'}
                        fontSize={20}
                        textTransform={'uppercase'}
                        color={'purple.400'}>

                    </chakra.h3>
                    <chakra.h1
                        py={5}
                        fontSize={48}
                        fontFamily={'Work Sans'}
                        fontWeight={'bold'}
                        color={useColorModeValue('gray.700', 'gray.50')}>
                        Board Of Director
                    </chakra.h1>
                    <chakra.h2
                        margin={'auto'}
                        width={'70%'}
                        fontFamily={''}
                        fontSize="16px"
                        fontWeight={'medium'}
                        color={useColorModeValue('gray.500', 'gray.400')}>
                        See why over{' '}
                        <chakra.strong color={useColorModeValue('gray.700', 'gray.50')}>
                            150,000+
                        </chakra.strong>{' '}
                        contracter use AMR to in Mining of iron ores [includes mining of hematite, magnetite, limonite, siderite or taconite etc
                    </chakra.h2>
                </Box>
                <SimpleGrid
                    columns={{ base: 1, xl: 1 }}
                    spacing={'20'}
                    mt={16}
                    mb={16}
                    mx={'auto'}>

                    {testimonials.map((cardInfo, index) => (
                        <TestimonialCard {...cardInfo} index={index} />
                    ))}


                </SimpleGrid>

            </Flex>

            <Box mt="30px" border="1px solid white" h="auto"  boxshadow=" rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px">
                <Box >
                    <Text fontSize="38px" fontFamily="heading" fontWeight="bold" color="red.500">CORE TEAM</Text>

                    <div style={{ backgroundColor: "teal", width: "50%", margin: "auto", height: "1px" }} ></div>


                </Box>

                <Box w="90%" textAlign="left" margin="auto">
                    <Text mt="20px" fontSize="28px" fontFamily="sans-serif" fontWeight="" color="" lineHeight={'10'} >Our core team has in depth knowledge in Industrial construction, Mining and Irrigation sectors. The company has specialists with multiple competencies in Conceptualization, Planning, Designing, Executing and Delivering sustainable services to its clients. Central to our client’s prosperity and AMR India Limited’s success are, forwardthinking of top management, engineers, architects, planners, drafters, project managers, and support staff. They embrace values that have sustained the company since inception in its Excellence, Integrity, Accountability, Understanding and Responsibility</Text>
                </Box>


                <Box mt='60px' w="100%" >
                    <Text fontSize="38px" fontFamily="heading" fontWeight="bold" color="red.500">CORE EXECUTIVE TEAM</Text>

                    {/* <div style={{ backgroundColor: "teal", width: "60%", margin: "auto", height: "1px" }} ></div> */}
                    <Box mt="30px">
                        <Box textAlign='left' w="90%" margin="auto" padding="25px">
                            <List spacing={3} >
                                <ListItem fontSize='28px'>

                                    <ListIcon as={MdCheckCircle} color='green.500' h="40px" w="70px" />
                                    {/* <Text  fontSize="22px" fontFamily="sans-serif" fontWeight="" color=""  >  Lorem ipsum dolor sit amet, consectetur adipisicing elit</Text> */}

                                    Mr A. Mahesh Kumar Reddy Chairman & Managing Director
                                </ListItem>
                                <ListItem fontSize='28px'>
                                    <ListIcon as={MdCheckCircle} color='green.500' h="40px" w="70px" />
                                    Mr B. Subbarami Reddy Executive Director
                                </ListItem>
                                <ListItem fontSize='28px'>
                                    <ListIcon as={MdCheckCircle} color='green.500' h="40px" w="70px" />
                                    Mr Syed Aliuddin Ahmed Irfan Chief Operating Officer
                                </ListItem >
                                {/* You can also use custom icons from react-icons */}
                                <ListItem fontSize='28px'>
                                    <ListIcon as={MdCheckCircle} color='green.500' h="40px" w="70px" />
                                    Mr S B Ravindra Chief Financial Officer
                                </ListItem>
                                <ListItem fontSize='28px'>
                                    <ListIcon as={MdCheckCircle} color='green.500' h="40px" w="70px" />
                                    Mr D Viswanadha Raju Vice President-Mining
                                </ListItem>
                                <ListItem fontSize='28px'>
                                    <ListIcon as={MdCheckCircle} color='green.500' h="40px" w="70px" />
                                    Mr. A. Prabhakar Reddy, Vice President –Mining
                                </ListItem>
                                <ListItem fontSize='28px'>
                                    <ListIcon as={MdCheckCircle} color='green.500' h="40px" w="70px" />
                                    Mr. N Durga Prasad, Vice president – Mining 
                                </ListItem>
                                <ListItem fontSize='28px'>
                                    <ListIcon as={MdCheckCircle} color='green.500' h="40px" w="70px" />
                                    Mr Krishna Reddy, Executive Director- Business Development 
                                </ListItem>
                                <ListItem fontSize='28px'>
                                    <ListIcon as={MdCheckCircle} color='green.500' h="40px" w="70px" />
                                    Mr G Venkata Raman, Company Secretary
                                </ListItem>
                            </List>
                        </Box>
                    </Box>

                </Box>


            </Box>

            <Box mt="40px">
            <Text fontSize="38px" fontFamily="heading" fontWeight="bold" color="red.500">SUPPORTING TEAM</Text>
            <div style={{ backgroundColor: "teal", width: "100%", margin: "auto", height: "1px" }} ></div>
            </Box>

            <Box mt='40px' w="100%" className='MiningTeam' >
                    <Text fontSize="38px" fontFamily="heading" fontWeight="bold" color="red.500"> Mining Team</Text>

                    {/* <div style={{ backgroundColor: "teal", width: "60%", margin: "auto", height: "1px" }} ></div> */}
                    <Box mt="20px" boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px" >
                        <Box textAlign='left' w="90%" margin="auto" padding="25px">
                            <List spacing={3} >
                                <ListItem fontSize='28px'>

                                    <ListIcon as={MdCheckCircle} color='green.500' h="40px" w="70px" />
                                    {/* <Text  fontSize="22px" fontFamily="sans-serif" fontWeight="" color=""  >  Lorem ipsum dolor sit amet, consectetur adipisicing elit</Text> */}

                                    Mr. N. Durga Prasad, Vice President (BD)
                                </ListItem>
                                <ListItem fontSize='28px'>
                                    <ListIcon as={MdCheckCircle} color='green.500' h="40px" w="70px" />
                                    Mr. T. Sridhar, Vice President 
                                </ListItem>
                                <ListItem fontSize='28px'>
                                    <ListIcon as={MdCheckCircle} color='green.500' h="40px" w="70px" />
                                    Mr. G. Venkateswarlu, Sr. General Manager 
                                </ListItem >
                                {/* You can also use custom icons from react-icons */}
                                <ListItem fontSize='28px'>
                                    <ListIcon as={MdCheckCircle} color='green.500' h="40px" w="70px" />
                                    Mr. V. Chandra Mouli, Sr.General Manager 
                                </ListItem>
                                <ListItem fontSize='28px'>
                                    <ListIcon as={MdCheckCircle} color='green.500' h="40px" w="70px" />
                                    Mr. K.S.N. Murthy, General Manager
                                </ListItem>
                                <ListItem fontSize='28px'>
                                    <ListIcon as={MdCheckCircle} color='green.500' h="40px" w="70px" />
                                    Mr. A. Rama Chandra Murthy, Advisor
                                </ListItem>
                                <ListItem fontSize='28px'>
                                    <ListIcon as={MdCheckCircle} color='green.500' h="40px" w="70px" />
                                    Mr. S. Ravinder, Advisor
                                </ListItem>
                                
                            </List>
                        </Box>
                    </Box>

                </Box>





                {/* ////////////// */}

                <Box mt='60px' w="100%" className='MiningTeam'>
                    <Text fontSize="38px" fontFamily="heading" fontWeight="bold" color="red.500">Infrastructure Team</Text>

                    {/* <div style={{ backgroundColor: "teal", width: "60%", margin: "auto", height: "1px" }} ></div> */}
                    <Box mt="30px" boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px">
                        <Box textAlign='left' w="90%" margin="auto" padding="25px">
                            <List spacing={3} >
                                <ListItem fontSize='28px'>

                                    <ListIcon as={MdCheckCircle} color='green.500' h="40px" w="70px" />
                                    {/* <Text  fontSize="22px" fontFamily="sans-serif" fontWeight="" color=""  >  Lorem ipsum dolor sit amet, consectetur adipisicing elit</Text> */}

                                    Mr. A.K. Jha, Sr. Vice President 
                                </ListItem>
                                <ListItem fontSize='28px'>
                                    <ListIcon as={MdCheckCircle} color='green.500' h="40px" w="70px" />
                                    Mr. S.V.S. Naidu, Vice President
                                </ListItem>
                                <ListItem fontSize='28px'>
                                    <ListIcon as={MdCheckCircle} color='green.500' h="40px" w="70px" />
                                    Mr. V. Ravi Prasad, Project Head
                                </ListItem >
                                {/* You can also use custom icons from react-icons */}
                                <ListItem fontSize='28px'>
                                    <ListIcon as={MdCheckCircle} color='green.500' h="40px" w="70px" />
                                    Mr. Mahesh G Badagi, General Manager 
                                </ListItem>
                                <ListItem fontSize='28px'>
                                    <ListIcon as={MdCheckCircle} color='green.500' h="40px" w="70px" />
                                    Mr. Mantha Srinivas, General Manager
                                </ListItem>
                               
                                
                            </List>
                        </Box>
                    </Box>

                </Box>


                {/* ///////////////// */}

                <Box mt='60px' w="100%" className='MiningTeam'>
                    <Text fontSize="38px" fontFamily="heading" fontWeight="bold" color="red.500">Finance Team</Text>

                    {/* <div style={{ backgroundColor: "teal", width: "60%", margin: "auto", height: "1px" }} ></div> */}
                    <Box mt="30px" boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px">
                        <Box textAlign='left' w="90%" margin="auto" padding="25px">
                            <List spacing={3} >
                                <ListItem fontSize='28px'>

                                    <ListIcon as={MdCheckCircle} color='green.500' h="40px" w="70px" />
                                    {/* <Text  fontSize="22px" fontFamily="sans-serif" fontWeight="" color=""  >  Lorem ipsum dolor sit amet, consectetur adipisicing elit</Text> */}

                                    Mr. G.V.K. Sitaramaiah, Sr. General Manager
                                </ListItem>
                                <ListItem fontSize='28px'>
                                    <ListIcon as={MdCheckCircle} color='green.500' h="40px" w="70px" />
                                    Mr. Ramesh Sriramagiri, General Manager
                                </ListItem>
                                <ListItem fontSize='28px'>
                                    <ListIcon as={MdCheckCircle} color='green.500' h="40px" w="70px" />
                                    Mr. P Siva Nageswar Rao, General Manager
                                </ListItem >
                                {/* You can also use custom icons from react-icons */}
                                <ListItem fontSize='28px'>
                                    <ListIcon as={MdCheckCircle} color='green.500' h="40px" w="70px" />
                                    Mr. Asis Kumar Maiti, General Manager
                                </ListItem>
                                
                                
                            </List>
                        </Box>
                    </Box>

                </Box>

                {/* //////////////// */}

                <Box mt='60px' w="100%" className='MiningTeam'>
                    <Text fontSize="38px" fontFamily="heading" fontWeight="bold" color="red.500"> Plant & Machinery Team</Text>

                    {/* <div style={{ backgroundColor: "teal", width: "60%", margin: "auto", height: "1px" }} ></div> */}
                    <Box mt="30px" boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px">
                        <Box textAlign='left' w="90%" margin="auto" padding="25px">
                            <List spacing={3} >
                                <ListItem fontSize='28px'>

                                    <ListIcon as={MdCheckCircle} color='green.500' h="40px" w="70px" />
                                    {/* <Text  fontSize="22px" fontFamily="sans-serif" fontWeight="" color=""  >  Lorem ipsum dolor sit amet, consectetur adipisicing elit</Text> */}

                                    Mr. S. Srinivas Reddy, Head (P & M)
                                </ListItem>
                                
                                
                            </List>
                        </Box>
                    </Box>

                </Box>

        </Box>
    );
}






function TestimonialCard(props) {
    const { name, role, content, avatar, index } = props;

    return (
        <Flex
            boxShadow={'lg'}
            maxW={'80%'}
            m="auto"
            direction={{ base: 'column-reverse', md: 'row' }}
            width={'full'}
            rounded={'xl'}
            p={10}
            justifyContent={'space-between'}
            position={'relative'}
            bg={useColorModeValue('white', 'gray.800')}
            _after={{
                content: '""',
                position: 'absolute',
                height: '21px',
                width: '29px',
                left: '35px',
                top: '-10px',
                backgroundSize: 'cover',
                backgroundImage: `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='21' viewBox='0 0 29 21' fill='none'%3E%3Cpath d='M6.91391 21C4.56659 21 2.81678 20.2152 1.66446 18.6455C0.55482 17.0758 0 15.2515 0 13.1727C0 11.2636 0.405445 9.43939 1.21634 7.7C2.0699 5.91818 3.15821 4.3697 4.48124 3.05454C5.84695 1.69697 7.31935 0.678787 8.89845 0L13.3157 3.24545C11.5659 3.96667 9.98676 4.94242 8.57837 6.17273C7.21266 7.36061 6.25239 8.63333 5.69757 9.99091L6.01766 10.1818C6.27373 10.0121 6.55114 9.88485 6.84989 9.8C7.19132 9.71515 7.63944 9.67273 8.19426 9.67273C9.34658 9.67273 10.4776 10.097 11.5872 10.9455C12.7395 11.7939 13.3157 13.1091 13.3157 14.8909C13.3157 16.8848 12.6542 18.4121 11.3311 19.4727C10.0508 20.4909 8.57837 21 6.91391 21ZM22.5982 21C20.2509 21 18.5011 20.2152 17.3488 18.6455C16.2391 17.0758 15.6843 15.2515 15.6843 13.1727C15.6843 11.2636 16.0898 9.43939 16.9007 7.7C17.7542 5.91818 18.8425 4.3697 20.1656 3.05454C21.5313 1.69697 23.0037 0.678787 24.5828 0L29 3.24545C27.2502 3.96667 25.6711 4.94242 24.2627 6.17273C22.897 7.36061 21.9367 8.63333 21.3819 9.99091L21.702 10.1818C21.9581 10.0121 22.2355 9.88485 22.5342 9.8C22.8756 9.71515 23.3238 9.67273 23.8786 9.67273C25.0309 9.67273 26.1619 10.097 27.2715 10.9455C28.4238 11.7939 29 13.1091 29 14.8909C29 16.8848 28.3385 18.4121 27.0155 19.4727C25.7351 20.4909 24.2627 21 22.5982 21Z' fill='%239F7AEA'/%3E%3C/svg%3E")`,
            }}
            _before={{
                content: '""',
                position: 'absolute',
                zIndex: '-1',
                height: 'full',
                maxW: '640px',
                width: 'full',
                filter: 'blur(40px)',
                transform: 'scale(0.98)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                top: 0,
                left: 0,
                backgroundImage: backgrounds[index % 4],
            }}>
            <Flex
                direction={'column'}
                textAlign={'left'}
                justifyContent={'space-between'}>
                <chakra.p
                    fontFamily={""}
                    fontWeight={'medium'}
                    fontSize={'20px'}
                    pb={4}>
                    {content}
                </chakra.p>
                <chakra.p color={'purple.500'} fontFamily={"heading"} fontWeight={'bold'} fontSize={18}>
                    {name}
                    <chakra.span
                        fontFamily={"heading"}
                        fontWeight={'bold'}
                        fontSize={18}
                        color={'red.500'}>
                        {' '}
                        - {role}
                    </chakra.span>
                </chakra.p>
            </Flex>
            <Avatar
                src={avatar}
                height={'250px'}
                width={'220px'}
                alignSelf={'center'}
                m={{ base: '0 0 35px 0', md: '0 0 0 50px' }}
            />
        </Flex>
    );
}





export default Director