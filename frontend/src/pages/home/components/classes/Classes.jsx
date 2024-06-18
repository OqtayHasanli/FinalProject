import React from 'react'
import "./classes.scss"
import photo1 from "./images/feature-1.jpg"
import photo2 from "./images/feature-2.jpg"
import photo3 from "./images/feature-3.jpg"

const Classes = () => {
  return (
    <div className='mainclasses'>
        <div className='groupclasses'>
            <img className='image1' src={photo1} alt="" />
            <h2>GROUP CLASSES</h2>
            <p>The Sopranos manages to address the biases
            and benefits of therapy</p>
            <button>READ MORE</button>
        </div>
        <div className='groupclasses'>
            <img className='image2' src={photo2} alt="" />
            <h2>PERSONAL TRAINING</h2>
            <p>Strep throat is very common during the flu
            seasons and it can be preceded</p>
            <button>READ MORE</button>
        </div>
        <div className='groupclasses'>
            <img className='image3' src={photo3} alt="" />
            <h2>SPORTS NUTRITION</h2>
            <p>A Human Being’s right to life implies his right to
            have the free and unrestricted</p>
            <button>READ MORE</button>
        </div>

        
    </div>
  )
}

export default Classes