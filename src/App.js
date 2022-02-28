import React from "react";
import "./styles/Apps.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/Checkout">Checkout</Route>
          <Route path="/Login">Login</Route>
          <Route path="/">Homepage</Route>
        </Routes>
      </div>
    </Router>
  );
}
