import React from 'react'
import "./ourgallery.scss"
import photo1 from "./images/gallery-1.jpg"
import photo2 from "./images/gallery-2.jpg"
import photo3 from "./images/gallery-3.jpg"
import photo4 from "./images/gallery-4.jpg"
import photo5 from "./images/gallery-5.jpg"
import photo6 from "./images/gallery-6.jpg"
import photo7 from "./images/gallery-7.jpg"
import photo8 from "./images/gallery-8.jpg"
import photo9 from "./images/gallery-9.jpg"

const Ourgallery = () => {
  return (
    <div className='mainOurgallery'>
        <div className='container'>
            <h2>
                All Gallery
            </h2>
            <div className='photos'>
                <img src={photo1} alt="" />
                <img src={photo2} alt="" />
                <img src={photo3} alt="" />
                <img src={photo4} alt="" />
                <img src={photo5} alt="" />
                <img src={photo6} alt="" />
                <img src={photo7} alt="" />
                <img src={photo8} alt="" />
                <img src={photo9} alt="" />
            </div>

        </div>    
    </div>
  )
}

export default Ourgallery