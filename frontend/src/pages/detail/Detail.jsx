import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import "./detail.scss"
import axios from 'axios';
import { FaHeart } from "react-icons/fa";
import { jwtDecode } from 'jwt-decode';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Detail = () => {

  const [detail, setdetail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3100/products/${id}`)
      .then((res) => { setdetail(res.data), console.log(res.data); }).catch((err) => console.error('Axios error:', err));;

  }, [id]);

  const token = localStorage.getItem("token")


  const [Decoded, setDecoded] = useState([])
  const userDecoded = jwtDecode(token);

  useEffect(() => {
    setDecoded(userDecoded)
  }, [])


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
  const addBasket = (x) => {

    fetch("http://localhost:3100/addBasket", {
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


  const [Fav, setFav] = useState([])
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
  useEffect(() => {

    showFavorite()

  }, [Fav])
  useEffect(() => {
    if (Decoded) {
      showFavorite();
    }
  }, [Decoded]);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Detail</title>
        </Helmet>
      </HelmetProvider>
      <div className='maindetail'>
        <div className='container'>
          <img src={detail.image} alt="image" />
          <div className='description'>
            <div className='texts'>
              <h4>{detail.title}</h4>
              <p className='desccard'>{detail.desc}</p>
              <p className='pricecard'>{detail.price}$</p>

            </div>
            <div className='buttons'>
              <button className='addtocard' onClick={() => {
                addBasket(detail._id)
                toast("Added to Cart");
              }}>Add to Card</button>
              <FaHeart className={(Fav.find(item => item._id == detail._id)) ? "afterfav" : 'addfav'} onClick={() => {
                addFavorite(detail._id)
              }} />

            </div>
          </div>

        </div>
      </div>
    </>

  )
}

export default Detail