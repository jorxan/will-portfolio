import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Projects from '../Projects/Projects';
import TitlePage from '../TitlePage/TitlePage';
import './Home.css'

function Home() {
    return (
        <div>
            <Navbar/>
            <div className="container">
                <TitlePage/>
                <Projects/>
            </div>
        </div>
    )
}

export default Home;