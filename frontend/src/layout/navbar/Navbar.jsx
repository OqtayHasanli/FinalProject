import React from 'react'
import "./navbar.scss"
import logo from "../../assets/images/logo.png"
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";



const Navbar = () => {
  return (
    <div className='mainnav'>
      <div className='containNavbar'>
        <img className='navbarimage' src={logo} alt="" />
        <ul className='navbarul'>

          <Link className='linknav' to={"home"}> <li className='navlist'>Home</li></Link>
          <li className='navlist'>About</li>
          <li className='navlist'>Gallery</li>
          <li className='navlist'>Contacts</li>
          <Link className='linknav' to={"shop"}> <li className='navlist'>Shop</li></Link>
        </ul>
        <div className='socialnavbar'>
          <FaInstagram className='navsocial' />
          <FaTwitter className='navsocial' />
          <FaYoutube className='navsocial' />

        </div>

      </div>

    </div>
  )
}

export default Navbar