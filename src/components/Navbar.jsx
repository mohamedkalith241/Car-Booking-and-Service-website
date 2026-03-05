import React, { useEffect, useState } from "react";
import { FaCarSide } from "react-icons/fa";

function Navbar() {

  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "cars", "services", "booking", "contact"];

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">

      <div className="logo">
        <FaCarSide className="logo-icon" />
        <span className="logo-text">MK Motors</span>
      </div>

      <ul className="nav-links">
        <li>
          <a href="#home" className={active === "home" ? "active" : ""}>
            Home
          </a>
        </li>

       

        <li>
          <a href="#services" className={active === "services" ? "active" : ""}>
            Services
          </a>
        </li>

         <li>
          <a href="#cars" className={active === "cars" ? "active" : ""}>
            Cars
          </a>
        </li>

        <li>
          <a href="#booking" className={active === "booking" ? "active" : ""}>
            Book Service
          </a>
        </li>

        <li>
          <a href="#contact" className={active === "contact" ? "active" : ""}>
            Contact
          </a>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;