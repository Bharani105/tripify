// import React, { useState, useEffect, useRef } from "react";
// import { useLocation } from "react-router-dom";
// import "./TravelBooking.css";
// import Accordian from "./Accordian";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import emailjs from "emailjs-com";

// import {
//   RiTimeLine,
//   RiUserLine,
//   RiFlightTakeoffLine,
//   RiMapPinLine,
// } from "react-icons/ri";

// export default function TravelBooking() {
//   const location = useLocation();
//   const tour = location.state;
//   const formRef = useRef();

//   useEffect(() => {
//     Aos.init({ duration: 2000 });
//   }, []);

//   const [active, setActive] = useState("");
//   const [sending, setSending] = useState(false);
//   const [status, setStatus] = useState("");

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setSending(true);
//     setStatus("");

//     emailjs
//       .sendForm(
//         "service_xft3fag",
//         "template_5mmq8jl", 
//         formRef.current, 
//         "hNNhto4ZOIPtk9L2w"
//       )
//       .then(
//         () => {
//           setStatus(
//             "🎉 Thanks for booking! Your request has been received — our travel team will contact you soon."
//           );
//           setSending(false);
//           formRef.current.reset();
//         },
//         (error) => {
//           console.error(error);
//           setStatus("❌ Oops! Something went wrong. Please try again later.");
//           setSending(false);
//         }
//       );
//   };

//   const tripPlan = [
//     {
//       title: "Day 1: Arrival & City Tour",
//       desc: "Arrival and check-in at hotel. Evening city tour with welcome dinner.",
//     },
//     {
//       title: "Day 2: Cultural Sightseeing",
//       desc: "Guided sightseeing and cultural experience around major landmarks.",
//     },
//     {
//       title: "Day 3: Adventure Day",
//       desc: "Hiking, kayaking, or beach trip followed by a campfire.",
//     },
//     {
//       title: "Day 4: Leisure & Shopping",
//       desc: "Free day with optional spa, local market visits, and relaxation.",
//     },
//     {
//       title: "Day 5: Departure",
//       desc: "Farewell breakfast and transfer to the airport.",
//     },
//   ];

//   return (
//     <div className="travel-booking-page" data-aos="fade-up">
//       <div className="tour-banner">
//         <img
//           src={
//             tour?.image ||
//             "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
//           }
//           alt={tour?.title || "Tour Destination"}
//         />
//       </div>

//       <div className="tour-header" data-aos="fade-up">
//         <div className="tour-header-left">
//           <h1>{tour?.title || "New Destination"}</h1>
//           <p className="price">
//             ${tour?.discountPrice || "870"} <span>/ Per Person</span>
//           </p>
//         </div>

//         <div className="tour-header-icons">
//           <div className="detail-item">
//             <RiTimeLine className="detail-icon" />
//             <div>
//               <span>Duration</span>
//               <p>{tour?.duration || "3 Days"}</p>
//             </div>
//           </div>

//           <div className="detail-item">
//             <RiUserLine className="detail-icon" />
//             <div>
//               <span>Min Age</span>
//               <p>{tour?.age || "12+"}</p>
//             </div>
//           </div>

//           <div className="detail-item">
//             <RiFlightTakeoffLine className="detail-icon" />
//             <div>
//               <span>Tour Type</span>
//               <p>{tour?.type || "Adventure, Fun"}</p>
//             </div>
//           </div>

//           <div className="detail-item">
//             <RiMapPinLine className="detail-icon" />
//             <div>
//               <span>Location</span>
//               <p>{tour?.location || "Los Angeles"}</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="booking-content" data-aos="fade-up">
//         <div className="tour-details-left">
//           <div className="overview">
//             <h2>Overview</h2>
//             <p>
//               Explore breathtaking destinations, experience local culture, and
//               create unforgettable memories. From relaxing beaches to thrilling
//               adventures — we bring your dream vacation to life.
//             </p>
//           </div>

//           <div className="included-section">
//             <div className="included-card" data-aos="fade-up">
//               <h2>Included</h2>
//               <ul className="include">
//                 <li>Pick and Drop Services</li>
//                 <li>1 Meal Per Day</li>
//                 <li>Cruise Dinner & Music Event</li>
//                 <li>Visit 7 Best Places in the City</li>
//               </ul>
//             </div>

//             <div className="excluded-card" data-aos="fade-up">
//               <h2>Excluded</h2>
//               <ul className="exclude">
//                 <li>Additional Services</li>
//                 <li>Insurance</li>
//                 <li>Food & Drinks</li>
//                 <li>Tickets</li>
//               </ul>
//             </div>
//           </div>

//           <div className="trip-plan">
//             <h2>Tour Plan</h2>
//             {tripPlan.map((item, index) => (
//               <Accordian
//                 key={index}
//                 title={item.title}
//                 desc={item.desc}
//                 active={active}
//                 setActive={setActive}
//               />
//             ))}
//           </div>
//         </div>
        
//         <div className="booking-form" data-aos="fade-up">
//           <h2>Book This Tour</h2>

//           {status && (
//             <p
//               className={`status-message ${
//                 status.includes("🎉") ? "success" : "error"
//               }`}
//             >
//               {status}
//             </p>
//           )}

//           <form ref={formRef} onSubmit={sendEmail}>
//             <input type="text" name="fullName" placeholder="Full Name" required />
//             <input type="email" name="email" placeholder="Email Address" required />
//             <input type="tel" name="phone" placeholder="Phone Number" required />
//             <input
//               type="number"
//               name="travelers"
//               placeholder="Number of Travelers"
//               min="1"
//               required
//             />
//             <input type="date" name="date" required />

//             <select name="packageType" required>
//               <option value="">Select Package Type</option>
//               <option value="Standard">Standard Package</option>
//               <option value="Luxury">Luxury Package</option>
//               <option value="Honeymoon">Honeymoon Package</option>
//               <option value="Family">Family Package</option>
//               <option value="Adventure">Adventure Package</option>
//             </select>

//             <textarea
//               name="message"
//               placeholder="Special Requests (Optional)"
//               rows="4"
//             ></textarea>

//             <button type="submit" className="book-btn" disabled={sending}>
//               {sending ? "Sending..." : "BOOK NOW"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState, useEffect, useRef } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import "./TravelBooking.css";
// import Accordian from "./Accordian";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import emailjs from "emailjs-com";

// import {
//   RiTimeLine,
//   RiUserLine,
//   RiFlightTakeoffLine,
//   RiMapPinLine,
// } from "react-icons/ri";

// import { getAppDB } from "../firebase";
// import { collection, addDoc } from "firebase/firestore";

// const TravelBooking = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const tour = location.state;
//   const formRef = useRef();

//   // ⭐ BASE PRICE
//   const basePrice = Number(tour?.discountPrice || tour?.price || 0);

//   // ⭐ LIVE TOTAL CALCULATOR
//   const [travelers, setTravelers] = useState(1);
//   const totalPrice = basePrice * travelers;

//   const [sending, setSending] = useState(false);
//   const [active, setActive] = useState("");
//   const [status, setStatus] = useState("");

//   // ⭐ LOAD RAZORPAY SCRIPT
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.async = true;
//     document.body.appendChild(script);
//   }, []);

//   // ⭐ FIREBASE SAVE
//   const saveBookingToFirebase = async (paymentId) => {
//     try {
//       const db = getAppDB();
//       await addDoc(collection(db, "bookings"), {
//         fullName: formRef.current.fullName.value,
//         email: formRef.current.email.value,
//         phone: formRef.current.phone.value,
//         travelers,
//         date: formRef.current.date.value,
//         packageType: formRef.current.packageType.value,
//         message: formRef.current.message.value,
//         tourName: tour?.title,
//         amount: totalPrice,
//         paymentId: paymentId,
//         createdAt: new Date().toISOString(),
//       });
//     } catch (err) {
//       console.error("Firestore Error:", err);
//     }
//   };

//   // ⭐ BOOK + PAY BUTTON
//   const handleBookingAndPayment = async (e) => {
//     e.preventDefault();
//     setSending(true);
//     setStatus("");

//     const options = {
//       key: "rzp_test_Rg5WHazuaCEiYd",
//       amount: totalPrice * 100,
//       currency: "INR",
//       name: "Tripify Booking",
//       description: tour?.title,

//       handler: async function (response) {
//         // Save to Firebase
//         await saveBookingToFirebase(response.razorpay_payment_id);

//         // Send Email
//         emailjs.sendForm(
//           "service_xft3fag",
//           "template_5mmq8jl",
//           formRef.current,
//           "hNNhto4ZOIPtk9L2w"
//         );

//         alert("🎉 Payment Successful! Booking Confirmed.");
//         navigate("/booking-success");
//       },

//       prefill: {
//         name: formRef.current.fullName.value,
//         email: formRef.current.email.value,
//         contact: formRef.current.phone.value,
//       },

//       theme: { color: "#ff5733" },
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.open();
//     setSending(false);
//   };

//   // ⭐ AOS Animation Init
//   useEffect(() => {
//     Aos.init({ duration: 1500 });
//   }, []);

//   // ⭐ TRIPPLAN LIST
//   const tripPlan = [
//     { title: "Day 1: Arrival & City Tour", desc: "Arrival & evening sightseeing." },
//     { title: "Day 2: Cultural Day", desc: "Museum & historical tour." },
//     { title: "Day 3: Adventure Day", desc: "Kayaking, hiking & campfire." },
//     { title: "Day 4: Shopping & Relax", desc: "Markets, spa & leisure time." },
//     { title: "Day 5: Departure", desc: "Farewell breakfast & checkout." },
//   ];

//   return (
//     <div className="travel-booking-page" data-aos="fade-up">
//       {/* BANNER */}
//       <div className="tour-banner">
//         <img
//           src={
//             tour?.image ||
//             "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
//           }
//           alt={tour?.title}
//         />
//       </div>

//       {/* HEADER */}
//       <div className="tour-header" data-aos="fade-up">
//         <div>
//           <h1>{tour?.title}</h1>
//           <p className="price">
//             ₹{basePrice} <span>/ Per Person</span>
//           </p>
//         </div>

//         <div className="tour-header-icons">
//           <div className="detail-item">
//             <RiTimeLine className="detail-icon" />
//             <div>
//               <span>Duration</span>
//               <p>{tour?.duration || "3 Days"}</p>
//             </div>
//           </div>

//           <div className="detail-item">
//             <RiUserLine className="detail-icon" />
//             <div>
//               <span>Min Age</span>
//               <p>{tour?.age || "12+"}</p>
//             </div>
//           </div>

//           <div className="detail-item">
//             <RiFlightTakeoffLine className="detail-icon" />
//             <div>
//               <span>Tour Type</span>
//               <p>{tour?.type || "Adventure"}</p>
//             </div>
//           </div>

//           <div className="detail-item">
//             <RiMapPinLine className="detail-icon" />
//             <div>
//               <span>Location</span>
//               <p>{tour?.location}</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* CONTENT SECTION */}
//       <div className="booking-content" data-aos="fade-up">

//         {/* LEFT SIDE */}
//         <div className="tour-details-left">
//           <div className="overview">
//             <h2>Overview</h2>
//             <p>
//               Explore breathtaking destinations, experience local culture,
//               and create unforgettable memories.
//             </p>
//           </div>

//           <div className="included-section">
//             <div className="included-card">
//               <h2>Included</h2>
//               <ul className="include">
//                 <li>Pick & Drop</li>
//                 <li>Hotel Stay</li>
//                 <li>Tour Guide</li>
//                 <li>Cruise Dinner</li>
//               </ul>
//             </div>

//             <div className="excluded-card">
//               <h2>Excluded</h2>
//               <ul className="exclude">
//                 <li>Flight Tickets</li>
//                 <li>Insurance</li>
//                 <li>Extra Activities</li>
//               </ul>
//             </div>
//           </div>

//           <div className="trip-plan">
//             <h2>Tour Plan</h2>
//             {tripPlan.map((item, index) => (
//               <Accordian
//                 key={index}
//                 title={item.title}
//                 desc={item.desc}
//                 active={active}
//                 setActive={setActive}
//               />
//             ))}
//           </div>
//         </div>

//         {/* RIGHT SIDE — FORM */}
//         <div className="booking-form" data-aos="fade-up">
//           <h2>Book This Tour</h2>

//           {/* PRICE SUMMARY */}
//           <div className="price-box">
//             <p><strong>Price per Person:</strong> ₹{basePrice}</p>
//             <p><strong>Travellers:</strong> {travelers}</p>
//             <p style={{ fontWeight: "bold", color: "green" }}>
//               Total Price: ₹{totalPrice}
//             </p>
//           </div>

//           <form ref={formRef}>
//             <input type="text" name="fullName" placeholder="Full Name" required />

//             <input type="email" name="email" placeholder="Email" required />

//             <input type="tel" name="phone" placeholder="Phone Number" required />

//             <input
//               type="number"
//               name="travelers"
//               min="1"
//               value={travelers}
//               onChange={(e) => setTravelers(Number(e.target.value))}
//               placeholder="Travellers"
//               required
//             />

//             <input type="date" name="date" required />

//             <select name="packageType" required>
//               <option value="">Select Package Type</option>
//               <option value="Standard">Standard</option>
//               <option value="Luxury">Luxury</option>
//               <option value="Honeymoon">Honeymoon</option>
//               <option value="Family">Family</option>
//             </select>

//             <input type="text" value={`₹${totalPrice}`} readOnly />

//             <textarea name="message" placeholder="Special Requests..." />

//             {/* FINAL SINGLE BUTTON */}
//             <button
//               onClick={handleBookingAndPayment}
//               className="book-btn"
//               disabled={sending}
//             >
//               {sending ? "Processing..." : "BOOK & PAY"}
//             </button>
//           </form>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default TravelBooking;


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

  // ⭐ BASE PRICE
  const basePrice = Number(tour?.discountPrice || tour?.price || 0);

  // ⭐ LIVE TOTAL CALCULATOR
  const [travelers, setTravelers] = useState(1);
  const totalPrice = basePrice * travelers;

  const [sending, setSending] = useState(false);
  const [active, setActive] = useState("");
  const [status, setStatus] = useState("");

  // ⭐ LOAD RAZORPAY
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // ⭐ SAVE TO FIREBASE
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
        paymentId: paymentId,
        createdAt: new Date().toISOString(),
      });
    } catch (err) {
      console.error("Firestore Error:", err);
    }
  };

  // ⭐ BOOK + PAY HANDLER
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
          // ⭐ write Razorpay paymentId into hidden input
          formRef.current.paymentId.value = response.razorpay_payment_id;

          // ⭐ save to Firebase
          await saveBookingToFirebase(response.razorpay_payment_id);

          // ⭐ send email
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

  // AOS
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  // TRIP PLAN
  const tripPlan = [
    { title: "Day 1: Arrival & City Tour", desc: "Arrival & evening sightseeing." },
    { title: "Day 2: Cultural Day", desc: "Museum & historical tour." },
    { title: "Day 3: Adventure Day", desc: "Kayaking, hiking & campfire." },
    { title: "Day 4: Shopping & Relax", desc: "Markets, spa & leisure time." },
    { title: "Day 5: Departure", desc: "Farewell breakfast & checkout." },
  ];

  return (
    <div className="travel-booking-page" data-aos="fade-up">
      {/* BANNER */}
      <div className="tour-banner">
        <img
          src={
            tour?.image ||
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          }
          alt={tour?.title}
        />
      </div>

      {/* HEADER */}
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

      {/* CONTENT */}
      <div className="booking-content" data-aos="fade-up">
        {/* LEFT */}
        <div className="tour-details-left">
          <div className="overview">
            <h2>Overview</h2>
            <p>
              Explore breathtaking destinations, experience local culture,
              and create unforgettable memories.
            </p>
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

        {/* RIGHT — BOOKING FORM */}
        <div className="booking-form" data-aos="fade-up">
          <h2>Book This Tour</h2>

          <div className="price-box">
            <p><strong>Price per Person:</strong> ₹{basePrice}</p>
            <p><strong>Travellers:</strong> {travelers}</p>
            <p style={{ fontWeight: "bold", color: "green" }}>
              Total Price: ₹{totalPrice}
            </p>
          </div>

          {/* ⭐ THE UPDATED FORM */}
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
              placeholder="Travellers"
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

            {/* Visible total */}
            <input type="text" value={`₹${totalPrice}`} readOnly />

            {/* Hidden fields for EmailJS */}
            <input type="hidden" name="totalPrice" value={totalPrice} />
            <input type="hidden" name="tourName" value={tour?.title || ""} />
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
