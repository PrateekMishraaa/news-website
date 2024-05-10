// Navbar.js

import React from 'react';
import './Navbar.css'; // Import your CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">News Website</h1>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
