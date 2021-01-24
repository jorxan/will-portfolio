import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <img src="#" alt=""/>
            </div>
            <ul>
                <li>
                    <Link to="/">
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        About
                    </Link>
                </li>
                <li className="resumebtn">Resume</li>
            </ul>
        </div>
    )
}

export default Navbar
