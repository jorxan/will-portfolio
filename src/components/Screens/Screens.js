import React from 'react';
import "./Screens.css";

function Screens({imgs}) {
    return (
    <div className="screens__container">
        <h1>Screens</h1>
        <div className="screens__wrapper">
            {imgs.map((imgs) =>
                                <div>
                                    <img src={imgs} alt=""/>
                                </div>
                            )}
        </div>
    </div>
    )
}

export default Screens
