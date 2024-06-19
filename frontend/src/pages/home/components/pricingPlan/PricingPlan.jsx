import React from 'react'
import "./pricing.scss"
import photo from "./images/price-bg.jpg"
import { FaStar } from "react-icons/fa";
const PricingPlan = () => {
    return (
        <div className='pricingmain'>
            <img className='image' src={photo} alt="" />
            <div className='container'>
                <div className='topside'>
                    <h2>CHOOSE YOUR PRICING PLAN</h2>
                    <p>These reports started to surface when Congress was having hearings about the
                        painkiller, Vioxx. A Food and Drug Administration staff member.</p>
                </div>
                <div className='cards'>
                    <div className='card'>
                        <h4>NORMAL</h4>
                        <div className='pricemonth'>
                            

                            
                            <div className='price'>
                            <p>$</p><h4>55</h4>

                            </div>
                            <p>
                            MONTHLY
                        </p>
                        </div>
                        <div className='phars'>
                            <p>Unlimited access to the gym</p>
                            <p>1 classes per week</p>
                            <p>FREE drinking package</p>
                            <p>1 Free personal training</p>
                        </div>
                        <button>
                            GET STARTED
                        </button>
                        

                    </div>
                    <div className='card'>
                    <FaStar className='favorite' />
                        <h4>PROFESSIONAL</h4>
                        <div className='pricemonth'>
                            

                            
                            <div className='price'>
                            <p>$</p><h4>95</h4>

                            </div>
                            <p>
                            MONTHLY
                        </p>
                        </div>
                        <div className='phars'>
                            <p>Unlimited access to the gym</p>
                            <p>2 classes per week</p>
                            <p>FREE drinking package</p>
                            <p>2 Free personal training</p>
                        </div>
                        <button>
                            GET STARTED
                        </button>
                        

                    </div>
                    <div className='card'>
                        <h4>ADVANCED</h4>
                        <div className='pricemonth'>
                            

                            
                            <div className='price'>
                            <p>$</p><h4>165</h4>

                            </div>
                            <p>
                            MONTHLY
                        </p>
                        </div>
                        <div className='phars'>
                            <p>Unlimited access to the gym</p>
                            <p>6 classes per week</p>
                            <p>FREE drinking package</p>
                            <p>5 Free personal training</p>
                        </div>
                        <button>
                            GET STARTED
                        </button>
                        

                    </div>
                    

                </div>

            </div>
        </div>
    )
}

export default PricingPlan