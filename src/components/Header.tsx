import React, { useState } from "react";
import './Header.css';
import kcglogo from '../assets/KCG logo.png';
import itlogo from '../assets/IT logo.png';

const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={kcglogo} alt="KCG logo" className="logo-img" />
        <img src={itlogo} alt="IT logo" className="logo-img" />
      </div>
      <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#domains">Domains</a></li>
        </ul>
      </nav>
      <div className="burger-icon" onClick={toggleMenu}>
        &#9776; {/* This is the hamburger icon */}
      </div>
    </header>
  );
};

export default Header;
