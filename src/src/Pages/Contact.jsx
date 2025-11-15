import React from 'react'
import Navbar from '../Components/Navbar'
import HeroBanner from '../Components/HeroBanner'
import Contact_Form from '../Components/Contact_Form'
import Footer from '../Components/Footer'

const About = () => {
  return (
    <>
      <Navbar/>
      <main>
        <HeroBanner h1="Contact Us" p="Have questions or need help planning your next getaway? Our travel experts are here to guide you every step of the way."  button="Get in Touch" 
/>
        <Contact_Form/>
      </main>
      <Footer/>
    </>
  )
}

export default About
