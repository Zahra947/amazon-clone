import React from "react";
import "./styles/Product.css";
import { useStateValue } from "./StateProvider";

export default function Product(props) {
  const [dispatch] = useStateValue();

  const addToBasket = () => {
    //add to basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        title: props.title,
        price: props.price,
        image: props.image,
        rating: props.rating
      }
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{props.title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className="product__rating">
          {Array(props.rating)
            .fill()
            .map((_) => (
              <span role="img" aria-label="star">
                ⭐
              </span>
            ))}
        </div>
      </div>
      <img src={props.image} alt={props.title} />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}
