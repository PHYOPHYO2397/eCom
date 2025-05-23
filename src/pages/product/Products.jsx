import React from "react";
import { PRODUCTS } from "../../products";
import Product from "./Product";

const Products = () => {
  return (
    <div className="products" style={{ margin: "10px" }}>
      <div className="products-title">
        <h1>Products</h1>
      </div>
      <div className="products-list d-flex flex-wrap gap-2">
        {PRODUCTS.map((product) => (
          <Product key={product.id} item={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
