import React, { useState } from "react";

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="container nav">
      <div className="logo">
        <img src="/images/brand_logo.png" alt="logo" />
      </div>

      <ul className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Location</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <button className="login-btn">Login</button>

      <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        ☰
      </div>
    </nav>
  );
}

export default Nav;
