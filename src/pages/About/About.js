import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './About.css';
import HeaderImg from '../../images/aboutpic 3.png';
import EmailIcon from '../../images/Group 1000.png';
import LinkedInIcon from '../../images/Group 1020.png';
import InstagramIcon from '../../images/Group 1018.png';
import SpotifyIcon from '../../images/Group 1014.png';
import ResumeButton from '../../images/resume button.png';
import ResumePDF from './Resume.pdf';

function About() {

    function EmailFunction()
{
    window.location.href = "mailto:ogchungmoney@gmail.com";
}

function LinkedInFunction() {
    window.open('https://www.linkedin.com/in/chungmoney/', '_blank');
}

function InstagramFunction() {
    window.open('https://www.instagram.com/chungmulah/', '_blank');
}

function SpotifyFunction() {
    window.open('https://open.spotify.com/playlist/4oW3E0E8Syis6xztL3QsMN?si=8eWWg94mT0emAVJ6hXgbRw', '_blank');
}


    const GalleryView = () => {
        const greg = document.getElementById("tim")

        greg.classList.add("fart")
    }

    return (
        <div>
            <Navbar/>
                <div className="container">
                    <div className="about">
                    <div className="about__headerWrapper">
                        <div className="about__name">
                            <h1>
                            Hey, I'm Will.
                            </h1>
                        </div>
                        <div className="about__content">
                            <div>
                                <p>
                                I’m a Product/UX designer with a background in mixed-media art based in Phoenix, AZ.  I enjoy the challenge of solving problems through design.  I’ve spent the last 6 years working in the customer service industry building strong communication and teamwork skills accelerating this transition in to Experience Design.
                                </p>
                                <p>
                                I believe in designing products that are practical, impactful, and accessible.  Making products visually pleasing and functional, while keeping them easy to use is a process that can always be refined.  I’m always looking for opportunities to work with people who follow these same ideals, and want to make helpful products for everyone.


                                </p>
                                <div className="resume__buttonContainer">
                                    <div>

                                    <a target="_blank" href={ResumePDF}><img src={ResumeButton} alt="" id="resume__button"/></a>
                                        
                                    </div>
                                    
                                </div>
                                
                            </div>
                            <div>
                                <div className="about__content2">
                                    <img src={HeaderImg} alt=""/>
                                    <div className="about__linksWrapper">
                                        <div className="icon__container">
                                            <ul>
                                                <li >
                                                    <img src={EmailIcon} alt="email" id="email__icon"  onClick={EmailFunction}/>
                                                </li>
                                                <li>
                                                    <img src={LinkedInIcon} alt="linkedIn" id="linkedIn__icon" onClick={LinkedInFunction}/>
                                                </li>
                                                <li>
                                                    <img src={InstagramIcon} alt="instagram" id="instagram__icon" onClick={InstagramFunction}/>
                                                </li>
                                                <li>
                                                    <img src={SpotifyIcon} alt="spotify" id="spotify__icon" onClick={SpotifyFunction}/>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="skills__interests">
                        <div className="skills__wrapper">
                        <div>
                            <h1>
                                Skills
                            </h1>
                        </div>
                            <div className="skills__container">
                                <ul>
                                    <li>Figma</li>
                                    <li>Adobe CC</li>
                                    <li>Rapid Prototyping</li>
                                    <li>AutoCAD / SketchUp</li>
                                </ul>
                                <ul>
                                    <li>Graphic Design</li>
                                    <li>Product Design</li>
                                    <li>Sketching</li>
                                    <li>HTML/CSS/JS</li>
                                </ul>
                            </div>
                        </div>
                        <div className="interests__wrapper">
                        <div>
                            <h1 className="interests__title">
                                Other Interests
                            </h1>
                        </div>
                        <div className="interests">
                            <ul>
                                <li>Snowboarding</li>
                                <li>Ultimate Frisbee</li>
                                <li>Food / Travel</li>
                            </ul>
                            <ul>
                                <li>HiFi Audio</li>
                                <li>Boba</li>
                                <li>SSBU</li>
                            </ul>
                        </div>
                        </div>
                        
                    </div>

                    
                </div> 
                </div>
        </div>
    )
}

export default About
