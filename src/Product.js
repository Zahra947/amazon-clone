import React from "react";
import "./styles/Product.css";

export default function Product(props) {
  return (
    <div className="product">
      <p>{props.title}</p>
      <p className="product__price">
        <small>$</small>
        <strong>{props.price}</strong>
      </p>
      <div className="product__rating">
        {Array(props.rating)
          .fill()
          .map((_) => (
            <span>⭐</span>
          ))}
      </div>
    </div>
  );
}
