// import React,{useEffect} from "react";
// // import "./Offer.css";
// // import './Tour_Grid.css'
// import { Link } from "react-router-dom";
// import Aos from 'aos'
// import 'aos/dist/aos.css'

// const tourPackages = [
//   {
//     title: "Bali Paradise Getaway",
//     location: "Bali, Indonesia",
//     price: "899",
//     duration: "7 Days / 6 Nights",
//     image:
//       "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
//     description:
//       "Relax on the beaches of Bali and experience the magic of temples, tropical jungles, and culture.",
//   },
//   {
//     title: "Swiss Alps Adventure",
//     location: "Zurich, Switzerland",
//     price: "1,499",
//     duration: "8 Days / 7 Nights",
//     image:
//       "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",
//     description:
//       "Discover the breathtaking beauty of the Alps — snow peaks, lakes, and charming villages await.",
//   },
//   {
//     title: "Desert Safari Escape",
//     location: "Dubai, UAE",
//     price: "699",
//     duration: "5 Days / 4 Nights",
//     image:
//       "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1000&q=80",
//     description:
//       "Ride across golden dunes, enjoy luxury desert camps, and witness stunning Arabian sunsets.",
//   },
//   {
//     title: "Greek Island Hopping",
//     location: "Santorini, Greece",
//     price: "1,199",
//     duration: "6 Days / 5 Nights",
//     image:
//       "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
//     description:
//       "Sail through blue waters, explore white-washed towns, and indulge in authentic Greek cuisine.",
//   },
//   {
//     title: "Bali Paradise Getaway",
//     location: "Bali, Indonesia",
//     price: "899",
//     duration: "7 Days / 6 Nights",
//     image:
//       "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
//     description:
//       "Relax on the beaches of Bali and experience the magic of temples, tropical jungles, and culture.",
//   },
//   {
//     title: "Swiss Alps Adventure",
//     location: "Zurich, Switzerland",
//     price: "1,499",
//     duration: "8 Days / 7 Nights",
//     image:
//       "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",
//     description:
//       "Discover the breathtaking beauty of the Alps — snow peaks, lakes, and charming villages await.",
//   },
//   {
//     title: "Desert Safari Escape",
//     location: "Dubai, UAE",
//     price: "699",
//     duration: "5 Days / 4 Nights",
//     image:
//       "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1000&q=80",
//     description:
//       "Ride across golden dunes, enjoy luxury desert camps, and witness stunning Arabian sunsets.",
//   },
//   {
//     title: "Greek Island Hopping",
//     location: "Santorini, Greece",
//     price: "1,199",
//     duration: "6 Days / 5 Nights",
//     image:
//       "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
//     description:
//       "Sail through blue waters, explore white-washed towns, and indulge in authentic Greek cuisine.",
//   },
//   {
//     title: "Greek Island Hopping",
//     location: "Santorini, Greece",
//     price: "1,199",
//     duration: "6 Days / 5 Nights",
//     image:
//       "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
//     description:
//       "Sail through blue waters, explore white-washed towns, and indulge in authentic Greek cuisine.",
//   }
// ];

// const Tour_Grid = () => {
//   useEffect(()=>{
//     Aos.init({duration:2000})
//   },[])
//   return (
//     <section className="tour-section">
//       <h2 className="tour-title" data-aos='fade-up'>Exclusive Tour Packages</h2>
//       <div className="tour-container" data-aos='fade-up'>
//         {tourPackages.map((tour, index) => (
//           <div className="tour-card" key={index} data-aos='fade-up'>
//             <div className="tour-image">
//               <img src={tour.image} alt={tour.title} />
//               <span className="tour-price">{tour.price}</span>
//             </div>
//             <div className="tour-content">
//               <h3>{tour.title}</h3>
//               <p className="tour-location">{tour.location}</p>
//               <p className="tour-description">{tour.description}</p>
//               <div className="tour-footer">
//                 <span className="tour-duration">{tour.duration}</span>
//                  <Link
//                   to="/travel-booking"
//                   state={tour}
//                   onClick={(e) => {
//                     const loggedInUser = localStorage.getItem("loggedInUser");
//                     if (!loggedInUser) {
//                       e.preventDefault();
//                       alert("⚠️ Please log in before booking a tour!");
//                     } else {
//                       alert(`🎉 You are booking the ${tour.title}!`);
//                     }
//                   }}
//                 >
//                   <button className="tour-btn">Book Now</button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Tour_Grid;


import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

import { getAppAuth } from "../firebase"; 
import { onAuthStateChanged } from "firebase/auth";

const tourPackages = [
  {
    title: "Bali Paradise Getaway",
    location: "Bali, Indonesia",
    price: "899",
    duration: "7 Days / 6 Nights",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    description:
      "Relax on the beaches of Bali and experience the magic of temples, tropical jungles, and culture.",
  },
  {
    title: "Swiss Alps Adventure",
    location: "Zurich, Switzerland",
    price: "1,499",
    duration: "8 Days / 7 Nights",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",
    description:
      "Discover the breathtaking beauty of the Alps — snow peaks, lakes, and charming villages await.",
  },
  {
    title: "Desert Safari Escape",
    location: "Dubai, UAE",
    price: "699",
    duration: "5 Days / 4 Nights",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1000&q=80",
    description:
      "Ride across golden dunes, enjoy luxury desert camps, and witness stunning Arabian sunsets.",
  },
  {
    title: "Greek Island Hopping",
    location: "Santorini, Greece",
    price: "1,199",
    duration: "6 Days / 5 Nights",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    description:
      "Sail through blue waters, explore white-washed towns, and indulge in authentic Greek cuisine.",
  },
  {
    title: "Bali Paradise Getaway",
    location: "Bali, Indonesia",
    price: "899",
    duration: "7 Days / 6 Nights",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    description:
      "Relax on the beaches of Bali and experience the magic of temples, tropical jungles, and culture.",
  },
  {
    title: "Swiss Alps Adventure",
    location: "Zurich, Switzerland",
    price: "1,499",
    duration: "8 Days / 7 Nights",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",
    description:
      "Discover the breathtaking beauty of the Alps — snow peaks, lakes, and charming villages await.",
  },
  {
    title: "Desert Safari Escape",
    location: "Dubai, UAE",
    price: "699",
    duration: "5 Days / 4 Nights",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1000&q=80",
    description:
      "Ride across golden dunes, enjoy luxury desert camps, and witness stunning Arabian sunsets.",
  },
  {
    title: "Greek Island Hopping",
    location: "Santorini, Greece",
    price: "1,199",
    duration: "6 Days / 5 Nights",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    description:
      "Sail through blue waters, explore white-washed towns, and indulge in authentic Greek cuisine.",
  },
  {
    title: "Greek Island Hopping",
    location: "Santorini, Greece",
    price: "1,199",
    duration: "6 Days / 5 Nights",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    description:
      "Sail through blue waters, explore white-washed towns, and indulge in authentic Greek cuisine.",
  }
];

const Tour_Grid = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  // 🔥 Firebase Logged-in User Check
  const auth = getAppAuth();
  let currentUser = null;

  onAuthStateChanged(auth, (user) => {
    currentUser = user;
  });

  return (
    <section className="tour-section">
      <h2 className="tour-title" data-aos="fade-up">
        Exclusive Tour Packages
      </h2>

      <div className="tour-container" data-aos="fade-up">
        {tourPackages.map((tour, index) => (
          <div className="tour-card" key={index} data-aos="fade-up">
            <div className="tour-image">
              <img src={tour.image} alt={tour.title} />
              <span className="tour-price">${tour.price}</span>
            </div>

            <div className="tour-content">
              <h3>{tour.title}</h3>
              <p className="tour-location">{tour.location}</p>
              <p className="tour-description">{tour.description}</p>

              <div className="tour-footer">
                <span className="tour-duration">{tour.duration}</span>

                {/* ✅ Updated Booking Logic Using Firebase Auth */}
                <Link
                  to="/tour/travel-booking"
                  state={tour}
                  onClick={(e) => {
                    if (!currentUser) {
                      e.preventDefault();
                      alert("⚠️ Please log in before booking a tour!");
                    } else {
                      alert(`🎉 You are booking the ${tour.title}!`);
                    }
                  }}
                >
                  <button className="tour-btn">Book Now</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tour_Grid;
