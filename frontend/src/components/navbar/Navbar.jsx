import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="logo-container">
          <a href="/" className="brand-logo">
            <img src="/logosvg.svg" alt="" />
          </a>
        </div>

        <div className="options-container">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/features">Features</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
