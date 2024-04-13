// Header.js
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom"; // Make sure to import NavLink
import "./Main.scss";

const Main = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={`header ${menuOpen ? "menu-open" : ""}`}>
      <div className="logo">
        <Link to="/">
          Mirador Hotel <span>.</span>
        </Link>
      </div>
      <div className="nav">
        <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
          <li>
            <NavLink to="/" activeClassName="active" onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active" onClick={closeMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/room-type"
              activeClassName="active"
              onClick={closeMenu}
            >
              Room Type
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery" activeClassName="active" onClick={closeMenu}>
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active" onClick={closeMenu}>
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="menu-btn" onClick={toggleMenu}>
          <div className={`btn-line ${menuOpen ? "open" : ""}`}></div>
          <div className={`btn-line ${menuOpen ? "open" : ""}`}></div>
          <div className={`btn-line ${menuOpen ? "open" : ""}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
