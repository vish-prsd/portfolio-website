import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Vishnu Prasad P S</h1>
      <h2>(Front-End Developer)</h2>
      <nav className="header__nav">
        <ul>
          <li><Link smooth to="/#about">About</Link></li>
          <li><Link smooth to="/#education">Education</Link></li>
          <li><Link smooth to="/#certifications">Certifications</Link></li>
          <li><Link smooth to="/#projects">Projects</Link></li>
          <li><Link smooth to="/#contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
