import React, { useEffect } from "react";
import "./Gallery_Grid.css";

import Aos from "aos";
import "aos/dist/aos.css";

import img1 from "../Assests/gallery-01.jpg";
import img2 from "../Assests/gallery-02.jpg";
import img3 from "../Assests/gallery-03.jpg";
import img4 from "../Assests/gallery-04.jpg";
import img5 from "../Assests/gallery-05.jpg";
import img6 from "../Assests/gallery-06.webp";
import img7 from "../Assests/gallery-07.webp";
import img8 from "../Assests/gallery-08.webp";

const galleryItems = [
   { img: img2, name: "Paris, France" },
  { img: img1, name: "Bali, Indonesia" },
  { img: img4, name: "Swiss Alps, Switzerland" },
 
  { img: img3, name: "Santorini, Greece" },
  { img: img5, name: "Kyoto, Japan" },
  { img: img6, name: "New York City, USA" },
  { img: img7, name: "Maldives Islands" },
  { img: img8, name: "Cappadocia, Turkey" },
];

const Gallery_Grid = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="gallery-section" >
      <div className="gallery-header" >
        <h2 className="gallery-title" data-aos="fade-up">
          Travel Memories Gallery
        </h2>
        <p className="gallery-subtitle" data-aos="fade-up">
          Experience the beauty of the world through stunning visuals. Each
          memory captures a destination worth exploring and reliving.
        </p>
      </div>

      <div className="gallery-grid" data-aos="fade-up">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className={`gallery-item grid-item-${index + 1}`}
            data-aos="zoom-in"
            data-aos-delay={index * 90}
          >
            <img src={item.img} alt={item.name} />
            <div className="overlay">
              <span>{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery_Grid;
