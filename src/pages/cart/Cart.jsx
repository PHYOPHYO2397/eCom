import React, { use, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { PRODUCTS } from "../../products";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalAmount } = useContext(CartContext);
  const totalAmount = getTotalAmount();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Your Cart Items</h1>
      <div className="d-flex justify-content-around">
        <div className="d-flex flex-row justify-content-between">
          {cartItems.map((item) => {
            const product = PRODUCTS.find((product) => product.id === item.id);
            return (
              <CartItem product={product} key={product.id} qty={item.count} />
            );
          })}
        </div>

        <div className="cart-info d-flex flex-column gap-2">
          Subtotal: ${totalAmount}
          <button className="btn btn-primary">Checkout</button>
          <button className="btn btn-primary" onClick={() => navigate("/")}>
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
