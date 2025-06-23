import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/CartContext";
import "./ProductDetails.css";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error("Failed to fetch product", err));
  }, [id]);

  if (!product) {
    return <div className="loading">Loading...</div>;
  }

  return (
   <div className="product-detail">
  <div className="product-img-box">
    <img src={product.image} alt={product.title} />
  </div>
  <div className="product-info">
    <h2>{product.title}</h2>
    <p>{product.description}</p>
    <div className="price">₹ {product.price}</div>
    <button onClick={() => addToCart(product)}>Add to Cart</button>
  </div>
</div>

  );
}
