import React, { useEffect } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import './HeroBanner.css';
import des_hero from '../Assests/des_hero.jpeg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const HeroBanner = ({h1,p,button}) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className='hero-banner'>
      <div className="hero-bg">
        <img src={des_hero} alt="" />
      </div>

      <div className="hero-text">
        <h1 data-aos='fade-up'>{h1}</h1>
        <p data-aos='fade-up'>
          {p}
        </p>

        <button className='hero-btn flex' data-aos='fade-up'>
          {button} <FaArrowRightLong className='icon' />
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
