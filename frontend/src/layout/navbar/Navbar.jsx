import React, { useState } from 'react';
import "./navbar.scss";
import logo from "../../assets/images/logo.png";
import { Link } from 'react-router-dom';
import {FaCircleUser } from "react-icons/fa6";

const Navbar = () => {
  const [isProfileVisible, setProfileVisible] = useState(false);

  const toggleProfileVisibility = () => {
    setProfileVisible(!isProfileVisible);
  };

  return (
    <div className='mainnav'>
      <div className='containNavbar'>
        <img className='navbarimage' src={logo} alt="Logo" />
        <ul className='navbarul'>
          <Link className='linknav' to={"home"}> <li className='navlist'>Home</li></Link>
          <li className='navlist'>About</li>
          <li className='navlist'>Gallery</li>
          <li className='navlist'>Contacts</li>
          <Link className='linknav' to={"shop"}> <li className='navlist'>Shop</li></Link>
        </ul>
        <div className='socialnavbar' onClick={toggleProfileVisibility}>
          <FaCircleUser className='profilebtn' />
          <p>Profile</p>
        </div>
        {isProfileVisible && (
          <div className='profilepage'>
            <h3>gulsan@gmail.com</h3>
            <div className='basketfav'>
              <button className='mybasket'>My Basket</button>
              <button className='myfavorite'>My Favorite</button>
            </div>
            <button className='logutbtn'>Log out</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
