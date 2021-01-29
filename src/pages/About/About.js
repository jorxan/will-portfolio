import React, {useState, useEffect} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './About.css';
import HeaderImg from '../../images/image 10.png';
import EmailIcon from '../../images/Group 988.png';
import LinkedInIcon from '../../images/linkedin.png';
import InstagramIcon from '../../images/instagram.png';
import SpotifyIcon from '../../images/Group 987.png';


function About() {

    const [aboutContentHeight, setAboutHeight] = useState(0)


    const imageHeight = () => {
        let x = document.getElementById("about__content").style.height;
        setAboutHeight(x);
        console.log(aboutContentHeight);
    }


    useEffect(() => {
        imageHeight();
    })


    return (
        <div>
            <Navbar/>
                <div className="container">
                    <div className="about__headerWrapper">
                        
                        <div>
                            <img src={HeaderImg} alt=""/>
                        </div>
                        <div>
                            <div className="about__name">
                                <h1>
                                    Will Chung
                                </h1>
                            </div>
                            <div className="about__content" id="about__content">
                                <p>
                                    I’m a product/UX designer with a background in mixed-media art based in Phoenix, AZ.  I enjoy the challenge of solving problems through design.  I’ve spent the last 6 years working in the customer service industry, building strong communication and teamwork skills.  Having this background and applying design principles in to experiences that can affect people at a much larger scale has been an exciting transition.
                                </p>
                            <br/>
                                <p>
                                    I believe in designing products that are practical, impactful, and accessible.  Making a product visually pleasing and functional, while keeping it easy to use is a process that can always be refined.  I’m always looking for opportunities to work with people who follow these same ideals, and want to make helpful products for everyone.
                                </p>
                                <br/>
                                <p>
                                    When my focus isn’t on design, I can be found in discord calls listening to music with my friends, playing <span className="SSBU">Super Smash Bros.</span>, snowboarding, watching movies, and eating out for every meal.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
        </div>
    )
}

export default About
