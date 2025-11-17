

import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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

import { getAppDB } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const TravelBooking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const tour = location.state;
  const formRef = useRef();

  const basePrice = Number(tour?.discountPrice || tour?.price || 0);
  const [travelers, setTravelers] = useState(1);
  const totalPrice = basePrice * travelers;

  const [sending, setSending] = useState(false);
  const [active, setActive] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const saveBookingToFirebase = async (paymentId) => {
    try {
      const db = getAppDB();
      await addDoc(collection(db, "bookings"), {
        fullName: formRef.current.fullName.value,
        email: formRef.current.email.value,
        phone: formRef.current.phone.value,
        travelers,
        date: formRef.current.date.value,
        packageType: formRef.current.packageType.value,
        message: formRef.current.message.value,
        tourName: tour?.title,
        amount: totalPrice,
        paymentId,
        createdAt: new Date().toISOString(),
      });
    } catch (err) {
      console.error("Firestore Error:", err);
    }
  };

  const handleBookingAndPayment = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus("");

    if (!window.Razorpay) {
      setStatus("Payment gateway failed to load.");
      setSending(false);
      return;
    }

    const options = {
      key: "rzp_test_Rg5WHazuaCEiYd",
      amount: totalPrice * 100,
      currency: "INR",
      name: "Tripify Booking",
      description: tour?.title,

      handler: async function (response) {
        try {
          formRef.current.paymentId.value = response.razorpay_payment_id;

          await saveBookingToFirebase(response.razorpay_payment_id);

          await emailjs.sendForm(
            "service_xft3fag",
            "template_5mmq8jl",
            formRef.current,
            "hNNhto4ZOIPtk9L2w"
          );

          alert("🎉 Payment Successful! Booking Confirmed.");
          navigate("/booking-success");
        } catch (err) {
          console.error(err);
          setStatus("❌ Something went wrong.");
        } finally {
          setSending(false);
        }
      },

      prefill: {
        name: formRef.current.fullName.value,
        email: formRef.current.email.value,
        contact: formRef.current.phone.value,
      },

      theme: { color: "#ff5733" },
    };

    const rzp = new window.Razorpay(options);

    rzp.on("payment.failed", function () {
      setStatus("❌ Payment failed. Please try again.");
      setSending(false);
    });

    rzp.open();
  };

  // ⭐ AOS
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  // ⭐ LOCATION-BASED OVERVIEW
  const generateOverview = (location) => {
    switch (location) {
      case "Bali, Indonesia":
        return "Experience the tropical charm of Bali through serene beaches, ancient temples, lush jungles, and rich Balinese culture. A perfect blend of relaxation, spirituality, and natural beauty.";

      case "Zurich, Switzerland":
        return "Discover Switzerland’s breathtaking Alps, crystal-clear lakes, charming mountain towns, and scenic train routes. A journey filled with peaceful landscapes and unforgettable moments.";

      case "Dubai, UAE":
        return "Explore the futuristic wonders of Dubai with golden deserts, luxury skyscrapers, traditional souks, and thrilling adventure experiences. A perfect mix of culture and modern luxury.";

      case "Santorini, Greece":
        return "Enjoy Santorini’s magical sunsets, blue-domed churches, volcanic beaches, and romantic cliffside villages. A dreamy escape filled with Greek charm and Mediterranean beauty.";

      default:
        return "Explore breathtaking destinations, experience local culture, and create unforgettable memories throughout your incredible journey.";
    }
  };

  // ⭐ LOCATION-SPECIFIC TRIP PLAN
  const generateTripPlan = (location) => {
    switch (location) {
      case "Bali, Indonesia":
        return [
          { title: "Day 1: Arrival & Beach Sunset", desc: "Arrive in Bali and enjoy a relaxing sunset at Kuta or Seminyak Beach." },
          { title: "Day 2: Ubud Culture Day", desc: "Visit Ubud Monkey Forest, rice terraces, and traditional Balinese art villages." },
          { title: "Day 3: Temple Exploration", desc: "Explore Uluwatu Temple, watch the Kecak dance show, and enjoy cliffside views." },
          { title: "Day 4: Water Adventures", desc: "Snorkeling, waterfalls, or a Nusa Penida island trip with crystal-blue waters." },
          { title: "Day 5: Spa & Shopping", desc: "Pamper yourself with a Balinese spa and enjoy local shopping and cafés." },
        ];

      case "Zurich, Switzerland":
        return [
          { title: "Day 1: Arrival & Zurich Town", desc: "Explore Zurich Old Town, lakeside promenades, and cozy café streets." },
          { title: "Day 2: Mt. Titlis", desc: "Ride the cable car to Mt. Titlis and enjoy snow, ice caves, and alpine views." },
          { title: "Day 3: Interlaken", desc: "A scenic day trip with lakes, mountains, and adventure activities." },
          { title: "Day 4: Lucerne", desc: "Visit Chapel Bridge, Lion Monument, and take a boat ride on Lake Lucerne." },
          { title: "Day 5: Glacier Panorama", desc: "Enjoy stunning glacier viewpoints via famous Swiss mountain railways." },
        ];

      case "Dubai, UAE":
        return [
          { title: "Day 1: Arrival & Marina Walk", desc: "Arrive and enjoy a relaxing evening around Dubai Marina’s waterfront." },
          { title: "Day 2: Dubai City Tour", desc: "Visit Burj Khalifa, Dubai Mall, Dubai Creek, and Al Fahidi heritage town." },
          { title: "Day 3: Desert Safari", desc: "Dune bashing, camel rides, quad bikes, BBQ dinner, and live performances." },
          { title: "Day 4: Palm Jumeirah", desc: "Explore Atlantis, JBR Beach, and optional water activities." },
          { title: "Day 5: Souks & Shopping", desc: "Visit the Gold Souk, Spice Souk, and enjoy premium mall shopping." },
        ];

      case "Santorini, Greece":
        return [
          { title: "Day 1: Arrival & Fira Exploration", desc: "Walk through Fira’s beautiful cliffside streets and cafés." },
          { title: "Day 2: Oia Sunset", desc: "Experience the world-famous Oia sunset and charming streets." },
          { title: "Day 3: Volcano Cruise", desc: "Take a boat to the volcanic islands and relax in natural hot springs." },
          { title: "Day 4: Beach Day", desc: "Relax at the Red Beach, Black Beach, and explore seaside tavernas." },
          { title: "Day 5: Wine & Villages", desc: "Tour Santorini’s wineries and visit authentic villages like Pyrgos." },
        ];

      default:
        return [
          { title: "Day 1: Arrival & City Tour", desc: "Explore the city and enjoy a welcome sightseeing experience." },
          { title: "Day 2: Local Culture", desc: "Visit cultural attractions and vibrant marketplaces." },
          { title: "Day 3: Adventure Day", desc: "Enjoy outdoor adventure activities and scenic views." },
          { title: "Day 4: Relaxation", desc: "Free day for shopping and leisure activities." },
          { title: "Day 5: Departure", desc: "Farewell breakfast and checkout." },
        ];
    }
  };

  const tripPlan = generateTripPlan(tour?.location);

  return (
    <div className="travel-booking-page" data-aos="fade-up">
      <div className="tour-banner">
        <img
          src={tour?.image}
          alt={tour?.title}
        />
      </div>

      <div className="tour-header" data-aos="fade-up">
        <div>
          <h1>{tour?.title}</h1>
          <p className="price">
            ₹{basePrice} <span>/ Per Person</span>
          </p>
        </div>

        <div className="tour-header-icons">
          <div className="detail-item">
            <RiTimeLine className="detail-icon" />
            <div>
              <span>Duration</span>
              <p>{tour?.duration}</p>
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
              <p>{tour?.type || "Adventure"}</p>
            </div>
          </div>

          <div className="detail-item">
            <RiMapPinLine className="detail-icon" />
            <div>
              <span>Location</span>
              <p>{tour?.location}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="booking-content" data-aos="fade-up">
        <div className="tour-details-left">
          <div className="overview">
            <h2>Overview</h2>
            <p>{generateOverview(tour?.location)}</p>
          </div>

          <div className="included-section">
            <div className="included-card">
              <h2>Included</h2>
              <ul className="include">
                <li>Pick & Drop</li>
                <li>Hotel Stay</li>
                <li>Tour Guide</li>
                <li>Cruise Dinner</li>
              </ul>
            </div>

            <div className="excluded-card">
              <h2>Excluded</h2>
              <ul className="exclude">
                <li>Flight Tickets</li>
                <li>Insurance</li>
                <li>Extra Activities</li>
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

          <div className="price-box">
            <p><strong>Price per Person:</strong> ₹{basePrice}</p>
            <p><strong>Travellers:</strong> {travelers}</p>
            <p style={{ fontWeight: "bold", color: "green" }}>
              Total Price: ₹{totalPrice}
            </p>
          </div>

          <form ref={formRef}>
            <input type="text" name="fullName" placeholder="Full Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="tel" name="phone" placeholder="Phone Number" required />

            <input
              type="number"
              name="travelers"
              min="1"
              value={travelers}
              onChange={(e) => setTravelers(Number(e.target.value))}
              required
            />

            <input type="date" name="date" required />

            <select name="packageType" required>
              <option value="">Select Package Type</option>
              <option value="Standard">Standard</option>
              <option value="Luxury">Luxury</option>
              <option value="Honeymoon">Honeymoon</option>
              <option value="Family">Family</option>
            </select>

            <input type="text" value={`₹${totalPrice}`} readOnly />

            <input type="hidden" name="totalPrice" value={totalPrice} />
            <input type="hidden" name="tourName" value={tour?.title} />
            <input type="hidden" name="paymentId" />

            <textarea name="message" placeholder="Special Requests..." />

            <button
              onClick={handleBookingAndPayment}
              className="book-btn"
              disabled={sending}
            >
              {sending ? "Processing..." : "BOOK & PAY"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TravelBooking;
