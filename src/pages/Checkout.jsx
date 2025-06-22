import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './checkout.css';

export default function Checkout() {
  const { cartItems, removeSelectedItems } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    for (const field in form) {
      if (!form[field]) {
        toast.error(`Please fill in ${field}`);
        return;
      }
    }

    const selectedItems = cartItems.filter(item => item.selected);
    if (selectedItems.length === 0) {
      toast.error('Please select at least one item to checkout');
      return;
    }
    
    localStorage.setItem('orderedItems', JSON.stringify(selectedItems));

    toast.success('🎉 Order placed successfully!');
    removeSelectedItems();

    setTimeout(() => {
      navigate('/order-success');
    }, 2000);
  };

  return (
    <div className="checkout-container">
      <h2>🧾 Checkout</h2>
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
  );
}
