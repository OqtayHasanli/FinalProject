import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode';
 

const BasketPage = () => {
  const token = localStorage.getItem("token")
  const [Basket, setBasket] = useState([])

  const [Decoded, setDecoded] = useState(null)
  const userDecoded = jwtDecode(token);
  useEffect(() => {
    setDecoded(userDecoded)
  
    
  }, [])
  console.log(Basket,Decoded
  );
  

  const showBasket = () => {
    axios.put("http://localhost:3100/showBasket", {
      headers: {
        "Authorization":"Berear"+ token
      },
      body:{
        "id":"666c77bfe749249ede5f9ed6"
      }
      
        
      
    }).then((res) => {
      setBasket(res.data)
      console.log(res.data);
    })
  }
  showBasket()
  
  
  
  return (
    <>
      {/* {Basket === null ? (
        <div>Basket is Empty</div>
      ) : (
        <div>
          {Basket&&Basket.map((elem)=>{
            <p>{elem.title}</p>
            console.log(elem);
          })}
        </div> 
      )} */}
    </>
  )
}

export default BasketPage