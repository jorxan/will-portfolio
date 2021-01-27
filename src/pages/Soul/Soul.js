import React from 'react';
import CaseStudyHeader from '../../components/CaseStudy/CaseStudyHeader';
import SoulRecordImg from '../../images/Intersect.png';
import SoulTitle from '../../images/Group 970.png'
import Navbar from '../../components/Navbar/Navbar';
import './Soul.css';
import Squidward from '../../images/IMG_5993.png';
import BlueNote from '../../images/IMG_5931.png';
import SaxGuy from '../../images/IMG_5913.png';
import ColorGuys from '../../images/IMG_5912.png';
import BlueTrumpet from '../../images/IMG_6039.png';
import JazzAndArt from '../../images/IMG_5920.png';
import Bongos from '../../images/IMG_5995.png';
import JazzInDaHouse from '../../images/IMG_5927.png';
import Vertigo from '../../images/IMG_6041.png';
import AzzJa from '../../images/IMG_6040.png';
import Dots from '../../images/IMG_6069.png';
import John from '../../images/IMG_5925.png';
import GardenGate from '../../images/IMG_5921.png';
import PopFood from '../../images/IMG_5840.png';
import Caravan from '../../images/IMG_5926.png';
import WillFilter from '../../images/IMG_5963.png';
import V1 from '../../images/Capture3 1.png';


function Soul() {
    return (
        <div>
            <Navbar/>
            <CaseStudyHeader backgroundColor="soul__background" heroImg={SoulRecordImg} titleImg={SoulTitle}/>
            <div className="container">
                <div className="summary__header">
                    <div className="adc">
                        Adobe Design Challenge
                    </div>
                    <h1>
                        <span>Soul </span>
                        Album Cover
                    </h1>
                </div>
            <div className="summary">
                <div className="summary__left">
                    <p>
                        Adobe, Disney, and Pixar hosted a   design challenge to create an Album Cover for the new movie 
                        <span> Soul. </span>
                        The movie had a great message, and was easily relatable since I played in concert bands like Joe taught my entire life. So, seeing Joe struggle to find his purpose in life after pursuing one thing for so long is a very real fear that most artists face every day. So capturing that struggle, and translating it into my work was going to be challenging.
                    </p>
                </div>
                <div className="summary__right">
                    <h3>
                        Team/Role
                    </h3>
                    <p>
                        Independent Project
                    </p>
                    <h3>
                        Duration
                    </h3>
                    <p>
                        1 week
                    </p>
                    <h3>
                        Tools
                    </h3>
                    <p>
                        Adobe CC
                    </p>
                </div>
            </div>
            <div className="problem__wrapper">
                <div className="problem">
                    <h3>Problem</h3>
                    <p1>
                        I had no idea this challenge existed up until about a week before it was due. A problem I had no control over, but that's life.
                    </p1>
                    <br/>
                    <p2>
                        So it took a lot of long nights. Researching on my phone while at work and scribbling on anything I could write on.
                    </p2>
                </div>
                <div className="research">
                    <h3>Research</h3>
                    <p1>Never having deesigned jazz art before, I had to do a lot of research. Which meant a lot of listening to music, looking at album art, and watching <span> Soul</span> on repeat.
                    </p1>
                    <br/>
                    <p2>
                        I wanted to focus on a few main areas: Color, shapes, and typography.
                    </p2>
                    <br/>
                    <p3>
                        <span>Monsters Inc. </span>
                        had a strong jazz influence with its musical score and artwork, and it was Pixar's, so naturally I went there first. I filtered through hundreds of album covers and posters, with an emphasis on jazz, but not exclusively. Since this was my first time creating album art I had to keep y mind open to all forms.
                        <br/>
                        <a href="https://www.artofthetitle.com/title/monsters-inc/" target="_blank">Monsters Inc. Art</a>
                    </p3>
                </div>
            </div>
            <div className="moodBoard__title">
                <h3>Mood Board</h3>
            </div>
            <div className="moodBoard__wrapper">
                <div>
                    <div>
                        <img src={Squidward} alt=""/>
                    </div>
                    <div>
                        <img src={ColorGuys} alt=""/>
                    </div>
                    <div>
                        <img src={Caravan} alt=""/>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={BlueNote} alt=""/>
                    </div>
                    <div>
                        <img src={SaxGuy} alt=""/>
                    </div>
                    <div>
                        <img src={John} alt=""/>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={Vertigo} alt=""/>
                    </div>
                    <div>
                        <img src={AzzJa} alt=""/>
                    </div>
                    
                </div>
            </div>
            <div className="design__wrapper">
                <div className="design__wrapperHeader">
                    <div>
                        <div className="designTitle">
                            Design
                        </div>
                        <div className="designSubTitle">
                            Brainstorming
                        </div>
                    </div>
                    <div>
                        <p>
                            After watching the movie 4 times I just started scrubbing through to the "main" parts, which I learned was the  complete opposite point of the movie. As you reach the climax of the film Joe is realizing that it's all the "little things" that he was looking past that was what he loved about life.
                            <br/>
                            So I decided to watch the film again, but through a new lens.
                        </p>
                    </div>
                    
                </div>
                <div className="design__images">

                </div>
                <div className="design__challenges">
                    <div className="challenges__header">
                        <h1>
                            Challenges
                        </h1>
                    </div>
                    <div>
                        <p>
                            The more time I spent on the project more and more ideas kept coming up. Usually, idea synthesis is a good thing, but when you're already 3 weeks behind the competition it is all or nothing. If I liked a new idae more, it had to be good enough to justify leaving behind all the work preceding it.
                        </p>
                    </div>
                </div>
                <div className="design__iterations">
                    <div className="iterations__header">
                        <h1>
                            Iterations + <br/>
                            Prototypes
                        </h1>
                    </div>
                    <div>
                        <p>
                            What started with a couple ideas, eventually became a dozen or more that I wanted to explore further. Even with one week to work, I managed to go in depth in 3 seperate styles, before committing to my final design. It did cause unnecessary challenges, but made for a better product overall.
                        </p>
                    </div>
                </div>

                {/* Versions */}
                <div className="v1">
                    <div>
                        <h1>
                            V1
                        </h1>
                    </div>
                    <div className="v1__list">
                        <ul>
                            <li>Wanted to play around with an open-faced cover that was interactive with the art</li>
                            <li>A spotlight for each important musical character and their instruments</li>
                        </ul>
                    </div>
                    <div className="v1__image">
                        <img src={V1} alt=""/>
                    </div>
                </div>
            </div>

            </div>
        </div>
    )
}

export default Soul
