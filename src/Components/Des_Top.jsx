import React,{useEffect} from "react";
import "./Des_Top.css";
import img1 from "../Assests/img1.jpg";
import img2 from "../Assests/img2.jpg";
import img3 from "../Assests/img3.jpg";
import img4 from "../Assests/img4.jpg";

import Aos from 'aos'
import 'aos/dist/aos.css'

const destinations = [
  { img: img1, title: "Thailand Beaches", rating: "⭐⭐⭐⭐⭐" },
  { img: img2, title: "Norway Mountains", rating: "⭐⭐⭐⭐" },
  { img: img3, title: "New Zealand Nature", rating: "⭐⭐⭐⭐⭐" },
  { img: img4, title: "Singapore City", rating: "⭐⭐⭐⭐" },
];

const Des_Top = () =>{
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
   return (
  <section className="top-destinations">
    <h1 className="section-title" data-aos='fade-up'>Top Destinations</h1>
    <p className="section-subtitles" data-aos='fade-up'>
      Explore some of the most beautiful and popular travel spots around the world.  
      Find your next adventure here!
    </p>
    <div className="parent" data-aos='zoom-in'>
      {destinations.map((dest, idx) => (
        <div key={idx} className={`div${idx + 1} content-div`}>
          <img src={dest.img} alt={dest.title} />
          <div className="text-overlay" data-aos='fade-up'>
            <h2>{dest.title}</h2>
            <div className="stars">{dest.rating}</div>
          </div>
        </div>
      ))} 
      
    </div>
    
  </section>
);
}

export default Des_Top;

