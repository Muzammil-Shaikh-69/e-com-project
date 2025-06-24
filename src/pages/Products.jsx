import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Products.css';
import Loader from '../components/Loader';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  if (!products.length) return <Loader />;

  return (
    <div className="products-container">
      <div className="products-hero">
      </div>

      <h2>Products</h2>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h4 className="product-title">
              {product.title.length > 40 ? product.title.slice(0, 40) + '...' : product.title}
            </h4>
            <p className="product-price">₹ {product.price}</p>
            <Link to={`/product/${product.id}`} className="view-btn">View Product</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
