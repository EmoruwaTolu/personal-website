import React, { useState , Suspense , useEffect } from 'react';
import HomeLayer1 from './HomeLayer1';
import HomeLayer2 from './HomeLayer2';
import './home-style.css';

const Home: React.FC = () => {
  
    return (
        <div className='home-layers'>
            <Suspense fallback={<div>Loading...</div>}>
                <HomeLayer1 />
                <HomeLayer2 />
            </Suspense>
        </div>
    );
};

export default Home;