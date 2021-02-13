import React from 'react';
import './Art.css';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import Navbar from '../../components/Navbar/Navbar';

function Art() {
    return (
        <div>
            <Navbar/>
            <div className="art">
                <ImageGallery/>
            </div>
        </div>
    )
}

export default Art
