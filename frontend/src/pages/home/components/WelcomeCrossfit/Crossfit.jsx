import React from 'react'
import "./crossfit.scss"
import photo from "./images/home-about.jpg"

const Crossfit = () => {
    return (
        <div className='maincrosfit'>
            <div className='container'>
                <div className='leftside'>
                    <h2>WELCOME TO CROSSFIT</h2>
                    <h4>CrossFit is a cutting-edge functional fitness system that can help everyday men.</h4>
                    <p>Success isn’t really that difficult. There is a significant portion of the population here in North America, that actually want and need success to be hard! For those of you who are serious about having more, doing more, giving more and being more.</p>
                    <button>Learn more</button>
                </div>
                <img src={photo} alt="" />
            </div>
        </div>
    )
}

export default Crossfit