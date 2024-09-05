import React from 'react'
import Navbar from '../componenets/Navbar'
import Footer from '../componenets/Footer'
import Course from '../componenets/Course'


function Courses() {
  return (
    <>
      <Navbar/>
      <div className='min-h-screen'>
        <Course/>
      </div>
      <Footer/>
    </>
  )
}

export default Courses
