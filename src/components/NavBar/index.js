import React from "react";
import { Nav, NavLink, NavMenu } from "./NavBarElements";
// import App from './App.js';
// import ReactDOM from 'react-dom';
 
const NavBar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/home" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/my-recipes" activeStyle>
                        My Recipes
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default NavBar;