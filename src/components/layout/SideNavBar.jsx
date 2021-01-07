import React from 'react';
import './layout.css';


const SideNavBar = ({close}) => {
    return (
        <nav className ="side-nav-bar">
            <ul>
                <li onClick={close}>
                    <i className = "material-icons">close</i></li>
                <li>Home</li>
                <li>About Us</li>
                <li>Why Join Us</li>
                <li>Sign up</li>
                <li>HelpLine</li>
            </ul>
        </nav>
    ); 
};

export default SideNavBar;