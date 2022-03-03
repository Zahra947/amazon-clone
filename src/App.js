import React from "react";
import "./styles/Apps.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import Checkout from "./Checkout";
import Login from "./Login";

export default function App() {
  const Home = function () {
    return <h1>hiiii</h1>;
  };
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/Checkout" element={<Checkout />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}
