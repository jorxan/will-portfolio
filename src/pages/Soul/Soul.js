import React from 'react';
import CaseStudyHeader from '../../components/CaseStudy/CaseStudyHeader';
import SoulRecordImg from '../../images/Intersect.png';
import SoulTitle from '../../images/Group 970.png'
import Navbar from '../../components/Navbar/Navbar';
import './Soul.css';
import MoodBoardFull from '../../images/Group 1004.png'
import V1 from '../../images/Capture3 1.png';
import V2 from '../../images/Capture4 1.png';
import V3 from '../../images/Capture6 1.png';
import V4 from '../../images/Capture7 1.png';
import FrontCover from '../../images/Frame 5.png';
import BackCover from '../../images/Frame 3.png';
import Final from '../../images/Final 1.png';
import SoulDrawing1 from '../../images/image 7.png';
import SoulDrawing2 from '../../images/image 1.png';
import MatchImg from '../../images/IMG_5876 1.png';
import SoulDrawing3 from '../../images/image 14.png';
import Spool from '../../images/IMG_5867 2.png';
import Bagelcase from '../../images/IMG_5865 2.png';
import Lollipop from '../../images/IMG_5866 2.png';
import SoulHole from '../../images/IMG_5870 2.png';
import Footer from '../../components/Footer/Footer'



function Soul() {

    const FirstList = [
        {"content": "Wanted to play around with an open-faced cover that was interactive with the art.", },
        {"content": "A spotlight for each important musical character and their instruments."}
    ]
    return (
        <div>
            <Navbar/>
            <CaseStudyHeader backgroundColor="soul__background" heroImg={SoulRecordImg} titleImg={SoulTitle}/>
            <div className="container">
                <div className="soul__container">
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
                    <div>
                        <div>
                            <h3>
                                Team/Role
                            </h3>
                            <p>
                                Independent Project
                            </p>
                        </div>
                        <div>
                            <h3>
                                Duration
                            </h3>
                            <p>
                                1 week
                            </p>
                        </div>
                        <div>
                            <h3>
                                Tools
                            </h3>
                            <p>
                                Adobe CC
                            </p>
                        </div>
                    </div>  
                </div>
            </div>
            <div className="problem__wrapper">
                <div className="problem">
                    <h3>Background</h3>
                    <div>
                    <p>
                        I had no idea this challenge existed up until about a week before it was due. A problem I had no control over, but that's life.
                    </p>
                    <p>
                        So it took a lot of long nights, and using any free time I had to research and brainstorm.
                    </p>
                    </div>
                    
                </div>
                <div className="research">
                    <div>
                    <h3>Research</h3>
                    </div>
                    <div>
                    <p>Never having designed jazz art before, I had to do a lot of research. Which meant a lot of listening to music, looking at album art, and watching <span> Soul</span> on repeat.
                    </p>
                    <p>
                        I wanted to focus on a few main areas: color, shapes, and typography.
                    </p>
                    <p>
                        <span>Monsters Inc. </span>
                        had a strong jazz influence with its musical score and artwork, and it was Pixar's, so naturally I went there first. I filtered through hundreds of album covers and posters, with an emphasis on jazz, but not exclusively. Since this was my first time creating album art I had to keep my mind open to all forms.
                        <p>
                            <a href="https://www.artofthetitle.com/title/monsters-inc/" target="_blank">Monsters Inc. Art</a>
                        </p>
                        
                    </p>                  
                    </div>
                </div>
            </div>
            <div className="moodBoard__title">
                <h3>Mood Board</h3>
            </div>
            <div className="moodBoard__wrapper">
             <div>
                 <img src={MoodBoardFull} alt=""/>
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
                    <div className="design__text">
                        <p>
                        After watching the movie 4 times I just started scrubbing through to the “main” parts, which I learned was the complete opposite point of the movie.  As you reach the climax of the film Joe is realizing that its all the “little things” that he was looking past that was what he loved about life.
                        </p> 
                            <br/>
                            <p>
                            So I made sure to watch the film again through this new lens.
                            </p>
                    </div>
                    
                </div>
                <div className="design__images">
                    <div className="design__imagesr1">
                        <div>
                            <img src={SoulDrawing1} alt=""/>
                        </div>
                        <div>
                            <img src={SoulDrawing2} alt=""/>
                        </div>
                        <div>
                            <img src={MatchImg} alt=""/>
                        </div>
                    </div>
                    <div className="design__imagesr2">
                        <div>
                            <img src={SoulDrawing3} alt=""/>
                        </div>
                        <div className="pocketDump">
                            <div className="pdl">
                                <div>
                                    <img src={Spool} className="spool" alt=""/>
                                </div>
                                <div>
                                    <img src={Lollipop} alt=""/>
                                </div>
                            </div>
                            <div className="pd2">
                                <div>
                                    <img src={Bagelcase} className="bagelcase" alt=""/>
                                </div>
                                <div>
                                    <img src={SoulHole} alt=""/>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="design__challenges">
                    <div className="challenges__header">
                        <h1>
                            Challenges
                        </h1>
                    </div>
                    <div>
                        <p>
                            The more time I spent on the project more and more ideas kept coming up. Usually, idea synthesis is a good thing, but when you're already 3 weeks behind the competition it is all or nothing. If I liked a new idea more, it had to be good enough to justify leaving behind all the work preceding it.
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
                        What started with a couple ideas, eventually became a dozen more that I wanted to explore further.  Even with one week to work, I managed to go in depth in 3 separate styles, before committing to my final design.  It did cause unnecessary challenges but made for a better product overall since I used elements from each iteration.
                        </p>
                    </div>
                </div>

                {/* Versions */}
                <div className="version">
                    <div>
                        <h1>
                            V1
                        </h1>
                    </div>
                    <div className="version__columnR">
                    <div className="version__list">
                        <ul>
                        <li>Wanted to play around with an open-faced cover that was interactive with the art.</li>
                        <li>A spotlight for each important musical character and their instruments.</li>
                        </ul>
                    </div>
                    <div className="version__image">
                        <img src={V1} alt=""/>
                    </div>
                    </div>

                </div>
                <div className="version">
                    <div>
                        <h1>
                            V2
                        </h1>
                    </div>
                    <div className="version__columnR">
                    <div className="version__list">
                        <ul>
                        <li>Tried to bring the spotlight out from the inside covers and in to the cover (still interactive).</li>
                        <li>Couldn't make this design work with other covers.</li>
                        </ul>
                    </div>
                    <div className="version__image">
                        <img src={V2} alt=""/>
                    </div>
                    </div>
                </div>
                <div className="version">
                    <div>
                        <h1>
                            V3
                        </h1>
                    </div>
                    <div className="version__columnR">
                    <div className="version__list">
                        <ul>
                        <li>After spending too much energy into my first 2 designs I wanted to go in a completely different direction.</li>
                        <li>Started abstracting characters in to significant items throughout the movie. (Pocket Dump items)</li>
                        <li>Incorporated jazz and pop art themes.</li>
                        </ul>
                    </div>
                    <div className="version__image">
                        <img src={V3} alt=""/>
                    </div>
                    </div>
                </div>
                <div className="version">
                    <div>
                        <h1>
                            V4
                        </h1>
                    </div>
                    <div className="version__columnR">
                    <div className="version__list">
                        <ul>
                        <li>All items have been added.</li>
                        <li>Colors and Composition are set.</li>
                        </ul>
                    </div>
                    <div className="version__image">
                        <img src={V4} alt=""/>
                    </div>
                    </div>
                </div>
                <div className="deliverables__wrapper">
                    <div className="deliverables__titleArea">
                        <div className="deliverables__title">
                            <h1>Final <br/> Deliverables</h1>
                        </div>
                        <div className="deliverables__titleText">
                            
                        </div>
                    </div>
                    <div className="final__wrapper">
                    <div className="covers__wrapper">
                        <div>
                            <img src={FrontCover} alt=""/>
                        </div>
                        <div>
                            <img src={BackCover} alt=""/>
                        </div>
                    </div>
                    <div className="deliverables__content">
                        <p>
                            I started with spotlights for the important characters for my first iteration, because I thought that would capture the essence of the movie. (V1, V2) <br/>
                        Soon realizing that each important scene in the movie had Joe interacting with someone in conflict, and it always had some item tied to it. I refer to them as the "pocket dump" items from the climax of the movie. The Pizza Crust, Metro Card, Bagel, Lollipop, Spool, and Flower Pedal. Using those items in my designs became the main priority. (V3-Final) For the back cover, there was a scene where Joe is walking through his hall of memories and sees a pedestal with some embarrassing items, and now as a changed soul I wanted to replace those with what he values now.
                        </p>
                        
                    </div>
                    <div className="deliverables__finalImage">
                        <img src={Final} alt=""/>
                    </div>
                    </div>
                    <div className="takeaways">
                        <div className="takeaways__title">
                            <h1>Takeaways</h1>
                        </div>
                        <div className="takeaways__content">
                            <p>
                                Unexpected time-crunches are a very real thing that happen in every day situations. Learning to accept it and optimize workflow is something that everyone should always be working on, but this project really pushed me to work in situations I'm not used to.
                            </p>
                            <br/>
                            <p>
                            Throughout this project I was able to experience the full scope of a product from brainstorming an idea to the final design.  I wish I could’ve fleshed out more of my ideas, but since I had such limited time there was a lot of prioritizing and pivoting.
                            </p>
                            <br/>
                            <p>
                            Overall, I’m really happy with how this turned out.  I was able to find a style that imitated jazz art while still keeping a friendly pop.  The simple shapes and bold colors create an amazing backdrop for the items at play.
                            </p>
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
