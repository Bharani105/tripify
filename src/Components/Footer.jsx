import React, { useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { BiLogoMediumOld } from "react-icons/bi";
import { ImFacebook } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
// import Aos from "aos";
// import "aos/dist/aos.css";
import "./Footer.css";

const Footer = () => {
  // useEffect(() => {
  //   Aos.init({ duration: 2000 });
  // }, []);

  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="footerSection brandSection">
          <div className="footerLogo">
            <BiLogoMediumOld className="icon" />
            <NavLink to='/'><span>Tripify</span></NavLink>
          </div>
          <p className="footerDesc">
            Discover, explore, and experience the world like never before.  
            At <strong>Tripify</strong>, we help you find the perfect adventure — 
            from exotic destinations to hidden gems.
          </p>
          <div className="socials">
            <ImFacebook className="icon" />
            <BsTwitterX className="icon" />
            <AiFillInstagram className="icon" />
            <FaYoutube className="icon" />
          </div>
        </div>

        <div className="footerSection">
          <h4 className="linkTitle">Information</h4>
          <ul>
            <li> <NavLink to="/" className="navLi">
              Home
            </NavLink></li>
            <li> <NavLink to="/about" className="navLi">
              About
            </NavLink></li>
            <li> <NavLink to="/destination" className="navLi">
              Destinaton
            </NavLink></li>
            <li> <NavLink to="/tour" className="navLi">
              Tour
            </NavLink></li>
            <li> <NavLink to="/contact" className="navLi">
              Contact
            </NavLink></li>
          </ul>
        </div>

        <div className="footerSection">
          <h4 className="linkTitle">Top Destinations</h4>
          <ul>
            <li><a href="#">Bali, Indonesia</a></li>
            <li><a href="#">Paris, France</a></li>
            <li><a href="#">Swiss Alps, Switzerland</a></li>
            <li><a href="#">Kyoto, Japan</a></li>
          </ul>
        </div>

        <div className="footerSection newsletter">
          <h4 className="linkTitle">Join Our Newsletter</h4>
          <p className="newsletterText">
            Get exclusive travel deals, destination guides, and insider tips — straight to your inbox.
          </p>
          <form className="newsletterForm">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className="footerSection contact">
          <h4 className="linkTitle">Contact Us</h4>
          <p className="infoItem">
          📞 <a href="tel:+1858898747" className="hover:underline">+1 (858) 898 747</a>
          </p>
          <p className="infoItem">
          ✉️ <a href="mailto:tripify@gmail.com" className="hover:underline">tripify@gmail.com</a>
          </p>
          <p className="infoItem">
          📍 <a 
          href="https://www.google.com/maps?q=25+Ocean+Avenue,+California,+USA" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:underline"
          >
          25 Ocean Avenue, California, USA
          </a>
          </p>
        </div>

      </div>

      <div className="footerBottom">
        <p>© 2025 Tripify. All rights reserved.</p>
        <p>Designed with ❤️ by Tripify Team</p>
      </div>
    </footer>
  );
};

export default Footer;
