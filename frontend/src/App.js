import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"; // Mengimpor ikon keranjang
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Cart from "./components/Cart"; // Impor komponen Cart
import Contact from "./components/Contact";
import Home from "./components/Home.js";
import Products from "./components/Products";
import Transaksi from "./components/Transaksi";

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <h1 className="logo"><a href="/" className="plain-link">DAKO MART</a></h1>
          <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/cart" className="cart-link">
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />{" "}
              {/* Ikon keranjang */}
            </Link>
          </nav>
        </header>

        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/transaksi" element={<Transaksi />} />{" "}
            {/* Route for Transaksi */}
          </Routes>
        </main>

        <footer className="footer">
          <p>
            &copy; {new Date().getFullYear()} MiniMarket. All rights reserved.
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
