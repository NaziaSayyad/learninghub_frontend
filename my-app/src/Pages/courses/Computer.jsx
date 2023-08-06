import { Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

function Computer() {
  return (
    <> 
    <Heading> Computer Basic  </Heading>
    <Image 
      src={'computer_Basic.jpg'}
    />
    <Text> 
      Computer Basic Programe is a course of duration 6months
    </Text>
    <Heading> Computer Advance Course </Heading>
    <Image  
        src={'computer_Basic.jpg'}
    />
    <Text> It contains different courses such as HTML, CSS , JavaScript  </Text>
    
    </>
  )
}

export default Computer
