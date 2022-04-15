import React from "react";
import { useStateValue } from "./StateProvider";
import "./styles/checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

export default function Checkout(props) {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        {basket?.length === 0 ? (
          <div>
            <h1>Your basket is empty</h1>
            <p>
              You have no item in your basket. To buy one, press "Add to basket"
              next to the item.
            </p>
          </div>
        ) : (
          <h1 className="checkout__title">
            Your basket is:
            {basket.map((item) => (
              <CheckoutProduct
                id={props.id}
                title={props.title}
                price={props.price}
                image={props.image}
                rating={props.rating}
              />
            ))}
          </h1>
        )}
      </div>
      {basket.lenght > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}
