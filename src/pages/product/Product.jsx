import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Product = ({ item }) => {
  const { id, productName, productImage, price } = item;
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={productImage} className="card-img-top" alt={productName} />
      <div className="card-body">
        <h5 className="card-title">{productName}</h5>
        <p className="card-text">${price}</p>
        <button onClick={() => addToCart(item.id)} className="btn btn-primary">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
