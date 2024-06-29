import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../pages/login/images/logo.png'
import "./navbar.scss"

const Navbar = () => {
  return (
    <div className='mainnav'>
      <div className='containNavbar'>
        <img className='navbarimage' src={logo} alt="Logo" />
        <ul className='navbarul'>
          <Link className='linknav' to={"users"}> <li className='navlist'>Users</li></Link>
          <Link className='linknav' to={"products"}> <li className='navlist'>Products</li></Link> 
        </ul>
      </div>
    </div>
  )
}

export default Navbar