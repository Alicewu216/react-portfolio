import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar_logo">
          <Link to={`/`} className="cartItem_name">
            <h2>Xiaoxuan Wu</h2>
          </Link>
        </div>

        <ul className="navbar_links">
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About Me</Link>
          </li>
          <li>
            <Link to="/">Portfolio</Link>
          </li>
          
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
