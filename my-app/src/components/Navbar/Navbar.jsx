import { Box, Button, Flex, IconButton, Image, Link, Spacer, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react';
import {HamburgerIcon, CloseIcon} from "@chakra-ui/icons";

// import {} from "react-router-dom";

function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile, setIsMobile] = useState(false);

  // Update isMobile state based on window width
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
     <Box bg="#92229C" color= "black" py={4}>
      <Flex maxW="container.xl" mx="auto" px={4} alignItems="center">
      <Link
          href="/"
          fontSize="xl  "
          fontWeight="bold"
          color="white"
          _hover={{ color: 'black' }}
        >

         <Image src='new-logo.png'
         color='white'
            w={'50px'}
            mr={'1'}
         />
        </Link>
        <Link
          href="/"
          fontSize="xl  "
          fontWeight="bold"
          color="white"
          _hover={{ color: 'black' }}
        >

          Iqra Learning Hub 
        </Link>
        <Spacer />
        {isMobile ? (
          <>
            <IconButton
              aria-label="Toggle Menu"
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              onClick={isOpen ? onClose : onOpen}
              colorScheme="white"
              size="md"
              mr={2}
              display="block"
            />
            {isOpen && (
              <Box
                mt={4}
                p={4}
                bg="gray.700"
                w="full"
                rounded="md"
                boxShadow="md"
              >
                <Link
                  href="/"
                  color="white"
                  display="block"
                  my={4}
                  _hover={{ color: 'black' }}
                >
                  Home
                </Link>
                <Link
                  href="/courses"
                  color="white"
                  display="block"
                  my={4}
                  _hover={{ color: 'black' }}
                >
                  Courses 
                </Link>
                <Link
                  href="/about"
                  color="white"
                  display="block"
                  my={4}
                  _hover={{ color: 'black' }}
                >
                  About 
                </Link>
                <Link
                  href="/contact"
                  color="white"
                  display="block"
                  my={4}
                  _hover={{ color: 'black' }}
                >
                  Contact
                </Link>
              </Box>
            )}
          </>
        ) : (
          <Box>
            <Link
              href="/"
              color="white"
              ml={4}
              _hover={{ color: 'black' }}
            >
              Home
            </Link>
            <Link
              href="/courses"
              color="white"
              ml={4}
              _hover={{ color: 'black' }}
            >
             Courses 
            </Link>
            <Link
              href="/about"
              color="white"
              ml={4}
              _hover={{ color: 'black' }}
            >
             About 
            </Link>
            <Link
              href="/contact"
              color="white"
              ml={4}
              _hover={{ color: 'black' }}
            >
              Contact
            </Link>
          </Box>
        )}
      </Flex>
    </Box>


   </>
  )
}

// It h jh hjhj hkj kh kjhu jh

// jhj jhg kjj kjhk kj hkj kjkj  
/*  
  sometime i don't understand what should i do what not .. kuch log esse hote hain jo apko confuse kr dete hain
  smjh hi nhi aata ki kyaa kahun mein unse .. 

*/
/*  
  sometime i don't understand what should i do what not .. kuch log esse hote hain jo apko confuse kr dete hain
  smjh hi nhi aata ki kyaa kahun mein unse .. 

*/
export default Navbar