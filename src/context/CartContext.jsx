import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext(null);

export const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const addToCart = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (!item) {
      setCartItems([...cartItems, { id, count: 1 }]);
    } else {
      const updatedCart = cartItems.map((eachItem) => {
        if (eachItem.id === id) {
          return {
            ...eachItem,
            count: eachItem.count + 1,
          };
        }
        return eachItem;
      });
      setCartItems(updatedCart);
    }
  };

  const contextValue = { cartItems, addToCart };

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};
