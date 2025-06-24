import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './cart.css';

export default function Cart() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    toggleItemSelection
  } = useCart();

  const total = cartItems
    .filter(item => item.selected)
    .reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <div className="cart-item" key={item.id}>
                <input
                  type="checkbox"
                  checked={item.selected}
                  onChange={() => toggleItemSelection(item.id)}
                />
                <img src={item.image} alt={item.title} />
                <div className="cart-details">
                  <h4>{item.title}</h4>
                  <p>Price: ₹{item.price}</p>
                  <p>Subtotal: ₹{(item.price * item.quantity).toFixed(2)}</p>

                  <div className="quantity-controls">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      disabled={item.quantity === 1}
                      className={`quantity-btn ${item.quantity === 1 ? 'disabled' : ''}`}
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total (Selected Items): ₹ {total.toFixed(2)}</h3>
            <button className="clear-btn" onClick={clearCart}>
              Clear Cart
            </button>

            <Link to="/checkout">
              <button className="checkout-btn">Proceed to Checkout</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
