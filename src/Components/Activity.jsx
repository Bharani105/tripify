import React, {useEffect} from 'react'
import "./Activity.css";
import Aos from 'aos'
import 'aos/dist/aos.css'
import {
  FaMountain,
  FaHiking,
  FaFire,
  FaRoad,
  FaCampground,
  FaMapMarkedAlt,
  FaUmbrellaBeach,
  FaHandRock, 
} from "react-icons/fa";

const activities = [
  { icon: <FaMountain />, title: "Adventure", destinations: "15 Destinations" },
  { icon: <FaHiking />, title: "Trekking", destinations: "12 Destinations" },
  { icon: <FaFire />, title: "Camp Fire", destinations: "7 Destinations" },
  { icon: <FaRoad />, title: "Off Road", destinations: "15 Destinations" },
  { icon: <FaCampground />, title: "Camping", destinations: "13 Destinations" },
  { icon: <FaMapMarkedAlt />, title: "Exploring", destinations: "25 Destinations" },
  { icon: <FaUmbrellaBeach />, title: "Beach Tour", destinations: "10 Destinations" },
  { icon: <FaHandRock />, title: "Rock Climbing", destinations: "9 Destinations" },
];

const Activity = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className="activity-section">
      <h5 className="section-subtitle" data-aos='fade-up'>
        <span className="line"></span> TRAVEL BY ACTIVITY
      </h5>
      <h2 className="section-title" data-aos='fade-up'>ADVENTURE & ACTIVITY</h2>
      <p className="section-description" data-aos='fade-up'>
        Mollit voluptatem perspiciatis convallis elementum corporis quo veritatis
        aliquid blandit, blandit torquent, odit placeat. Adipiscing repudiandae eius cursus?
        Nostrum magnis maxime curae placeat.
      </p>

      <div className="activity-grid" data-aos='fade-up'>
        {activities.map(({ icon, title, destinations }, index) => (
          <div key={index} className="activity-card">
            <div className="activity-icon">{icon}</div>
            <h3 className="activity-title">{title}</h3>
            <p className="activity-destination">{destinations}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Activity;
