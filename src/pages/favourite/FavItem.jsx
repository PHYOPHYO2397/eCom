import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const FavItem = ({ product }) => {
  const { id, productName, productImage, price } = product;

  return (
    <div className="card text-center" style={{ width: "18rem" }}>
      <img className="card-img-top" src={productImage} alt={productName} />
      <div className="card-body">
        <p className="card-text">{productName}</p>
        <p className="card-text">${price}</p>
      </div>
    </div>
  );
};

export default FavItem;
