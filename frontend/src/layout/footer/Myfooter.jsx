import React from 'react'
import "./footer.scss"
import logo from "../../assets/images/logo.png"
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";

const Myfooter = () => {
  return (
    <div className='mainfooter'>
      <div className='containerfooter'>
        <div className='leftside'>
          <div className='logotext'>
            <img className='logooffooter' src={logo} alt="" />
            <div className='phars'>
              <p>Despite growth of the Internet over</p>
              <p>the past seven years, the use of </p>
              <p>toll-free phone numbers in </p>
              <p>television advertising continues.</p>
            </div>
          </div>
          <div className='followus'>
            <h5>
              FOLLOW US
            </h5>
            <div className='socialmedia'>
              <FaInstagram />
              <FaTwitter />
              <FaYoutube />
            </div>
          </div>
        </div>
        <div className='ourblogs'>
          <h2>OUR BLOG</h2>
          <div className='dates'>
            <div className='date'>
              <h4>MOST PEOPLE WHO WORK</h4>
              <div className='icondate'><FaRegClock className='footerclock' />JAN 02,2019</div>

            </div>
            <div className='date'>
              <h4>CALISTHENICS WORKOUT</h4>
              <div className='icondate'><FaRegClock className='footerclock' />JAN 02,2019</div>

            </div>
            <div className='date'>
              <h4>YOGA</h4>
              <div className='icondate'><FaRegClock className='footerclock' />JAN 02,2019</div>

            </div>
          </div>

        </div>
        <div className='programs'>
          <h2>PROGRAM</h2>
          <div className='fiveprograms'>
            <h4>Bodybuilding</h4>
            <h4>Running</h4>
            <h4>Streching</h4>
            <h4>Weight Loss</h4>
            <h4>Gym Fitness</h4>
          </div>

        </div>
        <div className='getinfo'>
          <h2>GET INFO</h2>
          <div className='contacts'>
            <div className='contact'>
              <div className='logodiv'><FaPhoneAlt  className='contactlogos'/><h5>Phone:</h5></div>
              <p>(12) 345 6789</p>

            </div>
            <div className='contact'>
              <div className='logodiv'><MdOutlineMail className='contactlogos'/><h5>Email:</h5></div>
              <p>Colorlib.info@gmail.com</p>

            </div>
            <div className='contact'>
              <div className='logodiv'><MdLocationOn   className='contactlogos'/><h5>Address:</h5></div>
              <p>Iris Watson, Box 283 8562, NY</p>

            </div>
            

          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Myfooter