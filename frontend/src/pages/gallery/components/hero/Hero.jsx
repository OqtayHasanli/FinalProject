import React from 'react'
import photo from "../../../about/components/hero/images/about-bread.jpg"
import "../../../about/components/hero/hero.scss"
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const Hero = () => {
    return (
        <div className='mainAboutHero'>
            <img src={photo} alt="" />
            <div className='container'>
                <h2>
                    OUR GALLERY
                </h2>
                <div className='homeabout'>
                    <FaHome className='icon' /> Home <IoIosArrowForward className='icon' /> Gallery
                </div>

            </div>
        </div>
    )
}

export default Hero