import { Box, Flex, Grid, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react';
import Slideshow from '../../components/Slideshow/Slideshow';
import Body from './Body';

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
   <Box mt={'5%'}>
      <Heading  textAlign={'center'}>
               Welcome to Iqra Learning Hub: Your Gateway to Knowledge and Growth! 
      </Heading>
   </Box>
        {
          isMobile? (
            <Box mt={'5%'}>
              <Grid templateRows={'repeat, 1fr'}>
              <Slideshow />
              <Slideshow />
            </Grid>
            </Box>
          ) : 
           <Box mt={'5%'}>
             <Flex>
                  <Slideshow />
                  <Slideshow />
            </Flex>
           </Box>
        }
        

   </>
  )
}

export default Headers


/*  hjks fk ksdh kjs kjhfsdi jksfd kjdfsh s jkfdshiu fskh sd kjh i fdskj sjkdsiu dsfkh kjdfsiu fsdj sd
sfkj sdjku dsk s kjdf khsf kjhidus  kj kjdsf kjds kj sdkj jkhfskj kj fds jkhjkds jkhsf 
 */