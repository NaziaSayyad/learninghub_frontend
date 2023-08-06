import React, { useState } from 'react';
import { Box,  Image } from '@chakra-ui/react';
import { useEffect } from 'react';

const images = [
    'slide-2.jpg',
    'slide-3.jpg',
    'slide-4.jpg',
    'slide-5.jpeg'
  // Add more image URLs here
];

const Slideshow = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, 5000);
  
      return () => clearInterval(interval);
    }, []);
  
    const nextImage = () => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    };
  
    const previousImage = () => {
      setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
    };
  
    return (
     <>
     <Box 
      maxWidth="600px"
      mx="auto" 
      position="relative"
       m={'10'}
       >
        {images.map((imageUrl, index) => (
          <Image
            // width={'100%'}
            // height={'550px'}
            key={index}
            src={imageUrl}
            alt={`Slide ${index + 1}`}
            borderRadius="md"
            boxShadow="md"
            position={index === currentImage ? 'static' : 'absolute'}
            top="0"
            left="0"
            right="0"
            bottom="0"
            opacity={index === currentImage ? 1 : 0}
            transition="opacity 0.3s ease-in-out"
          />
        ))}
        <Box display="flex" justifyContent="center" mt="4">
          <Box as="button" onClick={previousImage} mx="2" fontWeight="bold" fontSize="lg">
            {" < "}
          </Box>
          <Box as="button" onClick={nextImage} mx="2" fontWeight="bold" fontSize="lg">
           {" > "}
          </Box>
        </Box>
      </Box>
     
     </> 
  );
};
export default Slideshow;