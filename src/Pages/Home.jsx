import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Middle from '../Components/Middle'
import Destination from '../Components/Destination'
import Porfolio from '../Components/Porfolio'
import Reviews from '../Components/Reviews'
import Questions from '../Components/Questions'
import Footer from '../Components/Footer'
const Home = () => {
  return (
    <>
    <Navbar/>
    <main>
      <Hero/>
      <Middle/>
      <Destination/>
      <Porfolio/>
      <Reviews/>
      <Questions/>
    </main>
    <Footer/>
    </>
  )
}

export default Home
