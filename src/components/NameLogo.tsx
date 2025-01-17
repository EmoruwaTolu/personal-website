import React from 'react';
import './logo.css';

interface NameLogoProps {
}

const NameLogo: React.FC<NameLogoProps> = () => {

    return(
        <div className='name-holder'>
            <div className='logo-name'>
                <p className='name'>TOLUWANIMI</p>
                <p className='pronunciation'>(toe-loo-wah-knee-me)</p>
            </div>
            <div className='logo-smaller'>
                <p className='logo-lastname'>EMORUWA</p>
                <p className='pronunciation-l'>(em-oh-roo-wah)</p>
            </div>
        </div>
    )
};

export default NameLogo;