import React from 'react';
import "./layout.css";

const NavBar = ({ open }) => {
    return (
        <nav className= "nav-bar">
            <div className= "nav-icon" onClick={open}>
                <i className="material-icons">menu</i>
            </div>
            <div className="na-logo"></div>
            <div className="new-space"/>
            <div className="nav-items">
                <ul>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;