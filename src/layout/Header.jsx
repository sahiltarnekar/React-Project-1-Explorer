import React from "react";
import reactLogo from "../assets/react.svg";

function Header() {
  return (
  <header className="py-3 shadow-sm mb-4">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <h1 className="h4 mb-0 fw-bold">Product Store</h1>
        </div>
        <nav>
          <a href="#products" className="text-white mx-2 text-decoration-none fw-semibold">Products</a>
          <a href="#about" className="text-white mx-2 text-decoration-none fw-semibold">About</a>
          <a href="#contact" className="text-white mx-2 text-decoration-none fw-semibold">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
