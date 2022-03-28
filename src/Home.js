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
      <div className="home__row">
        <Product
          id={123456}
          title="new book"
          price={2}
          rating={5}
          image="https://www.publicbooks.org/wp-content/uploads/2017/01/book-e1484158615982-810x327.jpg"
        />
        <Product
          id={123456}
          title="new book"
          price={2}
          rating={5}
          image="https://www.publicbooks.org/wp-content/uploads/2017/01/book-e1484158615982-810x327.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={123456}
          title="new book"
          price={2}
          rating={5}
          image="https://www.publicbooks.org/wp-content/uploads/2017/01/book-e1484158615982-810x327.jpg"
        />
        <Product
          id={123456}
          title="new book"
          price={2}
          rating={5}
          image="https://www.publicbooks.org/wp-content/uploads/2017/01/book-e1484158615982-810x327.jpg"
        />
        <Product
          id={123456}
          title="new book"
          price={2}
          rating={5}
          image="https://www.publicbooks.org/wp-content/uploads/2017/01/book-e1484158615982-810x327.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={123456}
          title="new book"
          price={2}
          rating={5}
          image="https://www.publicbooks.org/wp-content/uploads/2017/01/book-e1484158615982-810x327.jpg"
        />
      </div>
    </div>
  );
}
