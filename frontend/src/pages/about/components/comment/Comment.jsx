import React from 'react'
import "./comment.scss"
import photo1 from './images/testimonial-bg.jpg'
import { FaStar } from "react-icons/fa";
import photo2 from './images/author-pic.png'

const Comment = () => {
    return (
        <div className='maincomment'>
            <img className='background' src={photo1} alt="" />
            <div className='container'>
                <div className='stars'>
                    <FaStar className='star' /> <FaStar className='star' /> <FaStar className='star' /> <FaStar className='star' /> <FaStar className='star' />
                </div>
                <h4>
                    The “Minimal-Repair Technique” is a revolutionary surgical procedure in the treatment
                    for hernia. Initially intended for correcting inguinal hernia.
                </h4>
                <div className='bottomside'>
                    <h5>
                        Stacy Mc Leelel
                    </h5>
                    <p>
                        CEP's Director
                    </p>
                    <img src={photo2} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Comment