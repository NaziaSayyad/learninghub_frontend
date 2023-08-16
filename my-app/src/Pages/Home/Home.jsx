import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import Headers from '../Headers/headers'
import Body from '../Headers/Body'

function Home() {
  const images = [
    '1.jpeg',
    '4.jpg',
    '10.jpg',
    '11.jpg'

    // Add more image URLs as needed
  ];

  const interval = 5000; // 5 seconds
  
  return (
    <>
    <Headers />
    
    <Body
          images={images} interval={interval}
    />
    <Heading>  My  slideshow page </Heading>
    <Heading>  My  Page  </Heading>
    <Heading>  My  slideshow page </Heading>
    <Heading>  My  Page  </Heading>
    <Heading>  My  slideshow page </Heading>
    <Heading>  My  Page  </Heading>
    <Heading>  My  slideshow page </Heading>
    <Heading>  My  Page  </Heading>
    <Heading>  My  slideshow page </Heading>
    <Heading>  My  Page  </Heading>
    <Heading>  My  slideshow page </Heading>
    <Heading>  My  Page  </Heading>
    <Heading>  My  slideshow page </Heading>
    <Heading>  My  Page  </Heading>
    <Heading>  My  slideshow page </Heading>
    <Heading>  My  Page  </Heading>
    <Heading>  My  slideshow page </Heading>
    <Heading>  My  Page  </Heading>
    <Heading>  My  slideshow page </Heading>
    <Heading>  My  Page  </Heading>
    <Heading>  My  slideshow page </Heading>
    <Heading>  My  Page  </Heading>
    <Heading>  My  slideshow page </Heading>
    <Heading>  My  Page  </Heading>
    
    </>
  )
}
/*
      THis is the header function 
*/ 


export default Home
