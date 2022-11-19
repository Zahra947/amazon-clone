import React from "react";
import "./styles/Apps.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Home from "./components/Home";

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
