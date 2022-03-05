import React from "react";
import "./styles/Home.css";
import Product from "./Product";

export default function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://wallpaperaccess.com/full/2731342.jpg"
        alt="amazon-prime"
      />
      <Product />
    </div>
  );
}
