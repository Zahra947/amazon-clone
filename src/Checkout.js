import React from "react";
import { useStateValue } from "./StateProvider";
import "./styles/checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

export default function Checkout({ id, title, price, image, rating }) {
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
            Your shopping basket is:
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
              />
            ))}
          </h1>
        )}
      </div>
        <div className="checkout__right">
          if (basket.lenght > 0) {
            <Subtotal
            id={id}
            title={title}
            price={price}
            image={image}
            rating={rating}
          />  
          }
        </div>
    </div>
  );
}
