import React from 'react';
import CaseStudyHeader from '../../components/CaseStudy/CaseStudyHeader';
import RoomLogo from '../../images/roomLogo.png';
import RoomImg from '../../images/roomImg.png';
import "./MakeRoom.css";
import Navbar from '../../components/Navbar/Navbar';
import ArchSiteImg from '../../images/Group 1175.jpg';
import RoomPlannerImg from '../../images/Group 1148.jpg';
import OmniGraffleImg from '../../images/Group 1149.jpg';
import Competitor from '../../components/CompetitorAnalysis/Competitor';
import RoomFlow from '../../images/Group 1144.jpg';
import MakingWireframe from '../../images/roomWireframe.jpg';
import FillingWireframe from '../../images/fillingRoomWireframe.jpg';
import Prototype from '../../images/Group 1176.jpg';
import Before1 from '../../images/before1.png';
import After1 from '../../images/after1.png';
import Before2 from '../../images/before2.png';
import After2 from '../../images/after2.png';
import DimensionToggle from '../../images/Room Screen (Dimensions).png';
import HifiLogo from '../../images/Group 1174.jpg';
import Hifi1 from '../../images/Group 1170.jpg';
import Hifi2 from '../../images/Group 1172.jpg';
import Hifi3 from '../../images/Group 1171.jpg';
import Screens1 from '../../images/Screens1.png';
import Screens2 from '../../images/Screens2.png';
import Screens3 from '../../images/Screens3.png';
import Screens4 from '../../images/Screens4.png';
import Screens5 from '../../images/Screens5.png';
import Screens6 from '../../images/Screens6.png';
import Screens7 from '../../images/Screens7.png';
import Screens8 from '../../images/Screens8.png';
import Screens9 from '../../images/Screens9.png';
import Screens10 from '../../images/Screens10.png';
import Screens11 from '../../images/Screens11.png';
import Screens12 from '../../images/Screens12.png';
import Screens13 from '../../images/Screens13.png';
import Screens14 from '../../images/Screens14.png';
import Screens from '../../components/Screens/Screens';

function MakeRoom() {

    return (
        <div>
            <Navbar/>
            <div className="room__header">
            <CaseStudyHeader backgroundColor="room__background" heroImg={RoomImg} titleImg={RoomLogo}/>
            </div>
                <div className="room__headerContainer">
                <div className="summary__header">
                    <div className="adc">
                        Mobile App Design
                    </div>
                    <h1>
                        Make Room
                    </h1>
                    <div className="room__role">
                        <div className="room__roleLeft">
                            <div className="room__duration">
                                <h3>Duration</h3>
                                <p>3 weeks</p>
                            </div>
                            <div className="tools">
                                <h3>Tools</h3>
                                <p>Figma</p>
                                <p>Zoom</p>
                                <p>InVision</p>
                            </div>
                        </div>
                        <div className="room__roleRight">
                        <div className="room__roleTitle">
                                <h3>Role</h3>
                                <p>Lead Design</p>
                        </div>
                        <div className="team">
                            <h3>Team</h3>
                            <p>Stephen R.</p>
                            <p>Edgar M.</p>
                            <p>Will C.</p>
                        </div>
                        </div>
                    </div>
                </div>
            <div className="room__description">
            <p>Whether you’re a one-time mover or someone who’s always changing it up, MakeRoom can make the process of laying out your room a simple task.
            By simplifying all items into basic blocks that are accurately measured, users are able to take advantage of the grid system and the shape builder tool to create an accurate vision of their space.
            </p>
            </div>
                </div>
                <div className="problem__wrapperMR">
                <div className="problem">
                    <h3>Problem</h3>
                    <div>
                    <p>People often feel overwhelmed when taking on the challenge of rearranging their room.  Setbacks like cleaning, measuring, and actually moving the items can all add to an unenjoyable experience.</p>
                    </div>
                    
                </div>
                <div className="research">
                    <div>
                    <div className="product__opportunityTitle">
                        <h3>Product</h3>
                        <h3>Opportunity</h3>
                    </div>
                    </div>
                    <div>
                    <p>Software to visualize room furnishings already exist, with companies like Amazon and IKEA introducing 3D/AR walkthroughs of what the product could look like in your space.  However, this software is designed to show you one item in a stationary room.  Having the freedom to arrange all the content of a room with accurate measurements felt more in demand.</p>               
                    </div>
                </div>
            </div>
            <div className="research__container">
                <div className="research__containerHeader">
                    <div className="research__title">
                        <h3>Research</h3>
                    </div>
                    <h3>
                        5 Interviews
                    </h3>
                </div>
                <div className="research__objective">
                    <div className="objective__title">
                        <h3>
                            Objective
                        </h3>
                        </div>
                        <p>Find common pain points that would come up throughout the process of rearranging a room.</p>
                    </div>
                    <div className="user__insight">
                    <div className="insight__title">
                        <h3>
                            User Insight
                        </h3>
                        </div>
                        <ul>
                            <li>
                                <p>- Found that most people moved/rearranged alone</p>
                            </li>
                            <li>
                                <p>- Measuring, cleaning, and moving the furniture</p>
                            </li>
                            <li>
                                <p>- If something didn’t fit or they didn’t like it, they had to restart the process</p>
                            </li>
                        </ul>

                </div>
            </div>
            <div className="competitor__analysisWrapper">
                <div className="competitor__analysisTitle">
                    <h1>Competitor Analysis</h1>
                </div>
                <Competitor img={ArchSiteImg} title="ArchSite" pros={["- ArchSite’s drawing feature is responsive and easy to use"]} cons={["- Mobile app UI is not user friendly, small touch targets", "- User is flustered with preset items", "- No labeling options, less organization", "- Pay to use more “advanced” features"]} competitorType="Direct Competitor"/>
                <Competitor img={RoomPlannerImg} title="Room Planner" pros={["- Personalization", "- 3D rendering", "- Suggested room layouts"]} cons={["- Constant pop ups", "- Pay to use basic features", "- Too many options for preset items", "- Unecessary labels"]} competitorType="Direct Competitor"/>
                <Competitor img={OmniGraffleImg} title="OmniGraffle" pros={["- Can create fast and easy shapes/layouts", "- Labeling is easy and intuitive", "- Useful tools"]} cons={[""]} competitorType="Indirect Competitor"/>
                <div className="takeaways__competitorAnalysisWrapper">
                    <div className="takeaways__competitorAnalysisTitle">
                        <h3>Takeaways</h3>
                    </div>
                    <div className="takeaways__competitorAnalysisText">
                        <p>From looking at our competitors we saw some major features we wanted to bring over: </p>
                        <ul>
                            <li>
                                <p>- Simple grid in which the user can build simple shapes</p>
                            </li>
                            <li>
                                <p>- Labeling options</p>
                            </li>
                            <li>
                                <p>- More focus on organizaation of space rather than the details of the items</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="target__userWrapper">
                <h1>Who are we designing for?</h1>
                <p>
                     <span>Target user 1 - College students </span>
                      can use MakeRoom to pre-plan their dorms making the buying process for new furniture easier.
                </p>
                <p>
                     <span>Target user 2 - Int. designers, restaurant/business owners </span>
                     can imagine a space before putting in the manual labor of moving large items.
                </p>
            </div>
            <div className="ideating__wrapper">
                <h1 className="ideating__header">Ideating</h1>
                <div className="user__flowWrapper">
                    <h3>User Flow</h3>
                    <div className="room__flowWrapper">
                        <img src={RoomFlow} alt=""/>
                    </div>
                </div>
                <div className="wireframes__wrapper">
                    <h1>Wireframes</h1>
                    <div className="making__room">
                        <h3>Making your room</h3>
                        <img src={MakingWireframe} alt=""/>
                    </div>
                    <div className="filling__room">
                        <h3>Filling your room</h3>
                        <img src={FillingWireframe} alt=""/>
                    </div>
                </div>
                <div className="prototype__wrapper">
                    <h3>Prototype</h3>
                    <div className="prototype__imgWrapper">
                        <img src={Prototype} alt=""/>
                    </div>
                </div>
                <div className="testing__wrapper">
                    <h2>Testing</h2>
                    <ul>
                        <li>Can users create a new space?</li>
                        <li>Do they understand how to use the shape builder?</li>
                    </ul>
                    <p>Once the prototype was made we were able to start testing users.  We wanted to see if the user could could use the shape builder tool to make their room and some basic items to fill it.</p>
                </div>
                <div className="user__feedbackWrapper">
                    <h2>User Feedback</h2>
                    <ul>
                        <li>Can I delete a misplaced item or go back?</li>
                        <li>How do I see/change the dimensions?</li>
                        <li>Too many screens before you get to your room</li>
                    </ul>
                </div>
            </div>
            <div className="iterating__wrapper">
                <h1 className="iterating__title">
                    Iterating
                </h1>
                <div className="iterations__wrapper">
                    <div className="iterations__left">
                    <div className="before__after1">
                        <div className="before__afterGrid">
                            <div>
                                <h3>Before</h3>
                                <div className="before__afterImgWrapper">
                                    <img src={Before1} alt=""/>
                                </div>
                            </div>
                            <div>
                                <h3>After</h3>
                                <div className="before__afterImgWrapper">
                                    <img src={After1} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="before__after2">
                        <div className="before__afterGrid">
                            <div>
                                <h3>Before</h3>
                                <div className="before__afterImgWrapper">
                                    <img src={Before2} alt=""/>
                                </div>
                            </div>
                            <div>
                                <h3>After</h3>
                                <div className="before__afterImgWrapper">
                                    <img src={After2} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="dimension__toggleWrapper">
                        <div className="before__afterImgWrapper dimension__toggle">
                           <img src={DimensionToggle} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="iterations__text">
                    <div className="iterations__textLeft">
                        <div>
                            <p>Cleaner Ui and a trash can feature to remove unwanted items</p>
                        </div>
                        <div>
                            <p>Larger buttons for ease of use</p>
                        </div>
                    </div>
                    <div className="iterations__textRight">
                        <div>
                            <p>Dimensions toggle was added to the final interation</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hifi__wrapper">
                <div className="hifi__grid">
                    <div className="hifi__text">
                        <h1>Hi-Fi Prototype</h1>
                        <p>After testing we made some changes to the UI and features that were misunderstood were simplified.</p>
                        <div className="hifi__logo">
                            <img src={HifiLogo} alt=""/>
                        </div>
                    </div>
                    <div className="hifi__images">
                        <div>
                            <img src={Hifi1} alt=""/>
                        </div>
                        <div>
                            <img src={Hifi2} alt=""/>
                        </div>
                        <div>
                            <img src={Hifi3} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <Screens imgs={[Screens1, Screens2, Screens3, Screens4, Screens5, Screens6, Screens7, Screens8, Screens9, Screens10, Screens11, Screens12, Screens13, Screens14]}/>
            <div className="makeRoom__conclusion">
                <h1>Takeaways</h1>
                <p>Trying to find the balance between listening to the users feeback and trusting your gut feeling for design choices was a difficult part of the process and always will be.</p>
                <br/>
                <p>Every point in the process there was an idea that made its way on to the final product.  So we had to make sure to listen to all the feedback as areas of improvement instead of criticism. </p>
            </div>
            </div>
    )
}

export default MakeRoom
