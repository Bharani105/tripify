import React,{useEffect} from 'react';
import './About_info.css';
import img1 from "../Assests/img1.jpg";
import img2 from "../Assests/img2.jpg";
import img3 from "../Assests/img3.jpg";
import { FaArrowRight } from 'react-icons/fa';
import Aos from 'aos'
import 'aos/dist/aos.css'

const About_info = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className="about-section">
      <div className="about-container" >
        <div className="about-images" data-aos='fade-up'>
          <div className="about-image large" data-aos='fade-up'>
            <img
              src={img1}
              alt="Travel City Tram"
            />
          </div>
          <div className="about-image-grid" data-aos='fade-up'>
            <img
              src={img2}
              alt="Traveler taking a picture"
            />
            <img
              src={img3}
              alt="Kayaking adventure"
            />
          </div>
        </div>

        <div className="about-content">
          <h5 className="about-tagline" data-aos='fade-up'>Discover New Destinations</h5>
          <h2 className="about-title" data-aos='fade-up'>
            Experience The World Like Never Before With Our Travel Experts
          </h2>
          <p className="about-text" data-aos='fade-up'>
            Travel opens up a world of unforgettable experiences — from historic
            cities to breathtaking landscapes. Our agency specializes in
            creating personalized journeys that bring your dreams to life,
            ensuring comfort, safety, and lifelong memories every step of the
            way.
          </p>
          <button className="about-btn" data-aos='fade-up'>
            Start Your Journey <FaArrowRight className="arrow-icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default About_info;
