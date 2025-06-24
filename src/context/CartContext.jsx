import { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem('cartItems');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  
  const addToCart = (product) => {
    const itemExists = cartItems.find(item => item.id === product.id);
    if (itemExists) {
      toast.info("Item already in cart. Update quantity from cart page.", {
        position: "bottom-left"
      });
      return;
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1, selected: true }]);
      toast.success("🛒 Product added to cart!", {
        position: "bottom-left"
      });
    }
  };

  
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  
  const updateQuantity = (id, amount) => {
    setCartItems(cartItems.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + amount) }
        : item
    ));
  };

  
  const toggleItemSelection = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, selected: !item.selected } : item
    ));
  };

  
  const clearCart = () => setCartItems([]);

  
  const removeSelectedItems = () => {
    setCartItems(cartItems.filter(item => !item.selected));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleItemSelection,
        clearCart,
        removeSelectedItems
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
