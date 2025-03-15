import React from "react";

const CartItem = ({ product, qty }) => {
  const { productName, productImage, price } = product;
  return (
    <div className="card text-center" style={{ width: "18rem" }}>
      <img className="card-img-top" src={productImage} alt={productName} />
      <div className="card-body">
        <p className="card-text">{price}</p>
        <p className="card-text">{qty}</p>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <button className="btn btn-outline-secondary" type="button">
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
          />
          <button className="btn btn-outline-secondary" type="button">
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
