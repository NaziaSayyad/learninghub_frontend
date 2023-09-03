import { Button, Heading, Image } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styles from "../styles/courses.module.css";

function AllCourses() {
  const [data,setdata] = useState("");

  
  useEffect(() =>{
        // fetch the api of all the courses and set it to the main data

  }, [] )
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
