import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode';
import { Helmet, HelmetProvider } from 'react-helmet-async';


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
      {Basket == null ? (
        <div>Basket is Empty</div>
      ) : (
        <div>
          {...Basket.map((elem) => (
            <p>{elem._id}</p>
          ))}
        </div>
      )}
    </>
  )
}

export default BasketPage