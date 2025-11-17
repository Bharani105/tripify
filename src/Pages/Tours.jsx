import React from 'react'
import Navbar from '../Components/Navbar'
import HeroBanner from '../Components/HeroBanner'
import Offer from '../Components/Offer'
import Tour_Grid from '../Components/Tour_Grid'
import Footer from '../Components/Footer'
const Tours = () => {
  return (
    <>
    <Navbar/>
    <main>
        <HeroBanner h1="Tours" p="Discover curated tours designed for every kind of traveler — from adrenaline-packed adventures to serene escapes."  button="Book a Tour" />
        <Offer/>
        <Tour_Grid/>
    </main>
    <Footer/>
    </>
  )
}

export default Tours
