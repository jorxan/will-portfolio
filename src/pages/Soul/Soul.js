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
                    {/* Will Should rewrite this */}
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
                    {/* will should rewrite this */}
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
                <div className="grid1">
                    <div className="col1g1">
                        <div>
                            <img src={Squidward} alt=""/>
                        </div>
                        <div>
                            <img src={BlueTrumpet} alt=""/>
                        </div>
                    </div>
                    <div className="col2g1">
                        <div>
                            <img src={BlueNote} alt=""/>
                        </div>
                        <div>
                            <img src={ColorGuys} alt=""/>
                        </div>
                    </div>
                    <div className="col3g1">
                        <div>
                            <img src={SaxGuy} alt=""/>
                        </div>
                        <div>
                            <img src={JazzAndArt} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="grid2">
                    <div className="grid2L">
                        <div className="grid2__row1">
                            <div>
                                <img src={Bongos} alt=""/>
                            </div>
                            <div>
                                <img src={JazzInDaHouse} alt=""/>
                            </div>
                        </div>
                        <div className="grid2__row2">
                            <div>
                                <img src={PopFood} alt=""/>
                            </div>
                            <div>
                                <img src={Dots} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="grid2R">
                        <div>
                            <img src={Vertigo} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="grid3">
                    <div className="grid3L">
                        <div>
                            <img src={AzzJa} alt=""/>
                        </div>
                    </div>
                    <div className="grid3R">
                        <div className="grid3__row1">
                            <div>
                                <img src={John} alt=""/>
                            </div>
                            <div>
                                <img src={GardenGate} alt=""/>
                            </div>
                        </div>
                        <div className="grid3__row2">
                            <div>
                                <img src={Caravan} alt=""/>
                            </div>
                            <div>
                                <img src={WillFilter} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Soul
