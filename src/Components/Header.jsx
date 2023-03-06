import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import BG from "../Images/home/bg.avif"
import SideImage from "../Images/home/SideImage.png"
export default function Header() {
  return (
    <>
      <Box border={'2px'} height='60vh' borderColor={'black'} gap='30px' bg={'whiteAlpha.300'} display="flex" justifyContent={'center'} alignItems='center'>
    <Box border={'2px'} borderColor={'black'} width="30%" height={'auto'}></Box>
            
       
    <Box border={'2px'} borderColor={'black'} width="30%" height={'auto'}>

        <Image src={SideImage}  />
    </Box>
      </Box>
    </>
  )
}
