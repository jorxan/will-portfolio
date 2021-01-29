import React from 'react';
import './Project.css';
import {Link} from 'react-router-dom';

function Project({img , title, title2, projectType, link, color, caseStudyLink, id}) {

    const scrollToTop = (event) => {
            let x = event.target.id

            if (x === "makeRoom" || x === "street") {

            } else {
                window.scrollTo(0, 0);
            }
            
    }

    return (
        <div className="project__wrapper">
            <div className="project__img">
                <img src={img} alt=""/>
            </div>
            <div className="project__description">
                <h1 className="project__title">
                    {title} 
                    <br/>
                    {title2}
                </h1>
                <div className="project__type">
                    {projectType}
                </div>
                <Link to={link}>
                
                    <div className="project__link"  onClick={scrollToTop} id={id}>
                        {caseStudyLink} <i className={`fas fa-chevron-right fa-2x ${color}`}></i>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Project
