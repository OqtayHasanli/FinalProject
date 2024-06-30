import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import "./basket.scss"
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import { SlBasket } from "react-icons/sl";

const BasketPage = () => {
  const token = localStorage.getItem("token")
  const [Basket, setBasket] = useState([])

  const [Decoded, setDecoded] = useState([])
  const userDecoded = jwtDecode(token);

  useEffect(() => {
    setDecoded(userDecoded)
  }, [])

  console.log(Basket);

  useEffect(() => {
    if (Decoded) {
      showBasket();
    }
  }, [Decoded]);

  const showBasket = () => {

    fetch("http://localhost:3100/showBasket", {
      method: "PUT",
      headers: {
        "Authorization": "Bearer " + token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: Decoded.id
      })
    }).then(res => res.json()).then(data => setBasket(data))

  }







  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Basket</title>
        </Helmet>
      </HelmetProvider>
      {Basket.length == 0 ? (
         <div className='emptyfav'><SlBasket className='emptybasket'/><h1>Your Basket is Empty</h1></div>
      ) : (
        <div className='mainbasket'>
          <div className='container'>
            {...Basket.map((elem) => (

              <div className='cardbasket'>
                <Link className='shoplink' to={`/${elem.productId._id}`}>
                  <div className='imagediv'>
                    <img src={elem.productId.image} alt="" />
                  </div>
                </Link>
                <div className='texts'>
                  <h6>
                    {elem.productId.title}
                  </h6>
                  <p>
                    {elem.productId.desc}
                  </p>
                </div>
                <div className='countdiv'>
                  <button>-</button>
                  {elem.count}
                  <button>+</button>
                </div>
                <div className='pricediv'>
                  <div>Price: {elem.productId.price * elem.count}$</div>
                </div>
                <div className='deletebtn'>
                  <MdDelete className='delete' />
                  Delete
                </div>

              </div>

            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default BasketPage