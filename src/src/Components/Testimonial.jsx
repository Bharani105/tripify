import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import './Testimonial.css';
import user1 from '../Assests/user1.jpg'
import user2 from '../Assests/user2.jpg'
import user3 from '../Assests/user3.jpg'
import user4 from '../Assests/user4.jpg'
import user5 from '../Assests/user5.jpg'
const testimonials = [
  {
    id: 1,
    name: "Jane Doe",
    image: user1,
    review: "This product exceeded my expectations! I would definitely recommend it to others.",
    rating: 5,
  },
  {
    id: 2,
    name: "John Smith",
    image: user2,
    review: "Great quality and fast shipping. The customer service was also very helpful.",
    rating: 4,
  },
  {
    id: 3,
    name: "Sara Lee",
    image: user3,
    review: "I love the design and the functionality of this product. It's perfect for my needs.",
    rating: 5,
  },
  {
    id: 4,
    name: "Sam Raley",
    image:user4,
    review: "Affordable and reliable. I've been using it for a while now and it hasn't disappointed.",
    rating: 4,
  },
  {
    id: 5,
    name: "Emily Watson",
    image: user5,
    review: "The best product in its category. I can't imagine going back to anything else.",
    rating: 5,
  },
  {
    id: 6,
    name: "David Lee",
    image: user3,
    review: "Solid performance and great value for money. Highly recommended!",
    rating: 5,
  },
];

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-header">
        <h1 className="testimonial-title">What Our Customers Say</h1>
        <p className="testimonial-subtitle">Hear from travelers who’ve turned their dream getaways into unforgettable adventures around the world.</p>

      </div>

      <div className="testimonial-grid">
        {testimonials.map(({ id, name, image, review, rating }) => (
          <div className="testimonial-card" key={id}>
            <div className="testimonial-quote">
              <FaQuoteLeft />
            </div>

            <p className="testimonial-text">{review}</p>

            <div className="testimonial-footer">
              <img src={image} alt={name} className="testimonial-img" />
              <div>
                <h3 className="testimonial-name">{name}</h3>
                <div className="testimonial-stars">
                  {[...Array(rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
