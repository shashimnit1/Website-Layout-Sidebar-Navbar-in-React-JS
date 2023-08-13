import React from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css"

const Nav = () => {
    return (
        <>
            <div className="logo">NavBar using React-JS (Router Concept)</div>
            <div className="nav-links">
                <li><Link to="/">Homepage</Link></li>
                <li><Link to="/page_1">Page_1</Link></li>
                <li><Link to="/page_2">Page_2</Link></li>
                <li><Link to="/page_3">Page_3</Link></li>
                <li><Link to="/page_4">Page_4</Link></li>
            </div>
        </>
    );
}

export default Nav;
