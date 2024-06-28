import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./shop.scss";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const Shop = () => {
  const [data, setData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  //----------------------------------------------
  const token = localStorage.getItem("token")
  const [Decoded, setDecoded] = useState([])

  const userDecoded = jwtDecode(token);

  useEffect(() => {
    setDecoded(userDecoded)
  }, [])
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
  //---------------------------------------------

  useEffect(() => {
    let token = localStorage.getItem("token")
    console.log(token);
    axios.get("http://localhost:3100/products", {
      headers: {
        Authorization: `barear ${token}`
      }
    }).then((res) => {
      setData(res.data);
      setFilteredResults(res.data);
    });
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    let filteredData = data;

    if (searchValue !== '') {
      filteredData = data.filter((item) =>
        Object.values(item).join('').toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    if (minPrice || maxPrice) {
      filteredData = filterByPrice(filteredData, minPrice, maxPrice);
    }

    if (sortOrder) {
      filteredData = sortItems(filteredData, sortOrder);
    }

    setFilteredResults(filteredData);
  };

  const sortItems = (items, order) => {
    if (order === 'A-Z') {
      return [...items].sort((a, b) => a.title.localeCompare(b.title));
    } else if (order === 'Z-A') {
      return [...items].sort((a, b) => b.title.localeCompare(a.title));
    }
    return items;
  };

  const filterByPrice = (items, min, max) => {
    return items.filter(item => {
      const price = parseFloat(item.price);
      const minCondition = min !== '' ? price >= parseFloat(min) : true;
      const maxCondition = max !== '' ? price <= parseFloat(max) : true;
      return minCondition && maxCondition;
    });
  };

  const handleSort = (order) => {
    setSortOrder(order);
    let sortedData = sortItems(filteredResults, order);
    setFilteredResults(sortedData);
  };

  const handlePriceFilter = () => {
    let filteredData = data;

    if (searchInput) {
      filteredData = filteredData.filter((item) =>
        Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
      );
    }

    filteredData = filterByPrice(filteredData, minPrice, maxPrice);

    if (sortOrder) {
      filteredData = sortItems(filteredData, sortOrder);
    }

    setFilteredResults(filteredData);
  };

  const displayedData = searchInput.length > 0 || sortOrder || minPrice || maxPrice ? filteredResults : data;

  return (
    <>
      <div className='searchfilter'>
        <div className='searchfiltercontainer'>
          <div className='pricefilter'>
            <input
              type="number"
              placeholder='Min Price'
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className='priceinput'

            />
            <input
              type="number"
              placeholder='Max Price'
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className='priceinput'
            />
            <button className='applypricefilter' onClick={handlePriceFilter}>Apply</button>
          </div>

          <div className='sort'>
            <button className='sortaz' onClick={() => handleSort('A-Z')}>Sort A-Z</button>
            <button className='sortaz' onClick={() => handleSort('Z-A')}>Sort Z-A</button>
          </div>
          <div className='input'>
            <input
              type="text"
              placeholder='Search...'
              onChange={(e) => searchItems(e.target.value)}
              className='searchshop'
            />
          </div>

        </div>
      </div>
      <div className='mainshop'>
        <div className='containershop'>
          {displayedData.map((elem) => (

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
              <FaHeart className='addfav' />

            </div>

          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
