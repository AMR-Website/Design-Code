import { Box, Divider, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import Milestones from './Milestone'
import Vision from './vIsion'

const MissionPage = () => {
  return (
    <Box>
      <Stack  textAlign='left' ml={'30px'} marginTop='60px'>
        <Text fontSize={"3xl"} as='b' color={'Black'} _hover={{ textDecoration: 'none', color:"lightGrey" }}>
          About us
        </Text>
        <Divider marginTop='-20px' width={'100px'} height='7px' bg='red' fontSize='30px'/>

      </Stack>
      <Vision />
       <Milestones />
         

    </Box>
  )
}

export default MissionPage