import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import "./detail.scss"
import axios from 'axios';
import { FaHeart } from "react-icons/fa";
const Detail = () => {

  const [detail, setdetail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3100/products/${id}`)
      .then((res) => { setdetail(res.data), console.log(res.data); }).catch((err) => console.error('Axios error:', err));;

  }, [id]);
  return (
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
          <button className='addtocard'>Add to Card</button>
          <FaHeart className='addfav' />

          </div>
        </div>

      </div>
    </div>

  )
}

export default Detail