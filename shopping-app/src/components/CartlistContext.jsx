import { createContext, useContext, useState, useEffect } from "react";

const CartlistContext = createContext();

export const CartlistProvider = ({ children }) => {
  const [cartlistItems, setCartlistItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Persist cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartlistItems));
  }, [cartlistItems]);

  const addToCartlist = (item) => {
    setCartlistItems((prev) => {
      if (!prev.find((i) => i.id === item.id && i.selectedSize === item.selectedSize)) {
        return [...prev, item];
      }
      return prev;
    });
  };

  const removeFromCartlist = (id, selectedSize) => {
    setCartlistItems((prev) => prev.filter((item) => !(item.id === id && item.selectedSize === selectedSize)));
  };

  const updateQuantity = (id, selectedSize, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCartlist(id, selectedSize);
      return;
    }
    setCartlistItems((prev) =>
      prev.map((item) =>
        item.id === id && item.selectedSize === selectedSize
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartlistItems([]);
  };

  const parsePrice = (price) => {
    if (typeof price === 'string') {
      return parseFloat(price.replace(/₹|,/g, "")) || 0;
    }
    return parseFloat(price) || 0;
  };

  const getTotalPrice = () => {
    return cartlistItems.reduce((total, item) => total + (parsePrice(item.price) * (item.quantity || 1)), 0);
  };

  return (
    <CartlistContext.Provider value={{
      cartlistItems,
      addToCartlist,
      removeFromCartlist,
      updateQuantity,
      clearCart,
      getTotalPrice
    }}>
      {children}
    </CartlistContext.Provider>
  );
};

export const useCartlist = () => useContext(CartlistContext);
