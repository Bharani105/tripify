import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import Aos from 'aos';
import 'aos/dist/aos.css';

import home from '../Assests/home.mp4';
import img1 from '../Assests/img1.jpg';
import img2 from '../Assests/img2.jpg';
import img3 from '../Assests/img3.jpg';
import img4 from '../Assests/img4.jpg';
import img5 from '../Assests/img5.jpg';
import './Hero.css';

const Hero = () => {
  const [banner, setBanner] = useState({ type: 'video', src: home });
  const navigate = useNavigate(); 

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  // Function to handle image click
  const handleImageClick = (image) => {
    setBanner({ type: 'image', src: image });
  };

  // Function to reset back to video
  const handleReset = () => {
    setBanner({ type: 'video', src: home });
  };

  const handleGetStarted = () => {
    navigate('/travel-booking');
  };


  return (
    <div className='Home'>
      {/* Conditional Rendering for Video or Image Banner */}
      <div className="videoBg">
        {banner.type === 'video' ? (
          <video src={banner.src} autoPlay loop muted></video>
        ) : (
          <img
            src={banner.src}
            alt="Banner"
            className="bannerImage"
            onClick={handleReset}
          />
        )}
      </div>

      <div className="sectionText">
        <h1 data-aos='fade-up'>Unlock Your Dreams with Us!</h1>
        <p data-aos='fade-up'>
          Discover the world's most adventurous nature, life is too short for a trip.
        </p>

        <button className='btn flex' data-aos='fade-up' onClick={handleGetStarted}>
          GET STARTED <FaArrowRightLong className='icon' />
        </button>
      </div>

      <div className="popularPlaces">
        <div className="content">
          <h3 data-aos='fade-up'>Popular places</h3>
          <div className="images flex" data-aos='fade-up'>
            {[img1, img2, img3, img4, img5].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Popular Place ${index + 1}`}
                onClick={() => handleImageClick(img)}
                className="clickableImage"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
