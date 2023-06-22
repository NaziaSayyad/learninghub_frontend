import { Box, Button, Flex, IconButton, Image, Link, Spacer, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react';
import {HamburgerIcon, CloseIcon} from "@chakra-ui/icons";

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
     <Box bg="gray.800" py={4}>
      <Flex maxW="container.xl" mx="auto" px={4} alignItems="center">
        <Link
          href="/"
          fontSize="xl"
          fontWeight="bold"
          color="white"
          _hover={{ color: 'gray.300' }}
        >
          Your Logo
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
                  my={2}
                  _hover={{ color: 'gray.300' }}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  color="white"
                  display="block"
                  my={2}
                  _hover={{ color: 'gray.300' }}
                >
                  About
                </Link>
                <Link
                  href="/services"
                  color="white"
                  display="block"
                  my={2}
                  _hover={{ color: 'gray.300' }}
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  color="white"
                  display="block"
                  my={2}
                  _hover={{ color: 'gray.300' }}
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
              _hover={{ color: 'gray.300' }}
            >
              Home
            </Link>
            <Link
              href="/about"
              color="white"
              ml={4}
              _hover={{ color: 'gray.300' }}
            >
              About
            </Link>
            <Link
              href="/services"
              color="white"
              ml={4}
              _hover={{ color: 'gray.300' }}
            >
              Services
            </Link>
            <Link
              href="/contact"
              color="white"
              ml={4}
              _hover={{ color: 'gray.300' }}
            >
              Contact
            </Link>
          </Box>
        )}
      </Flex>
    </Box>
{/*     
    <Box border={'5px solid red'}>
    <Flex>
      <Image 
     src ='logo.jpeg'
     height='150px'
     m={'2%'}
     w={'200px'}
     />
     <Box justifyContent={'flex-start'}>
          
             <Button>  Home </Button>
             <Button> Courses  </Button>
             <Button>  About </Button>
             <Button>  Contact</Button>
          
           
     </Box>
    </Flex>
   </Box> */}

   </>
  )
}

export default Navbar
