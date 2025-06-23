import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import './Products.css';
import Loader from '../components/Loader';

export default function Home() {
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=4')
      .then(res => res.json())
      .then(data => {
        setFeatured(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching featured products:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to MyShop</h1>
      <p className="home-subtitle">Explore our wide range of products!</p>

      <div className="extra-buttons">
        <Link to="/products" className="extra-btn">View All Products</Link>
        <Link to="/products?deals=true" className="extra-btn">Best Deals</Link>
      </div>

      <h2 className="section-title">Featured Products</h2>
      <div className="products-grid">
        {featured.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h4 className="product-title">
              {product.title.length > 40 ? product.title.slice(0, 40) + '...' : product.title}
            </h4>
            <p className="product-price">₹ {product.price}</p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Link to={`/product/${product.id}`} className="view-btn">
                View Product
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
