// import React , {useEffect} from 'react'
// import './Middle.css'
// import Aos from 'aos'
// import 'aos/dist/aos.css'

// const Middle = () => {

//   useEffect(()=>{
//       Aos.init({duration:2000})
//     },[])
    
//   return (
//     <div className='middle section'>
//       <div className="secContainer container" data-aos='fade-up'>
//         <div className="grid">
//             <span className="flex" >
//                 <h1>10</h1>
//                 <p>World of Experince</p>
//             </span>

//             <span className="flex" >
//                 <h1>2k+</h1>
//                 <p>Fine Destination</p>
//             </span>

//             <span className="flex" >
//                 <h1>10k+</h1>
//                 <p>Customer Reviews</p>
//             </span>

//             <span className="flex" >
//                 <h1>4.8</h1>
//                 <p>Overall Rating</p>
//             </span>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Middle

import React, { useEffect, useState } from 'react';
import './Middle.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Middle = () => {
  const [count, setCount] = useState({
    experience: 0,
    destination: 0,
    reviews: 0,
    rating: 0,
  });

  useEffect(() => {
    Aos.init({ duration: 2000 });

    let exp = 0;
    let dest = 0;
    let rev = 0;
    let rate = 0;

    const interval = setInterval(() => {
      exp = exp < 10 ? exp + 1 : 10;
      dest = dest < 2000 ? dest + 40 : "2k";
      rev = rev < 10000 ? rev + 150 : "10k";
      rate = rate < 4.8 ? parseFloat((rate + 0.1).toFixed(1)) : 4.8;

      setCount({
        experience: exp,
        destination: dest,
        reviews: rev,
        rating: rate,
      });

      if (exp === 10 && dest === 2000 && rev === 10000 && rate === 4.8) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="middle section">
      <div className="secContainer container" data-aos="fade-up">
        <div className="grid">
          <span className="flex">
            <h1>{count.experience}</h1>
            <p>World of Experience</p>
          </span>

          <span className="flex">
            <h1>{count.destination.toLocaleString()}+</h1>
            <p>Fine Destination</p>
          </span>

          <span className="flex">
            <h1>{count.reviews.toLocaleString()}+</h1>
            <p>Customer Reviews</p>
          </span>

          <span className="flex">
            <h1>{count.rating}</h1>
            <p>Overall Rating</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Middle;
