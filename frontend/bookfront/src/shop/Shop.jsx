import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Shop.css';
import axios from 'axios';

const Shop = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:3000/getbooks');
      setItems(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleBuyNowClick = (book) => {
    navigate(`/checkout`, { state: { book } }); // Navigate to the checkout page with the book data
  };

  return (
    <div className="shop-container">
      <div className="grid-container">
        {items.map((item) => (
          <div key={item.id} className="grid-item">
            <Link to={`/book/${item.id}`}>
              <div className="image-container">
                <img className="book-image" src={item.image_url} alt={item.title} />
              </div>
            </Link>
            <p>{item.id}</p>
            <p>{item.title}</p>
            <p>{item.subtitle}</p>
            <p>{item.description}</p>
            <button className="buy-now-button" onClick={() => handleBuyNowClick(item)}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
