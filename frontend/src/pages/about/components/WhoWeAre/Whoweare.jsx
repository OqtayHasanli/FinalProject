import React from 'react'
import "./whoweare.scss"
import photo from "./image/about-us.jpg"
import { FaCheckCircle } from "react-icons/fa";

const Whoweare = () => {
    return (
        <div className='mainwhoweare'>
            <div className='container'>
                <div className='header'>
                    <h2>
                        WHO WE ARE & WHAT WE DO
                    </h2>
                    <p>
                        CrossFit is a cutting-edge functional fitness system that can help everyday men. There is a significant portion of the population here in North America, that actually want and need success to be hard!
                    </p>
                </div>
                <img src={photo} alt="" />
                <div className='bottomside'>
                    <div className='text'>
                        <h4>
                            ABOUT US
                        </h4>
                        <p>Having a baby can be a nerve wracking experience for new parents – not the nine months of pregnancy, I’m talking about after the infant is brought home from the hospital. It’s always the same thing, by the time they have their third child they have it all figured out, but with number one it’s a learning thing.</p>
                        <p>Baby monitors help you hear your baby’s needs without you having to be in the room with the baby. Some baby monitors are portable, or “mobile” and are small enough that you can carry it in your pocket as you do your daily chores around the house. Depending on your price range it’s best to have a base unit that plugs into the wall. The receiving unit can be like your portable phone, you can carry it around with you, and plug it back into the base unit to be recharged.</p>
                    </div>
                    <div className='text'>
                        <h4>
                        OUR QUALITY
                        </h4>
                        <p>Donec enim ipsum porta justo integer at velna vitae auctor integer congue magna at risus auctor purus unt pretium ligula rutrum integer sapien ultrice ligula luctus undo magna risus</p>
                        <p><FaCheckCircle className='check' />Lorem ipsum dolor sitdoni amet, consectetur dont adipis elite vivamus interdum.</p>
                        <p><FaCheckCircle className='check' />Integer pulvinar ante nulla, ac fermentum ex congue id vestibulum ensectetur.</p>
                        <p><FaCheckCircle className='check'/>Proin blandit nibh in quam semper iaculis lorem ipsum dolor salama ender.</p>
                        <p><FaCheckCircle className='check' />Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Whoweare