import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './About.css';
import HeaderImg from '../../images/aboutpic 3.png';
import EmailIcon from '../../images/Group 1000.png';
import LinkedInIcon from '../../images/Group 1020.png';
import InstagramIcon from '../../images/Group 1018.png';
import SpotifyIcon from '../../images/Group 1014.png';
import ImageGallery from '../../components/ImageGallery/ImageGallery';


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
                                I’m a Product/UX designer with a background in mixed-media art based in Phoenix, AZ.  I enjoy the challenge of solving problems through design.  I’ve spent the last 6 years working in the customer service industry building strong communication and teamwork skills accelerating this transition in to Experince Design.
                                </p>
                                <p>
                                I believe in designing products that are practical, impactful, and accessible.  Making a product visually pleasing and functional, while keeping it easy to use is a process that can always be refined.  I’m always looking for opportunities to work with people who follow these same ideals, and want to make helpful products for everyone.

                                </p>
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
                                        <div>
                                            <h3>
                                                Get in touch!
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="other__interests">
                        <div>
                            <h3>
                                Other Interests
                            </h3>
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

                    <div className="other__work">
                        <div>
                            <h3>View my other work</h3>
                        </div>
                        <div>
                            <i><svg width="26" height="38" viewBox="0 0 26 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.0001055 24.7279L2.82853 21.8995L12.728 31.799L22.6275 21.8995L25.456 24.7279L15.5565 34.6274L12.728 37.4558L9.8996 34.6274L0.0001055 24.7279Z" fill="#C4C4C4"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.0001055 12.7279L2.82853 9.89949L12.728 19.799L22.6275 9.89949L25.456 12.7279L15.5565 22.6274L12.728 25.4558L9.8996 22.6274L0.0001055 12.7279Z" fill="#C4C4C4"/>
</svg>
</i>
                        </div>
                    </div>
                    <ImageGallery/>
                </div> 
                </div>
        </div>
    )
}

export default About
