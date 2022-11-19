import React from "react";
import "../styles/Home.css";
import Product from "./Product";

export default function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://wallpaperaccess.com/full/2731342.jpg"
        alt="amazon-prime"
      />
      <div className="home__row">
        <Product
          id={123}
          title="Guess Perfume - Guess 1981 - perfumes for women, 100 ml - EDT Spray"
          price={50}
          rating={5}
          image="https://m.media-amazon.com/images/I/61Xv4lrqk8L._AC_SX425_.jpg"
        />
        <Product
          id={457}
          title="BOSS The Scent Private Accord for Him, 1.6 Fl Oz"
          price={60}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/718-rwqKimL.__AC_SX300_SY300_QL70_ML2_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={8910}
          title="Neutrogena Hydro Face Moisturizer, 1.7 oz"
          price={17}
          rating={4}
          image="https://m.media-amazon.com/images/I/71ICfUvvEyL._SY355_.jpg"
        />
        <Product
          id={111213}
          title="Apple AirPods (2nd Generation)"
          price={600}
          rating={5}
          image="https://m.media-amazon.com/images/I/7120GgUKj3L._AC_SX385_.jpg"
        />
        <Product
          id={141516}
          title="Hair Dryer and Hot Air Brush, Black"
          price={100}
          rating={5}
          image="https://m.media-amazon.com/images/I/71GIRogtyNL._SY355_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={171819}
          title="SAMSUNG 32-inch Class LED Smart FHD TV 1080P (UN32N5300AFXZA, 2018 Model)"
          price={1500}
          rating={5}
          image="https://m.media-amazon.com/images/I/91UsHjAPTlL._AC_SX355_.jpg"
        />
      </div>
    </div>
  );
}
