// src/pages/OrderSuccess.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './orderSuccess.css';

export default function OrderSuccess() {
  const [orderedItems, setOrderedItems] = useState([]);

  useEffect(() => {
    const storedItems = localStorage.getItem('orderedItems');
    if (storedItems) {
      setOrderedItems(JSON.parse(storedItems));
      localStorage.removeItem('orderedItems');
    }
  }, []);

  return (
    <div className="order-success-container">
      <h2>🎉 Order Successful!</h2>
      <p>Thank you for your purchase.</p>

      <div className="ordered-items">
        {orderedItems.length === 0 ? (
          <p>No items in order.</p>
        ) : (
          orderedItems.map(item => (
            <div key={item.id} className="ordered-item">
              <img src={item.image} alt={item.title} />
              <div>
                <h4>{item.title}</h4>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
          ))
        )}
      </div>

      <Link to="/products" className="continue-shopping-btn">
        🛍️ Continue Shopping
      </Link>
    </div>
  );
}
