import React from 'react'
import "./ourtrainers.scss"
import trainer1 from "./images/trainer-1.jpg"
import trainer2 from "./images/trainer-2.jpg"
import trainer3 from "./images/trainer-3.jpg"
import trainer4 from "./images/trainer-4.jpg"

const Ourtrainers = () => {
    return (
        <div className='mainOurtrainers'>
            <div className='container'>
                <h1>
                    OUR TRAINER
                </h1>
                <p>
                    Our Crossfit experts can help you discover new training techniques.
                </p>
                <div className='trainers'>
                    <div className='pair'>
                        <div className='trainer'>

                            <img src={trainer1} alt="" />

                            <div className='bottomside'>
                                <h2>
                                    Becky Taylor
                                </h2>
                                <p>
                                    - Trainer

                                </p>
                            </div>


                        </div>
                        <div className='trainer'>

                            <img src={trainer2} alt="" />

                            <div className='bottomside'>
                                <h2>
                                    Noah Leonard
                                </h2>
                                <p>
                                    - Trainer

                                </p>
                            </div>


                        </div>

                    </div>
                    <div className='pair'>
                        <div className='trainer'>

                            <img src={trainer3} alt="" />

                            <div className='bottomside'>
                                <h2>
                                    Evelyn Fields
                                </h2>
                                <p>
                                    - Trainer

                                </p>
                            </div>


                        </div>
                        <div className='trainer'>

                            <img src={trainer4} alt="" />

                            <div className='bottomside'>
                                <h2>
                                    Leroy Guzman
                                </h2>
                                <p>
                                    - Manager

                                </p>
                            </div>


                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Ourtrainers