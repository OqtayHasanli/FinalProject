import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Navbar from './navbar/Navbar';
import Myfooter from './footer/Myfooter';

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Myfooter/>
    </>
  )
}

export default Layout