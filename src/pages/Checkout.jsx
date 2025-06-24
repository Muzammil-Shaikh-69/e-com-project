import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import './checkout.css';

export default function Checkout() {
  const { cartItems, removeSelectedItems } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const [checkoutItems, setCheckoutItems] = useState([]);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  });

  useEffect(() => {
    
    if (location.state?.products?.length > 0) {
      setCheckoutItems(location.state.products);
    } else {
      const selected = cartItems.filter(item => item.selected);
      setCheckoutItems(selected);
    }
  }, [location.state, cartItems]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    for (const field in form) {
      if (!form[field]) {
        toast.error(`Please fill in ${field}`);
        return;
      }
    }

    if (!form.email.includes('@') || !form.email.includes('.')) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (!/^\d{10}$/.test(form.phone)) {
      toast.error("Phone number must be exactly 10 digits");
      return;
    }

    if (checkoutItems.length === 0) {
      toast.error('No products to checkout');
      return;
    }

    localStorage.setItem('orderedItems', JSON.stringify(checkoutItems));
    toast.success('Order placed successfully!');

    if (!location.state?.products) {
      removeSelectedItems(); 
    }

    setTimeout(() => {
      navigate('/order-success');
    }, 2000);
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="checkout-content">
        <div className="checkout-summary">
          {checkoutItems.map(item => (
            <div key={item.id} className="checkout-item">
              <img src={item.image} alt={item.title} className="checkout-item-img" />
              <div className="checkout-item-info">
                <p className="checkout-item-title"><strong>{item.title}</strong></p>
                <p>₹{item.price}</p>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="checkout-form">
          <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
          <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} />
          <textarea name="address" placeholder="Shipping Address" value={form.address} onChange={handleChange} />
          <input type="text" name="city" placeholder="City" value={form.city} onChange={handleChange} />
          <input type="text" name="state" placeholder="State" value={form.state} onChange={handleChange} />
          <input type="text" name="pincode" placeholder="Pincode" value={form.pincode} onChange={handleChange} />
          <button type="submit">Place Order</button>
        </form>
      </div>
    </div>
  );
}
