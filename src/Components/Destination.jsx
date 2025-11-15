import React , {useEffect} from 'react'
import { MdLocationPin } from 'react-icons/md'
import { BsFillCreditCardFill } from 'react-icons/bs'
import { BsFillCalendarDateFill } from 'react-icons/bs'
import { BiSearchAlt } from 'react-icons/bi'
import { TiLocation } from 'react-icons/ti'

import img1 from '../Assests/img1.jpg'
import img2 from '../Assests/img2.jpg'
import img3 from '../Assests/img3.jpg'
import img4 from '../Assests/img4.jpg'
import img5 from '../Assests/img5.jpg'
import img6 from '../Assests/img3.jpg'
import img7 from '../Assests/img1.jpg'
import img8 from '../Assests/img4.jpg'

import './Destination.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const destination = [
  {
    id: 1,
    img: img1,
    name: 'Seychelles Island',
    location: 'Indian Ocean',
    rating: 4.7
  },
  {
    id: 2,
    img: img2,
    name: 'Bali',
    location: 'Indonesia',
    rating: 4.8
  },
  {
    id: 3,
    img: img3,
    name: 'Santorini',
    location: 'Greece',
    rating: 4.6
  },
  {
    id: 4,
    img: img4,
    name: 'Swiss Alps',
    location: 'Switzerland',
    rating: 4.9
  },
  {
    id: 5,
    img: img5,
    name: 'Maui Beach',
    location: 'Hawaii, USA',
    rating: 4.5
  },
  {
    id: 6,
    img: img6,
    name: 'Maui Beach',
    location: 'Hawaii, USA',
    rating: 4
  },
  {
    id: 7,
    img: img7,
    name: 'Maui Beach',
    location: 'Hawaii, USA',
    rating: 4.6
  },
  {
    id: 8,
    img: img8,
    name: 'Maui Beach',
    location: 'Hawaii, USA',
    rating: 4.2
  }
]

const Destination = () => {

  useEffect(()=>{
      Aos.init({duration:2000})
    },[])

  return (
    <div className='destination section container'>
      <div className="secContainer">
        <div className="secTitle">
            <span className="redText" data-aos='fade-up'>
                EXPLORE NOW
            </span>
            <h3 data-aos='fade-up'>Find Your Dream Destination</h3>
            <p data-aos='fade-up'>Fill in the Fields below to find the best spot for your next tour</p>
        </div>

        <div className="searchField grid">
            <div className="inputField flex" data-aos='fade-up'>
                <MdLocationPin className='icon'/>
                <input type="text" placeholder='Location' />
            </div>
            <div className="inputField flex" data-aos='fade-up'>
                <BsFillCreditCardFill className='icon'/>
                <input type="text" placeholder='Budget' />
            </div>
            <div className="inputField flex" data-aos='fade-up'>
                <BsFillCalendarDateFill className='icon'/>
                <input type="text" placeholder='Date' />
            </div>

            <button className="btn flex" data-aos='fade-up'>
                <BiSearchAlt className='icon'/>
                Search
            </button>
        </div>

        <div className="secMenu">
            <ul className="flex" data-aos='fade-up'>
                <li className="active">All</li>
                <li>Recommended</li>
                <li>Beach</li>
                <li>Park</li>
                <li>Nature</li>
                <li>Mountain</li>
            </ul>
        </div>

        <div className="destinationContainer grid">
            {destination.map((des) => {
                return (
                    <div className="singleDestination" key={des.id} data-aos='fade-up'>
                        <div className="imgDiv" data-aos='zoom-in'>
                            <img src={des.img} alt="Destination Image" />

                            <div className="descInfo flex">
                                <div className="text">
                                    <span className="name">{des.name}</span>
                                    <p className="flex">
                                        <TiLocation className="icon"/>
                                       {des.location}
                                    </p>
                                </div>
                                <span className='rating'>
                                    {des.rating}
                                </span>
                            </div>
                        </div>
                    </div>
                )
            })}
           

        </div>
      </div>
    </div>
  )
}

export default Destination
