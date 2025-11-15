import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./TravelBooking.css";
import Accordian from "./Accordian";
import Aos from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";

import {
  RiTimeLine,
  RiUserLine,
  RiFlightTakeoffLine,
  RiMapPinLine,
} from "react-icons/ri";

export default function TravelBooking() {
  const location = useLocation();
  const tour = location.state;
  const formRef = useRef();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [active, setActive] = useState("");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_xft3fag",
        "template_5mmq8jl", 
        formRef.current, 
        "hNNhto4ZOIPtk9L2w"
      )
      .then(
        () => {
          setStatus(
            "🎉 Thanks for booking! Your request has been received — our travel team will contact you soon."
          );
          setSending(false);
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          setStatus("❌ Oops! Something went wrong. Please try again later.");
          setSending(false);
        }
      );
  };

  const tripPlan = [
    {
      title: "Day 1: Arrival & City Tour",
      desc: "Arrival and check-in at hotel. Evening city tour with welcome dinner.",
    },
    {
      title: "Day 2: Cultural Sightseeing",
      desc: "Guided sightseeing and cultural experience around major landmarks.",
    },
    {
      title: "Day 3: Adventure Day",
      desc: "Hiking, kayaking, or beach trip followed by a campfire.",
    },
    {
      title: "Day 4: Leisure & Shopping",
      desc: "Free day with optional spa, local market visits, and relaxation.",
    },
    {
      title: "Day 5: Departure",
      desc: "Farewell breakfast and transfer to the airport.",
    },
  ];

  return (
    <div className="travel-booking-page" data-aos="fade-up">
      <div className="tour-banner">
        <img
          src={
            tour?.image ||
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
          }
          alt={tour?.title || "Tour Destination"}
        />
      </div>

      <div className="tour-header" data-aos="fade-up">
        <div className="tour-header-left">
          <h1>{tour?.title || "New Destination"}</h1>
          <p className="price">
            ${tour?.discountPrice || "870"} <span>/ Per Person</span>
          </p>
        </div>

        <div className="tour-header-icons">
          <div className="detail-item">
            <RiTimeLine className="detail-icon" />
            <div>
              <span>Duration</span>
              <p>{tour?.duration || "3 Days"}</p>
            </div>
          </div>

          <div className="detail-item">
            <RiUserLine className="detail-icon" />
            <div>
              <span>Min Age</span>
              <p>{tour?.age || "12+"}</p>
            </div>
          </div>

          <div className="detail-item">
            <RiFlightTakeoffLine className="detail-icon" />
            <div>
              <span>Tour Type</span>
              <p>{tour?.type || "Adventure, Fun"}</p>
            </div>
          </div>

          <div className="detail-item">
            <RiMapPinLine className="detail-icon" />
            <div>
              <span>Location</span>
              <p>{tour?.location || "Los Angeles"}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="booking-content" data-aos="fade-up">
        <div className="tour-details-left">
          <div className="overview">
            <h2>Overview</h2>
            <p>
              Explore breathtaking destinations, experience local culture, and
              create unforgettable memories. From relaxing beaches to thrilling
              adventures — we bring your dream vacation to life.
            </p>
          </div>

          <div className="included-section">
            <div className="included-card" data-aos="fade-up">
              <h2>Included</h2>
              <ul className="include">
                <li>Pick and Drop Services</li>
                <li>1 Meal Per Day</li>
                <li>Cruise Dinner & Music Event</li>
                <li>Visit 7 Best Places in the City</li>
              </ul>
            </div>

            <div className="excluded-card" data-aos="fade-up">
              <h2>Excluded</h2>
              <ul className="exclude">
                <li>Additional Services</li>
                <li>Insurance</li>
                <li>Food & Drinks</li>
                <li>Tickets</li>
              </ul>
            </div>
          </div>

          <div className="trip-plan">
            <h2>Tour Plan</h2>
            {tripPlan.map((item, index) => (
              <Accordian
                key={index}
                title={item.title}
                desc={item.desc}
                active={active}
                setActive={setActive}
              />
            ))}
          </div>
        </div>
        
        <div className="booking-form" data-aos="fade-up">
          <h2>Book This Tour</h2>

          {status && (
            <p
              className={`status-message ${
                status.includes("🎉") ? "success" : "error"
              }`}
            >
              {status}
            </p>
          )}

          <form ref={formRef} onSubmit={sendEmail}>
            <input type="text" name="fullName" placeholder="Full Name" required />
            <input type="email" name="email" placeholder="Email Address" required />
            <input type="tel" name="phone" placeholder="Phone Number" required />
            <input
              type="number"
              name="travelers"
              placeholder="Number of Travelers"
              min="1"
              required
            />
            <input type="date" name="date" required />

            <select name="packageType" required>
              <option value="">Select Package Type</option>
              <option value="Standard">Standard Package</option>
              <option value="Luxury">Luxury Package</option>
              <option value="Honeymoon">Honeymoon Package</option>
              <option value="Family">Family Package</option>
              <option value="Adventure">Adventure Package</option>
            </select>

            <textarea
              name="message"
              placeholder="Special Requests (Optional)"
              rows="4"
            ></textarea>

            <button type="submit" className="book-btn" disabled={sending}>
              {sending ? "Sending..." : "BOOK NOW"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}