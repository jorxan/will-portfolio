import React from 'react';
import './ImageGallery.css';
import Shenron from '../../images/image 15.png';
import CatBus from '../../images/catbus_img.png';
import Monroe from '../../images/monroe_img.png';
import Vader from '../../images/vader_img.png';
import Groot from '../../images/groot_img.png';
import Prime from '../../images/prime_img.png';
import Catfish from '../../images/catb_img.png';
import Dino from '../../images/jurrasic_img.png';

function ImageGallery() {
    return (
        <div className="gallery__wrapper">
            <div>
                <img src={Shenron} alt=""/>
            </div>
            <div className="gallery__wrapperGrid">
                <div>
                    <div>
                        <img src={CatBus} alt=""/>
                    </div>
                    <div>
                        <img src={Groot} alt=""/>
                    </div>
                </div>
                <div>
                <div>
                        <img src={Monroe} alt=""/>
                    </div>
                    <div>
                        <img src={Prime} alt=""/>
                    </div>
                    <div>
                        <img src={Dino} alt=""/>
                    </div>
                </div>
                <div>
                <div>
                        <img src={Vader} alt=""/>
                    </div>
                    <div>
                        <img src={Catfish} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageGallery
