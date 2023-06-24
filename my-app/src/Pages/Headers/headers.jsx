import { Box, Flex, Grid, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react';
import Slideshow from '../../components/Slideshow/Slideshow';

function Headers() {
  const [isMobile, setIsMobile] = useState(false);

  // Update isMobile state based on window width
  // Update is Mobile  jk handleResize = ()=>{

  // }
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  // Listen for window resize events
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
   <>
   <Box>
     <Heading
      textAlign={'center'}
      >
       Welcome to Iqra Learning Hub: Your Gateway to Knowledge and Growth! </Heading>
   </Box>
   {
          isMobile? (
            <Grid templateRows={'repeat, 1fr'}>
           <Slideshow />
          <Slideshow />
        </Grid>
          ) : 
          <Flex>
           <Slideshow />
          <Slideshow />
        </Flex>
        }
   </>
  )
}

export default Headers
