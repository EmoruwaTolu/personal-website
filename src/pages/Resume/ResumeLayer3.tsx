import React from 'react';
import './resume-layers-v1.css';

interface ResumeLayer3Props {
    company: string;
    firstImage: string;
    secondImage: string;
    firstImageDetails: string;
    secondImageDetails: string;
}

const ResumeLayer3: React.FC<ResumeLayer3Props> = ({ company, firstImageDetails, secondImageDetails, firstImage , secondImage}) => {
    console.log(company.split(''))

    var timeFrame = "May 2023 - August 2023";

    return(
        <div className='resume-layer-container'>
            <div className='company-name'>
                {company.split('').map((letter, index) => (
                    <div
                        key={index}
                        className='company-letter'
                        style={{ animationDelay: `${index * 0.075}s` }}
                    >
                        {letter === ' ' ? '\u00A0' : letter}
                    </div>
                ))}
            </div>
            <div className='job-pictures'>
                <div className='first-image-container'>
                    <img src={firstImage}/>
                </div>
                <div className='first-image-details'>My first office badge</div>
                <div className='second-image-container'>
                    <img src={secondImage}/>
                </div>
                <div className='second-image-details'>The view from the office</div>
            </div>
            <div className='job-info'>
                <div className='time-period'>
                    {timeFrame.split('').map((letter, index) => (
                        <div
                            key={index}
                            className='company-letter'
                            style={{ animationDelay: `${index * 0.075}s` }}
                        >
                            {letter === ' ' ? '\u00A0' : letter}
                        </div>
                    ))}
                </div>
                <ol className='job-points'>
                    <li>Designed mockups for the UI of a new B2B service using Figma and Adobe Creative Cloud apps.</li>
                    <li>Presneted the mockups and then Implemented design feedback and built the service using TypeScript, CSS, Esri, nebulaGL, and Mapbox.</li>
                    <li>
                        Created a validation system for the GeoJSON files uploaded to ensure data integrity, a view from which users could
                        visualize, edit, delete, and add geofences to their collection, and leveraged AWS to validate user accounts and
                        process user data for storage.
                    </li>
                    <li>
                        Wrote unit and integration tests for the refactored code using CypressTests to ensure proper behaviour of newly built components, and upgraded used packages.
                    </li>
                    <li>
                        Presented the final product to the Amazon Location Services team, Collected feedback and launched service to production
                    </li>
                </ol>
            </div>
        </div>
    )
};

export default ResumeLayer3;