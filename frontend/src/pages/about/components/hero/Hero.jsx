import React from 'react'
import photo from "./images/about-bread.jpg"
import "./hero.scss"
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const Hero = () => {
  return (
    <div className='mainAboutHero'>
        <img src={photo} alt="" />
        <div className='container'>
            <h2>
            ABOUT US
            </h2>
            <div className='homeabout'>
            <FaHome className='icon' /> Home <IoIosArrowForward className='icon' /> About Us
            </div>

        </div>
    </div>
  )
}

export default Hero