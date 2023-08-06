import { Button, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import styles from "../styles/courses.module.css";

function AllCourses() {
  return (
   <>
   <div  id={styles.courses}>
   <Heading> All  Courses </Heading>
   <Link to={'/computers'}> 
   <Image
    src ={'computer_img.jpg'}
   />
   
   </Link>
   <Link to={'/computers'}> Computer </Link>

   <Link to={'/tajweed'}>  Tajweed </Link>
   </div>
   </>
  )
}

export default AllCourses
