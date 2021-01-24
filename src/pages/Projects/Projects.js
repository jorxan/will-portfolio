import React from 'react';
import Project from '../../components/Project/Project';
import './Projects.css';
import SoulImg from '../../images/Soul.png';
import TheStreetImg from '../../images/Menu.png';
import RoomImg from '../../images/Room.png';

function Projects() {
    return (
        <div className="projects__container">
            <h1>Projects</h1>
            <Project img={SoulImg} title="Adobe" title2="Art and Soul" link="/soul" projectType="Design Challenge" color="soul__blue"/>
            <Project img={TheStreetImg} title="The Street" title2="" link="/" projectType="Menu Design" color="street__orange"/>
            <Project img={RoomImg} title="Make Room" title2="" link="/" projectType="Mobile App Design" color="room__purple"/>
        </div>
    )
}

export default Projects
