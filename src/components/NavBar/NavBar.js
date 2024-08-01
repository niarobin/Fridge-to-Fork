// components/NavBar/index.js

import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Make sure to add CSS styles

const NavBar = () => {
  return (
    <div className="NavBar">
      <h1 className="navbar-title">Fridge to Fork</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/my-recipes">My Recipes</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
