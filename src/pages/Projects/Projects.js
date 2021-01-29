import React from 'react';
import Project from '../../components/Project/Project';
import './Projects.css';
import SoulImg from '../../images/Group 1001.png';
import TheStreetImg from '../../images/Group 1002.png';
import RoomImg from '../../images/MakeRoomCard.png';

function Projects() {
    return (
        <div className="projects__container">
            <h1>Projects</h1>
            <Project img={SoulImg} title="Adobe" title2="Art and Soul" link="/soul" projectType="Design Challenge" color="soul__blue" caseStudyLink="Read Case Study" id="soul"/>
            <Project img={TheStreetImg} title="The Street" title2="" link="/" projectType="Menu Design" color="unfinished__color" caseStudyLink="Coming Soon" id="street"/>
            <Project img={RoomImg} title="Make Room" title2="" link="/" projectType="Mobile App Design" color="unfinished__color" caseStudyLink="Coming Soon" id="makeRoom"/>
        </div>
    )
}

export default Projects
