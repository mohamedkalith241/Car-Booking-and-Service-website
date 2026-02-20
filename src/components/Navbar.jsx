import React from "react";
import { FaCarSide } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        <FaCarSide className="logo-icon" />
        <span className="logo-text">MK Motors</span>
      </div>

      {/* Menu */}
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#cars">Cars</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#booking">Book Service</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

    </nav>
  );
}

export default Navbar;