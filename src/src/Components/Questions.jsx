import { useState, useEffect, useRef } from 'react';
import Accordian from './Accordian';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Questions.css';
import emailjs from '@emailjs/browser';

const Questions = () => {
  const [active, setActive] = useState('');
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState('');
  const formRef = useRef();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const sendInquiry = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus('');

   emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  formRef.current,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)

      .then(
        () => {
          setStatus('✅ Inquiry sent successfully!');
          setSending(false);
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          setStatus('❌ Failed to send inquiry. Please try again.');
          setSending(false);
        }
      );
  };

  return (
    <div className="questions section container">
      <div className="secHeading">
        <h3 data-aos="fade-up">Frequently Asked Questions</h3>
      </div>

      <div className="secContainer grid" data-aos="fade-up">
        <div className="accordian grid">
          <Accordian
            title="How do I choose the right travel destination for me?"
            desc="Consider your interests, budget, desired experiences, and preferred environment. Research destinations that align with your preferences and offer activities you enjoy."
            active={active}
            setActive={setActive}
          />

          <Accordian
            title="What are the best times to visit specific destinations?"
            desc="The ideal travel time depends on weather, events, and your schedule. Research the climate and seasons for your chosen location."
            active={active}
            setActive={setActive}
          />

          <Accordian
            title="How can I find budget-friendly travel options and deals?"
            desc="Look for offers during off-seasons, compare prices across platforms, and book in advance to save money."
            active={active}
            setActive={setActive}
          />

          <Accordian
            title="What essential items should I pack for my adventures?"
            desc="Essentials depend on destination and activities. Include basics like clothing, documents, toiletries, and medical supplies."
            active={active}
            setActive={setActive}
          />
        </div>

        <div className="form" data-aos="fade-up">
          <div className="secHeading">
            <h4 data-aos="fade-up">Do you have any specific questions?</h4>
            <p data-aos="fade-up">
              Please fill the form below and our team will get in touch with you as soon as possible.
            </p>
          </div>

          <form ref={formRef} onSubmit={sendInquiry} className="formContent grid" data-aos="fade-up">
            <input
              type="email"
              name="user_email"
              placeholder="Enter email"
              required
              
            />
            <textarea
              name="message"
              placeholder="Enter your question here"
              required
            ></textarea>

            <button className="btn" type="submit" disabled={sending}>
              {sending ? 'Sending...' : 'Submit Inquiry'}
            </button>

            {status && <p className="form-status" data-aos="fade-up">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Questions;
