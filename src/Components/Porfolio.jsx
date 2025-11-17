import React, {useEffect} from 'react'
import icon1 from '../Assests/protection.png'
import icon2 from '../Assests/destination.png'
import icon3 from '../Assests/24-hours-support.png'
import image from '../Assests/GridImage.png'
import './Portfolio.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Porfolio = () => {

   useEffect(()=>{
        Aos.init({duration:2000})
      },[])

  return (
    <div className='portfolio section container'>
      <div className="secContainer grid">
        <div className="leftContent">
            <div className="secHeading">
                <h3 data-aos='fade-up'>Why Should You Choose Us</h3>
                <p data-aos='fade-up'>We have extensive knownlodge and experience in the travel industry</p>
            </div>

            <div className="grid">
                <div className="singlePortfolio flex" data-aos='fade-up'>
                  <div className="iconDiv">
                    <img src={icon1} alt="" />
                  </div>

                  <div className="infor" data-aos='fade-up'>
                    <h4 data-aos='fade-up'>Safety and support</h4>
                    <p data-aos='fade-up'>Our top priority is the Safety and well being of our clients.
                      we maintain high Safety standards and have emergency support available during the trip.
                    </p>
                  </div>
                </div>

                <div className="singlePortfolio flex" data-aos='fade-up'>
                  <div className="iconDiv">
                    <img src={icon2} alt="" />
                  </div>

                  <div className="infor" data-aos='fade-up'>
                    <h4 data-aos='fade-up'>Diverse Range of Destination</h4>
                    <p data-aos='fade-up'>Our top priority is the Safety and well being of our clients.
                      we maintain high Safety standards and have emergency support available during the trip.
                    </p>
                  </div>
                </div>

                <div className="singlePortfolio flex" data-aos='fade-up'>
                  <div className="iconDiv">
                    <img src={icon3} alt="" />
                  </div>

                  <div className="infor" data-aos='fade-up'>
                    <h4 data-aos='fade-up'>24/7 Customer Support</h4>
                    <p data-aos='fade-up'>Our top priority is the Safety and well being of our clients.
                      we maintain high Safety standards and have emergency support available during the trip.
                    </p>
                  </div>
                </div>
            </div>
        </div>

        <div className="rightContainer" data-aos='fade-down'>
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Porfolio
