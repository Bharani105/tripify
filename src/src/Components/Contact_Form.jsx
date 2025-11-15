import React, { useEffect, useRef, useState } from "react";
import "./Contact_Form.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact_Form = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_w3wilsg",
        "template_bqjsmu2", 
        formRef.current,   
        "_eFL6DRzf9_4Z3roQ"
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setSending(false);
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          setStatus("❌ Failed to send message. Please try again.");
          setSending(false);
        }
      );
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="contact-section">
      <div className="contact-container" data-aos='fade-up'>
        <div className="contact-info" data-aos='fade-up'>
          <h5 className="contact-subtitle">Get In Touch</h5>
          <h2 className="contact-title">We’d Love To Hear From You</h2>
          <p className="contact-description" data-aos='fade-up'>
            Whether you’re planning your next vacation or just want to learn more about our travel services,
            our team is ready to help you every step of the way. Let’s make your next adventure unforgettable!
          </p>

          <div className="contact-details">
            <div className="contact-card" data-aos='fade-up'>
              <FaEnvelope className="contact-icon" />
              <div>
                <h4>Email</h4>
                <p>info@travelagency.com</p>
              </div>
            </div>

            <div className="contact-card" data-aos='fade-up'>
              <FaPhoneAlt className="contact-icon" />
              <div>
                <h4>Phone</h4>
                <p>+1 (234) 567-890</p>
              </div>
            </div>

            <div className="contact-card" data-aos='fade-up'>
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h4>Location</h4>
                <p>123 Adventure Street, New York, USA</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form ref={formRef} onSubmit={sendEmail}>
            <div className="form-group" data-aos='fade-up'>
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
            </div>

            <div className="form-group" data-aos='fade-up'>
              <input type="text" name="subject" placeholder="Subject" required />
            </div>

            <div className="form-group" data-aos='fade-up'>
              <textarea name="message" rows="6" placeholder="Your Message" required></textarea>
            </div>

            <button type="submit" className="submit-btn" data-aos='fade-up' disabled={sending}>
              {sending ? "Sending..." : <>Send Message <FaArrowRight className="arrow-icon" /></>}
            </button>

            {status && <p className="form-status">{status}</p>}
          </form>
        </div>
      </div>

      <div className="contact-map" data-aos="fade-up">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps?q=25+Ocean+Avenue,+California,+USA&output=embed"
          width="100%"
          height="450"
          style={{ border: 0, borderRadius: '12px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact_Form;
