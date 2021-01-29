import React from 'react';
import './TitlePage.css';

function TitlePage() {
    return (
        <div className="title__wrapper">
            <div className="title">
                <div className="header">
                    <h1>Hi, I'm Will.</h1>
                </div>
                <h3 className="subText">
                    I'm a 
                    <span id="product">  Product</span>
                    <span id="slash">/</span>
                    <span id="ux">UX</span> Designer, based in  
                    <span id="phx"> PHX AZ</span> 
                    , designing
                    <br/>
                    <span id="end"> end-to-end </span>
                     
                     for the best possible experience.
                </h3>
            </div>

        </div>
    )
}

export default TitlePage
