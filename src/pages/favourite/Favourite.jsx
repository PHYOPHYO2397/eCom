import React, { use, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { PRODUCTS } from "../../products";
import FavItem from "./FavItem";

const Favourite = () => {
  const { favItems } = useContext(CartContext);

  return (
    <div>
      <h1>Your Favourite Items</h1>
      <div className="d-flex justify-content-around">
        <div className="d-flex flex-row justify-content-between">
          {favItems.map((item) => {
            const product = PRODUCTS.find((product) => product.id === item.id);
            return <FavItem product={product} key={product.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Favourite;
