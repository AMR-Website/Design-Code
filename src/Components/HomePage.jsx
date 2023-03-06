import React from 'react'
import {Box, Stack, Text} from "@chakra-ui/react"
import Header from './Header'
import Trail from './trail'
import Aboutus from './About-us'
import Mining from './Mining'
import Services from './services'

const HomePage = () => {
  return (
    <>
        {/* <h1 > HomePage</h1> */}
        <Box>
         {/* <Header  /> */}
         <Trail />
         <Aboutus />
         <Mining />
         <Services />
         </Box>
       
    </>
  )
}

export default HomePage