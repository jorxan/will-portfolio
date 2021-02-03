import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Projects from '../Projects/Projects';
import TitlePage from '../TitlePage/TitlePage';
import './Home.css'

function Home() {
    return (
        <div className="home__wrapper">
            <Navbar/>
            <div className="container">
                <div className="home__content">
                    <TitlePage/>
                    <Projects/>
                </div>
            </div>
        </div>
    )
}

export default Home;