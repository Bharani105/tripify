import React, { useEffect } from "react";
import "./About_Features.css";
import {
  FaMoneyBillAlt,
  FaSuitcaseRolling,
  FaTrophy,
  FaGlobeAsia,
  FaPlaneDeparture,
  FaHeart,
} from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const About_Features = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="about-features-section">
      <div className="about-features-header" data-aos="fade-up">
        <h4 className="about-features-subtitle">What We Do</h4>
        <h2 className="about-features-title">We Arrange The Best Tour Ever Possible</h2>
        <p className="about-features-description">
          When an unknown printer took a galley of type and scrambled it to make a type specimen
          book — it has survived not only five centuries but also the leap into electronic typesetting.
        </p>
      </div>

      <div className="about-features-grid" data-aos="fade-up">
        <FeatureCard
          icon={<FaMoneyBillAlt className="about-feature-icon" />}
          title="Ultimate Flexibility"
          text="Enjoy complete freedom — reschedule or customize your trips anytime without hassle or extra cost."
        />

        <FeatureCard
          icon={<FaSuitcaseRolling className="about-feature-icon" />}
          title="Memorable Experiences"
          text="We craft every journey with care, ensuring you live unforgettable moments and create lifelong memories."
        />

        <FeatureCard
          icon={<FaTrophy className="about-feature-icon" />}
          title="Award-Winning Support"
          text="Our dedicated travel experts are available 24/7 to assist you throughout your adventure, wherever you go."
        />

        <FeatureCard
          icon={<FaGlobeAsia className="about-feature-icon" />}
          title="Global Destinations"
          text="Explore over 150+ countries across 6 continents — from hidden gems to the most iconic landmarks."
        />

        <FeatureCard
          icon={<FaPlaneDeparture className="about-feature-icon" />}
          title="Seamless Travel"
          text="From flights and hotels to transfers and guides — we handle every detail for a smooth, worry-free journey."
        />

        <FeatureCard
          icon={<FaHeart className="about-feature-icon" />}
          title="Trusted by Travelers"
          text="Thousands of happy travelers rely on us each year for their dream vacations — your satisfaction is our success."
        />
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, text }) => {
  return (
    <div className="about-feature-card" data-aos="fade-up">
      <div className="about-feature-icon-box">{icon}</div>
      <h3 className="about-feature-heading">{title}</h3>
      <p className="about-feature-text">{text}</p>
    </div>
  );
};

export default About_Features;
