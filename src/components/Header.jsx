import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul className="menu">
        <li className="menu__item">
          <Link to="/" className="menu__link">
            Home
          </Link>
        </li>
        <li className="menu__item">
          <Link to="/about" className="menu__link">
            About
          </Link>
        </li>
        <li className="menu__item">
          <Link to="/contact" className="menu__link">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
