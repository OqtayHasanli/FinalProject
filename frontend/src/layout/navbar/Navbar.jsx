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
        
        <Link className='linknav' to={"home"}> <li>Home</li></Link>
          <li>About</li>
          <li>Gallery</li>
          <li>Contacts</li>
          <li>Shop</li>
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