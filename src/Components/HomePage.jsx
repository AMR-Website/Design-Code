import React, { useEffect } from 'react'
import {Box, Stack, Text} from "@chakra-ui/react"
import Header from './Header'
import Trail from './trail'
import Aboutus from './About-us'
import Mining from './Mining'
import Services from './services'
import AOS from "aos"
import "aos/dist/aos.css"
const HomePage = () => {

  useEffect(()=>{
   AOS.init({
    duration: 600,
 })
  },[])
  return (
    <>
        {/* <h1 > HomePage</h1> */}
        <div data-aos="fade-left">
         {/* <Header  /> */}
         <Header />
         </div>
<div data-aos="fade-left">
         <Aboutus />
         </div>

         <div data-aos="flip-left-up">
         <Mining />
         </div>

         <div data-aos="fade-up-right">
         <Services />
         </div>
       
    </>
  )
}

export default HomePage