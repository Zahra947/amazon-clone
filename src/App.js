import React from "react";
import "./styles/Apps.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import Checkout from "./Checkout";
import Login from "./Login";
import Home from "./Home";

export default function App() {
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
