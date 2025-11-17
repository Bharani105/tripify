import React from 'react'
import Navbar from '../Components/Navbar'
import HeroBanner from '../Components/HeroBanner'
import Gallery_Grid from '../Components/Gallery_Grid'
import Reviews from '../Components/Reviews'
import About_Features from '../Components/About_Features'
import Footer from '../Components/Footer'
const Gallery = () => {
  return (
    <>
      <Navbar/>
      <main>
        <HeroBanner h1="Gallery" p="Relive the beauty of travel through our visual stories — every image captures a destination, a memory, a feeling." button="Explore Now"/>
        <Gallery_Grid/>
        <Reviews/>
        <About_Features/>
      </main>
      <Footer/>
    </>
  )
}

export default Gallery
