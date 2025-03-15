import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { PRODUCTS } from "../../products";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h1>Your Cart Items</h1>
      <div className="d-flex flex-row justify-content-between">
        {cartItems.map((item) => {
          const product = PRODUCTS.find((product) => product.id === item.id);
          return (
            <CartItem product={product} key={product.id} qty={item.count} />
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
