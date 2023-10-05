import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Login from '../components/Login-signup/Login'
import AllCourses from '../Pages/courses/Courses'

import Computer from '../Pages/courses/Computer'
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact'
import Tajweed from '../Pages/courses/Tajweed'


function AllRoutes() {
  return (
    <>
    <Routes> 
      <Route path='/' element={<Home />}>  </Route>
      {/* <Ro
      ute path='/signup' element={<Signup />}> </Ro> */}
      14<Route path='/login' element={<Login />}></Route>
    <Route path='/courses' element={<AllCourses />}> </Route>

<Route path='/computers' element={<Computer /> }></Route>
<Route path='/contact' element={<Contact />}></Route>
<Route path='/about' element={<About />}>  </Route>
<Route path='/tajweed' element={<Tajweed />}> </Route>

</Routes>
    </>
  )
}

export default AllRoutes

