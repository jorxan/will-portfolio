import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer__wrapper">
            
            <div>
                <a href="mailto:ogchungmoney@gmail.com">
                    <i class="fas fa-3x footer__icons fa-envelope" ></i>
                </a>
            
            </div>
            <div>
            <a target="_blank" href="https://www.linkedin.com/in/chungmoney/">
                <i class="fab fa-3x footer__icons fa-linkedin-in"></i>
            </a>
            </div>
            <div>
            <a href="https://www.instagram.com/chungmulah/" target="_blank">
                <i class="fab fa-3x footer__icons fa-instagram"></i>
            </a>
            </div>
        </div>
    )
}

export default Footer
