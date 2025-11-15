import { useEffect } from 'react';
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";
import './Questions.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Accordian = ({ title, desc, active, setActive }) => {
  const isActive = active === title;

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className='accordianContainer' data-aos='fade-up'>
      <span className="title flex">
        {title}

        <span onClick={() => setActive(isActive ? "" : title)}>
          {isActive ? (
            <BsArrowUpCircle className='icon' />
          ) : (
            <BsArrowDownCircle className='icon' />
          )}
        </span>
      </span>

      <p className={`${isActive ? 'show ' : ''} description`}>
        {desc}
      </p>
    </div>
  );
};

export default Accordian;
