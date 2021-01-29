import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import ResumePDF from './Resume.pdf'

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
                <li className="resumebtn">
                    <a target="_blank" href={ResumePDF}>Resume</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
