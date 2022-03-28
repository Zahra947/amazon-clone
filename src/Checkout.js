import React from "react";
import { useStateValue } from "./StateProvider";
import "./styles/checkout.css";
import CheckoutProduct from "./CheckoutProduct";

export default function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      {basket?.length === 0 ? (
        <div>
          <h1>Your basket is empty</h1>
          <p>
            You have no item in your basket. To buy one, press "Add to basket"
            next to the item.{" "}
          </p>
        </div>
      ) : (
        <h1 className="checkout__title">
          Your basket is:
          {basket.map((item) => (
            <CheckoutProduct />
          ))}
        </h1>
      )}
    </div>
  );
}
