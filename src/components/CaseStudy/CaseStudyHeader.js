import React from 'react';
import './CaseStudy.css'

function CaseStudyHeader({backgroundColor, heroImg, titleImg}) {
    return (
        <div className={`caseStudyHeader__wrapper ${backgroundColor}`}>
            <div className="caseStudy__titleImg">
                <img src={titleImg} alt=""/>
            </div>
            <div className="caseStudy__heroImg">
                <img src={heroImg} alt=""/>
            </div>
        </div>
    )
}

export default CaseStudyHeader
