import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroBanner from '../Components/HeroBanner'
import Des_Top from '../Components/Des_Top'
import Activity from '../Components/Activity'
const Destinations = () => {
  return (
    <>
      <Navbar/>
      <main>
        <HeroBanner h1="Destination" p="From tranquil beaches to misty mountains — explore handpicked places where every journey feels like a new beginning."  button="Explore Now" />
        <Des_Top/>
        <Activity/>
      </main>
      <Footer/>
    </>
  )
}

export default Destinations
