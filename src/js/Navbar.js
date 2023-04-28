import React from 'react';
import './styles.css';

function Navbar(){
    return <nav className="nav">
      <a href="/" className="site-title">Start Bootstrap</a>
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  }

  export default Navbar;