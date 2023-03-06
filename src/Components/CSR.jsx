import { Box, Image, List, ListIcon, ListItem, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { MdCheckCircle } from 'react-icons/md'
import pic1 from '../Images/CSR/pic1.jpg'
import pic2 from '../Images/CSR/pic2.jpg'
import pic3 from '../Images/CSR/pic3.jpg'
import pic4 from '../Images/CSR/pic4.jpg'
import pic5 from '../Images/CSR/pic5.jpg'
import pic6 from '../Images/CSR/pic6.jpg'
import pic7 from '../Images/CSR/pic7.jpg'

const CSR = () => {


    return (
        <div>
            <Box>
                <Text fontSize="5xl" fontWeight="bold" color="red.500">CSR Activities</Text>


            </Box>


            <Box mt="60px">

            </Box>
            <Box w="95%" m="auto" style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", padding: "40px", borderRadius: "40px" }}>
                <SimpleGrid spacing={10} columns={{ base: 1, sm: 1, md: 1, lg: 2 }}>
                    <Box border="1px solid black" height='500px'>
                      <Image src={pic1} w={'100%'} h={'100%'}/>
                    </Box>
                    <Box border="1px solid black" height='500px' >
                        <Box mt="30px">
                            <List spacing={3} textAlign="left">
                                <ListItem fontSize='20px' fontWeight={"500"}>

                                    <ListIcon as={MdCheckCircle} color='green.500' h="30px" w="50px" />
                                    {/* <Text  fontSize="22px" fontFamily="sans-serif" fontWeight="" color=""  >  Lorem ipsum dolor sit amet, consectetur adipisicing elit</Text> */}

                                    Free Bus Service from Tadicherla to Koyyur
                                </ListItem>
                                <ListItem fontSize='20px' fontWeight={"500"}>
                                    <ListIcon as={MdCheckCircle} color='green.500' h="30px" w="50px" />
                                    Free bus for Class X students for attending Annual examination
                                </ListItem>
                                <ListItem fontSize='20px' fontWeight={"500"}>
                                    <ListIcon as={MdCheckCircle} color='green.500' h="30px" w="50px" />
                                    Primary Health Centre at Tadicherla Village
                                </ListItem >
                                {/* You can also use custom icons from react-icons */}
                                <ListItem fontSize='20px' fontWeight={"500"} >
                                    <ListIcon as={MdCheckCircle} color='green.500' h="30px" w="50px" />
                                    Drinking Water facilities to Peddatundla Villagers
                                </ListItem>
                                <ListItem fontSize='20px' fontWeight={"500"}>
                                    <ListIcon as={MdCheckCircle} color='green.500' h="30px" w="50px" />
                                    5 Borewells Pumps in Peddatundla village
                                </ListItem>
                                <ListItem fontSize='20px' fontWeight={"500"}>
                                    <ListIcon as={MdCheckCircle} color='green.500' h="30px" w="50px" />
                                    Repairs of Bore well Pumps in villages
                                </ListItem>
                                <ListItem fontSize='20px' fontWeight={"500"}>
                                    <ListIcon as={MdCheckCircle} color='green.500' h="30px" w="50px" />
                                    Organized Cricket tournament for Five villages
                                </ListItem>
                                <ListItem fontSize='20px' fontWeight={"500"}>
                                    <ListIcon as={MdCheckCircle} color='green.500' h="30px" w="50px" />
                                    Road laying works to the Satraj palli village
                                </ListItem>
                                <ListItem fontSize='20px' fontWeight={"500"}>
                                    <ListIcon as={MdCheckCircle} color='green.500' h="30px" w="50px" />
                                    Drinking water facilities at Madaram Jatara
                                </ListItem>


                            </List>

                        </Box>

                    </Box>

                </SimpleGrid>

            </Box>

            <Box mt='60px'></Box>

            <Box w="95%" m="auto" style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", padding: "50px", borderRadius: "40px" }}>
                <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 3 }} spacing={10}>
                    <Box border="1px solid red" height='300px'>
                        <Image w={'100%'} h={'100%'} src={pic2}/>
                    </Box>
                    <Box border="1px solid red" height='300px'>
                        <Image w={'100%'} h={'100%'} src={pic3}   />
                    </Box>
                    <Box border="1px solid red" height='300px'>
                        <Image w={'100%'} h={'100%'}  src={pic4} />
                    </Box>
                    <Box border="1px solid red" height='300px'>
                        <Image w={'100%'} h={'100%'}  src={pic5}  />
                    </Box>
                    <Box border="1px solid red" height='300px'>
                        <Image  src={pic6} w={'100%'} h={'100%'} />
                    </Box>
                    <Box border="1px solid red" height='300px'>
                        <Image src={pic7} w={'100%'} h={'100%'} />
                    </Box>
                  
                </SimpleGrid>


            </Box>


        </div>
    )
}

export default CSR