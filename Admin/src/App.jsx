import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from './pages/users/Users';
import Products from './pages/products/Products';
import Layout from './layout/Layout';
import Login from './pages/login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="users" element={<Users />} />
        <Route path="products" element={<Products />} />
      </Route>
      <Route path="/" element={<Login />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
