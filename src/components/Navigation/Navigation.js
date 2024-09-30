import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './Navigation.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar fixed-top">
      <Link to="/" className="title">
        <b>  Bear</b>

      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/"><b>Home</b></NavLink>
        </li>
        <li>
          <NavLink to="/about"><b>About</b></NavLink>
        </li>
        <li>
          <NavLink to="/galeri">
            <b>Galeri</b>
          </NavLink>
        </li>
        <li>
          <NavLink to="/conservation" >
            <b> Konservasi</b>

          </NavLink>
        </li>
        <li>
          <NavLink to="/donation" >
            <b> Donasi</b>

          </NavLink>
        </li>
      </ul>
    </nav>


  );
};

export default Navbar;
