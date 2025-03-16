import React, { use, useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ product, qty }) => {
  const { id, productName, productImage, price } = product;
  const { addToCart, removeFromCart, updateCartItemCount } =
    useContext(CartContext);
  return (
    <div className="card text-center" style={{ width: "18rem" }}>
      <img className="card-img-top" src={productImage} alt={productName} />
      <div className="card-body">
        <p className="card-text">{price}</p>
        <p className="card-text">{qty}</p>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={() => addToCart(id)}
            >
              +
            </button>
          </div>
          <input
            type="text"
            defaultValue={qty}
            className="form-control"
            placeholder=""
            aria-label=""
            aria-describedby="basic-addon1"
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => removeFromCart(id)}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
