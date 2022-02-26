import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/Checkout">Checkout</Route>
          <Route path="/Login">Login</Route>
          <Route path="/">Homepage</Route>
        </Routes>
      </div>
    </Router>
  );
}
