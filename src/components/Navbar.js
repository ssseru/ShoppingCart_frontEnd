import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav-wrapper" style={{ backgroundColor: "#3e89d5" }}>
      <div className="container">
        <Link to="/" className="brand-logo">
          Store
        </Link>

        <ul className="right">
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/home">Catalog</Link>
          </li>
          <li>
            <Link to="/cart">My Cart</Link>
          </li>
          <li>
            <Link to="/cart">
              <i className="material-icons">shopping_cart</i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
