import React,{useEffect} from 'react'
import './Reviews.css'
import { AiFillStar } from 'react-icons/ai'
import user1 from '../Assests/user1.jpg'
import user2 from '../Assests/user2.jpg'
import user3 from '../Assests/user3.jpg'
import user4 from '../Assests/user4.jpg'
import user5 from '../Assests/user5.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'
const Reviews = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className='review section container'>
      <div className="secContainer grid">
        <div className="textDiv">
            <span className="redText" data-aos='fade-up'>
                FROM OUR CLIENTS
            </span>
            <h3 data-aos='fade-up'>
                Real Travel History From Our Beloved Clients
            </h3>
            <p data-aos='fade-up'>
                By choosing us as their tour agency, customers can expect an enriching and enjoyable travel experince, filled with unformatable memories that will last a lifetime.
            </p>
            <span className="stars flex" data-aos='fade-up'>
                <AiFillStar className="icon"/>
                <AiFillStar className="icon"/>
                <AiFillStar className="icon"/>
                <AiFillStar className="icon"/>
                <AiFillStar className="icon"/>
            </span>

            <div className="clientsImages flex">
                <img src={user1} alt="" data-aos='fade-up'/>
                <img src={user2} alt="" data-aos='fade-up'/>
                <img src={user3} alt="" data-aos='fade-up'/>
                <img src={user4} alt="" data-aos='fade-up'/>
            </div>
        </div>

        <div className="imgDiv">
          <img src={user5} alt="" data-aos='fade-down'/>
        </div>
      </div>
    </div>
  )
}

export default Reviews
