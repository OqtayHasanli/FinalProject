import React from 'react'
import "./chooseprogram.scss"
import photo from "./images/classes-title-bg.jpg"

const ChooseProgram = () => {
  return (
    <div className='mainchoose'>
        <img className='iamge' src={photo} alt="" />
        <div className='container'>
        
            <div className='content'>
                
                <h2>CHOOSE YOUR PROGRAM</h2>
                <p>Our Crossfit experts can help you discover new training techniques and exercises that offer a dynamic and efficient full-body workout.</p>
            </div>
        </div>
    </div>
  )
}

export default ChooseProgram