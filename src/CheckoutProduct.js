import React from "react";
import "./styles/checkout.css";

export function CheckoutProduct(props) {
  function removeFromBasket() {}
  return (
    <div className="checkoutProduct">
      <img
        className="checkoutProduct__image"
        src={props.image}
        alt={props.title}
      />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{props.title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(props.rating)
            .fill()
            .map((_) => (
              <span role="img" aria-label="star">
                ⭐
              </span>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}
