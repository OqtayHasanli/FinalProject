import React, { useEffect, useState } from 'react';
import "./navbar.scss";
import logo from "../../assets/images/logo.png";
import { Link, useNavigate } from 'react-router-dom';
import { FaCircleUser } from "react-icons/fa6";
import { jwtDecode } from 'jwt-decode';

const Navbar = () => {
  const [isProfileVisible, setProfileVisible] = useState(false);
  // ----------------------------------------
  const [Decoded, setDecoded] = useState(null)
  const token = localStorage.getItem("token")
  const userDecoded = jwtDecode(token);
  useEffect(() => {
    setDecoded(userDecoded)
  }, [])
  // ------------------------------------------

  const toggleProfileVisibility = () => {
    setProfileVisible(!isProfileVisible);
  };
  const Navigate = useNavigate()

  return (
    <div className='mainnav'>
      <div className='containNavbar'>
        <img className='navbarimage' src={logo} alt="Logo" />
        <ul className='navbarul'>
          <Link className='linknav' to={"home"}> <li className='navlist'>Home</li></Link>
          <Link className='linknav' to={"about"}> <li className='navlist'>About Us</li></Link>
          <Link className='linknav' to={"gallery"}> <li className='navlist'>Gallery</li></Link>
          <Link className='linknav' to={"shop"}> <li className='navlist'>Shop</li></Link>
        </ul>
        <div className='socialnavbar' onClick={toggleProfileVisibility}>
          <FaCircleUser className='profilebtn' />
          <p>Profile</p>
        </div>
        {isProfileVisible && (
          <div className='profilepage'>
            <h3>{Decoded.email}</h3>
            <div className='basketfav'>
              <Link to={"basket"}>
                <button className='mybasket'>My Basket</button>

              </Link>
              <Link to={"favorite"}>
              <button className='myfavorite'>My Favorite</button>
              </Link>
            </div>
            <button className='logutbtn' onClick={() => {
              localStorage.removeItem("token")
              Navigate("/")
            }}>Log out</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
