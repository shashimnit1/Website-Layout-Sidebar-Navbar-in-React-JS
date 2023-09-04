import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Nav.css"

const Nav = () => {
    return (
        <>
            <div className="logo">NavBar using React-JS (Router Concept)</div>
            <div className="nav-links">
              
                    <li><NavLink exact activeClassName="active" to="/">Homepage</NavLink></li>
                    <li><NavLink exact activeClassName="active" to="/page_1">Page_1</NavLink></li>
                    <li><NavLink exact activeClassName="active" to="/page_2">Page_2</NavLink></li>
                    <li><NavLink exact activeClassName="active" to="/page_3">Page_3</NavLink></li>
                    <li><NavLink exact activeClassName="active" to="/page_4">Page_4</NavLink></li>
               </div>
        </>
    );
}

export default Nav;
