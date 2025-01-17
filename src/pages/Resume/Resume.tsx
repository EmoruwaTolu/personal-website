import React, { Suspense } from 'react';
import AWSLogo from "../../media/images/amazon-logo.png";
import './resume-style.css';

const Resume: React.FC = () => {

    return (
        <div className='resume-layers'>
            <Suspense fallback={<div>Loading...</div>}>
                <div className='layer-1-container'>
                    <div className='exp-upper-section'>
                        <div className='page-title'>Experience</div>
                        <div className='title-blurb'>
                            Take a look at some of the places I've worked
                        </div>
                    </div>
                    <div className='exp-lower-section'>
                        <div className='job'>
                            <div className='job-info'>
                                <div className='company-logo-container'>
                                    <img src={AWSLogo} />
                                </div>
                                <div className='description'>
                                    LeBombaclaat
                                </div>
                            </div>
                        </div>
                        <div className='job'>
                            
                        </div>
                        <div className='job'>
                            
                        </div>
                        <div className='job'>
                            
                        </div>
                    </div>
                </div>
            </Suspense>
        </div>
    );
};

export default Resume;