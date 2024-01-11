import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="right-navbar">
          <a href="/" className="brand-logo">
            HireUp
          </a>
        </div>

        <div className="left-navbar">
          <ul id="navbar-ul" className="ul">
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
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
