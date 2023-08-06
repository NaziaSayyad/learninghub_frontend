import { Box, Image } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useEffect } from 'react';
import Fade from "react-reveal/Fade"

function Body({images, interval}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const timer = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, interval);
  
      return () => clearTimeout(timer);
    }, [currentIndex, images.length, interval]);
  
    return (
     <Fade bottom>
       <Box border={'5px solid red'}>
        <Image 
        width={'100%'}
        height={'550px'}
        src={images[currentIndex]} alt="Slideshow Image" />
  
        {/* Render additional components or styles for the slideshow here */}
      </Box>
     </Fade>
    );
}

export default Body
