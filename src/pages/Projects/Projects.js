import React from 'react';
import Project from '../../components/Project/Project';
import './Projects.css';
import SoulImg from '../../images/soul.jpg';
import TheStreetImg from '../../images/street.jpg';
import RoomImg from '../../images/makeRoom.jpg';
import { Link } from 'react-router-dom';

function Projects() {

    const scrollToTop = (event) => {
        let x = event.currentTarget.id

        if (x === "street__link") {

        } else {
            window.scrollTo(0, 0);
        }
        
}


    return (
        <div className="projects__container">
            {/* <Project img={SoulImg} title="Adobe" title2="Art and Soul" link="/soul" projectType="Design Challenge" color="soul__blue" caseStudyLink="Read Case Study" id="soul"/>
            <Project img={TheStreetImg} title="The Street" title2="" link="/" projectType="Menu Design" color="unfinished__color" caseStudyLink="Coming Soon" id="street"/>
            <Project img={RoomImg} title="Make Room" title2="" link="/" projectType="Mobile App Design" color="unfinished__color" caseStudyLink="Coming Soon" id="makeRoom"/> */}
            <div className="project__grid" id="soul__project">
                <div className="project__gridContent">
                    <div className="project__title">
                        <h3>Art & Soul Product Designer</h3>
                    </div>
                    <div className="project__subtitle">
                        <h1>2020 Adobe Design Challenge</h1>
                    </div>
                    <div className="project__tags soul__tags">
                        <button>GRAPHIC DESIGN</button>
                        <button>PRODUCT THINKING</button>
                    </div>
                    <div className="project__description">
                        <p>
                            Competing against 5000+ entrants I had to create a design that would stand out and impress the judges
                        </p>
                    </div>
                    <Link to="/soul" className="caseStudy__link" id="soul__link" onClick={scrollToTop}>
                        <h3>View Case Study</h3>
                        <svg width="19" height="15" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.17 7L8.59 10.59L10 12L16 6L10 0L8.59 1.41L12.17 5H0V7H12.17Z" fill="#898989"/>
                        </svg>
                    </Link>
                </div>
                <div className="project__gridImage">
                    <div>
                        <img src={SoulImg} alt=""/>
                    </div>
                </div>
            </div>

            <div className="project__grid" id="makeRoom__project">
                <div className="project__gridImage">
                    <div>
                        <img src={RoomImg} alt=""/>
                    </div>
                </div>
                <div className="project__gridContent">
                    <div className="project__title">
                        <h3>Make Room Lead Designer</h3>
                    </div>
                    <div className="project__subtitle">
                        <h1>Creating an intuitive multi-tool that saves time</h1>
                    </div>
                    <div className="project__tags makeRoom__tags">
                        <button>UX/UI DESIGN</button>
                        <button>MOBILE DESIGN</button>
                    </div>
                    <div className="project__description">
                        <p>
                            Make Room Aims to reduce the time and effort needed to create or rearrange spaces through the use of a shape-building tool
                        </p>
                    </div>
                    <Link to="makeroom" className="caseStudy__link" id="makeRoom__link" onClick={scrollToTop}>
                        <h3>View Case Study</h3>
                        <svg width="19" height="15" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.17 7L8.59 10.59L10 12L16 6L10 0L8.59 1.41L12.17 5H0V7H12.17Z" fill="#898989"/>
                        </svg>
                    </Link>
                </div>
            </div>

            <div className="project__grid" id="street__project">
                <div className="project__gridContent">
                    <div className="project__title">
                        <h3>The Street Product Design</h3>
                    </div>
                    <div className="project__subtitle street__subtitle">
                        <h1>Rebranding a company and developing a visual language</h1>
                    </div>
                    <div className="project__tags street__tags">
                        <button>BRANDING</button>
                        <button>WEB DESIGN</button>
                        <button>PRINT DESIGN</button>
                    </div>
                    <div className="project__description">
                        <p>
                        Complete redesign incoporating a new visual language that is reinforced by a new menu and website                        </p>
                    </div>
                    <Link to="#" className="caseStudy__link" id="street__link" onClick={scrollToTop}>
                        <h3>Coming Soon</h3>
                        <svg width="19" height="15" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.17 7L8.59 10.59L10 12L16 6L10 0L8.59 1.41L12.17 5H0V7H12.17Z" fill="#898989"/>
                        </svg>
                    </Link>
                </div>
                <div className="project__gridImage">
                    <div>
                        <img src={TheStreetImg} alt=""/>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Projects
