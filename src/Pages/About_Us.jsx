import React from 'react'
import Navbar from '../Components/Navbar'
import HeroBanner from '../Components/HeroBanner'
import About_info from '../Components/About_info'
import About_Features from '../Components/About_Features'
import Testimonial from '../Components/Testimonial'
import Footer from '../Components/Footer'
const About_Us = () => {
  return (
   <>
   <Navbar/>
   <main>
    <HeroBanner h1="About-Us" p="Relive the beauty of travel through our visual stories — every image captures a destination, a memory, a feeling." button="Explore Now"/>
    <About_info/>
    <About_Features/>
    <Testimonial/>
   </main>
   <Footer/>
   </>
  )
}

export default About_Us
