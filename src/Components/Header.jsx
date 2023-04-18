import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import bg from '../Images/Slider/Picture2 (2).jpg'
import bg2 from '../Images/Slider/Picture2.jpg'
import '../CSS/Header.css'
// import bg2 from './Picture2.jpg'
import { Box, Button, Image, Img, Stack, Text } from '@chakra-ui/react'
function Header() {
  const [AllImage,setImages] = useState(0)
  const [allImages,setAllImages] = useState([bg2,bg])
  const [id, setId] = useState(null)


  useEffect(() => {
    start()
    AOS.init({duration:1000})

  }, [])


  const start = () => {
    console.log('start')
    const _start = setInterval(() => {
      setImages(AllImage => AllImage < 1 ? AllImage + 1 : 0)
    }, 4000)
    setId(_start)
  }


  const stop = () => {
    console.log('stop')
    clearInterval(id)
  }

  return (
    <div style={{marginTop:"30px",width:"100%"}}>
         {/* <img src={allImages[Image]} alt="" /> */}
    <div className='slider_mini_conatainer' style={{width:"100%"}}>
         <Image
       opacity={'2'}
        width={'100%'}
        height='100%'
        onMouseOut={() => start()}
        onMouseOver={() => stop()}
        src={allImages[AllImage]} /> <br />
        </div>
      
              <div className='Welcome_Note_section'>
               <Text className='welcome_note'>Welcome TO AMR Group</Text> 
                 <Text className='welcome_note2'  color='white' fontSize={'1.5xl'} as='b'>Empowering progress through responsible excavation of the earth's riches."</Text>
                 </div>
    </div>
  )
}

export default Header
