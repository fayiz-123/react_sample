import React from "react";
import { Link } from "react-router-dom";
import "./../Styles.css";

const Navbar = () => {
  return (
    <header>
      <div className="logo">MyBrand</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="#">Services</Link></li>
          <li><Link to="#">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
