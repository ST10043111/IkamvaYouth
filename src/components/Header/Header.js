// src/components/Header/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header_section">
      <nav className="navbar navbar-expand-lg custom_nav-container">
        <Link className="navbar-brand" to="/">
          <img src="/images/logo.jpg" alt="IkamvaYouth Logo" />
          <span>IkamvaYouth Mamelodi</span>
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery">Gallery</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/resources">Resources</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;