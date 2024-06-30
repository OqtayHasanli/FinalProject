import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import "./favorite.scss"
import { FaHeartBroken } from "react-icons/fa";

const Favorite = () => {
  const token = localStorage.getItem("token")
  const [Fav, setFav] = useState([])

  const [Decoded, setDecoded] = useState([])
  const userDecoded = jwtDecode(token);

  useEffect(() => {
    setDecoded(userDecoded)
  }, [])



  useEffect(() => {
    if (Decoded) {
      showFavorite();
    }
  }, [Decoded]);

  useEffect(() => {

    showFavorite()

  }, [Fav])
  const showFavorite = () => {

    fetch("http://localhost:3100/showFavorite", {
      method: "PUT",
      headers: {
        "Authorization": "Bearer " + token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: Decoded.id
      })
    }).then(res => res.json()).then(data => setFav(data))

  }
  const addFavorite = (x) => {

    fetch("http://localhost:3100/addFavorite", {
      method: "PUT",
      headers: {
        "Authorization": "Bearer " + token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: Decoded.id,
        productId: x
      })
    }).then(res => res.json())

  }

  return (
    <>
    <HelmetProvider>
        <Helmet>
          <title>Favorite</title>
        </Helmet>
      </HelmetProvider>
      {Fav.length == 0 ? (
        <div className='emptyfav'><FaHeartBroken className='brokenheart' /><h1>Your Favorites list is Empty</h1></div>
      ) : (
        <div className='mainshop'>
          <div className='containershop'>
            {Fav.map((elem) => (

              <div key={elem._id} className='shopCard'>
                <Link className='shoplink' to={`/${elem._id}`}>
                  <img className='imageshopcard' src={elem.image} alt={elem.title} />
                </Link>
                <div className='carddesc'>
                  <h4>{elem.title}</h4>
                  <p className='desccard'>{elem.desc}</p>
                  <p className='pricecard'>{elem.price}$</p>
                </div>
                <button className='addtocard' onClick={() => {
                  addBasket(elem._id)
                }}>Add to Card</button>
                <FaHeart className={(Fav.find(item => item._id == elem._id)) ? "afterfav" : 'addfav'} onClick={() => {
                  addFavorite(elem._id)
                }} />

              </div>

            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Favorite