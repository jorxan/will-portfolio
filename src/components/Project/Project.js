import React from 'react';
import './Project.css';
import {Link} from 'react-router-dom';

function Project({img , title, title2, projectType, link, color, caseStudyLink, id}) {

    const scrollToTop = (event) => {
            let x = event.currentTarget

            if (x === "makeRoom" || x === "street") {

            } else {
                window.scrollTo(0, 0);
            }
            
    }

    return (
        <div className="project__wrapper">
            <div className="project__img" onClick={scrollToTop} id={id}>
                <img src={img} alt=""/>
            </div>
            <div className="project__description">
                <div className="project__title">
                <h1>{title}</h1>
                <h1 class>{title2}</h1>
                </div>
                <div className="name__link">
                <div className="project__type">
                    {projectType}
                </div>
                <Link to={link}  className="project__link"  onClick={scrollToTop} id={id}>
                        {caseStudyLink}
                </Link>
                </div>
            </div>
        </div>
    )
}

export default Project
