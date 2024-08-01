// import React from "react";
// import { Nav, NavLink, NavMenu } from "./NavBarElements";
// // import App from './App.js';
// // import ReactDOM from 'react-dom';
 
// const NavBar = () => {
//     return (
//         <>
//             <Nav>
//                 <NavMenu>
//                     <NavLink to="/home" activeStyle>
//                         Home
//                     </NavLink>
//                     <NavLink to="/my-recipes" activeStyle>
//                         My Recipes
//                     </NavLink>
//                 </NavMenu>
//             </Nav>
//         </>
//     );
// };
 
// export default NavBar;

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
