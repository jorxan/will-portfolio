import React from 'react'

function Competitor({img, title, pros, cons, competitorType}) {
    
    

    return (
        <div>
            <div className="competitor__wrapper">
                    <div className="competitor__description">
                        <div className="competitor__title">
                            <h3>{title} <span>{competitorType}</span></h3>
                        </div>
                        <div className="competitor__pros">
                            <h3>Pros</h3>
                            <ul>
                                {pros.map((pros) =>
                                <li>
                                    <p>{pros}</p>
                                </li>
                            )}
                            </ul>
                        </div>
                        <div className="competitor__cons">
                        <h3>Cons</h3>
                        <ul>
                                {cons.map((cons) =>
                                <li>
                                    <p>{cons}</p>
                                </li>
                            )}
                            </ul>
                    </div>
                    </div>
                    <div className="competitor__imgWrapper">
                        <div className="competitor__imgContainer">
                            <img src={img} alt="competitor example"/>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Competitor
