import React from 'react';
import './Shop.css'; // Import your CSS file

const Shop = () => {
  // Define an array with items, each containing id, name, and imageUrl
  const items = [
    { id: 1, name: 'Item 1', imageUrl: 'url-to-image-1.jpg' },
    { id: 2, name: 'Item 2', imageUrl: 'book1.png' },
    // Add more items as needed
  ];

  return (
    <div className="shop-container">
      <div className="grid-container">
        {items.map((item) => (
          <div key={item.id} className="grid-item">
            <img src={item.imageUrl} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
