import React from 'react'
import "./whypeople.scss"
import { ImHeadphones } from "react-icons/im";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaHeartbeat } from "react-icons/fa";
import { LiaDumbbellSolid } from "react-icons/lia";
import { MdOutlineWork } from "react-icons/md";
import { FaAppleAlt } from "react-icons/fa";

const Whypeople = () => {
    return (
        <div className='mainwhypeople'>
            <div className='container'>
                <div className='topside'>
                    <h2>
                        WHY PEOPLE CHOOSE US
                    </h2>
                    <p>
                        Our sport experts and latest sports equipment are the winning combination.
                    </p>

                </div>
                <div className='content'>
                    <div className='item1'>
                        <ImHeadphones className='icon' />
                        <h4>
                            SUPPORT 24/24
                        </h4>
                        <p>One of the best ways to make a great vacation quickly horrible is to choose the wrong accommodations for your trip.</p>


                    </div>
                    <div className='item2'>
                    <FaPeopleGroup className='icon' />
                        <h4>
                        OUR TRAINER
                        </h4>
                        <p>If you are an infrequent traveler you may need some tips to keep the wife happy while you are jet setting around the globe.</p>


                    </div>
                    <div className='item3'>
                    <FaHeartbeat className='icon' />
                        <h4>
                        PERSONALIZED SESSIONS
                        </h4>
                        <p>To succeed at any endeavor, you must stay the course…no matter what the cost! Here are some surefire tips to help you on your journey.</p>


                    </div>
                    <div className='item4'>
                    <LiaDumbbellSolid className='icon' />
                        <h4>
                        OUR EQUIPMENT
                        
                        </h4>
                        <p>Rugby and Stratford-upon-Avon. Additionally, there are many things to see and do in and around Coventry itself.</p>


                    </div>
                    <div className='item5'>
                    <MdOutlineWork className='icon' />
                        <h4>
                        CLASSES DAILY
                        </h4>
                        <p>We would just not have the will in us to go about our daily lives. Its motivation that helps us get through the most mundane.</p>


                    </div>
                    <div className='item6'>
                    <FaAppleAlt className='icon'/>
                        <h4>
                        FOCUS ON YOUR HEALTH
                        </h4>
                        <p>But there is only so far we can go within the constraints of a family budget in building the perfect telescopic operation.</p>


                    </div>
                </div>

            </div>

        </div>
    )
}

export default Whypeople