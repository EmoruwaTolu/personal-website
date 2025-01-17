import React, { useEffect, useRef, useState } from 'react';
import './resume-layers-v1.css';

interface ResumeLayersProps {
    company: string;
    firstImage: string;
    secondImage: string;
    firstImageDetails: string;
    secondImageDetails: string;
}

const ResumeLayers: React.FC<ResumeLayersProps> = ({
    company,
    firstImageDetails,
    secondImageDetails,
    firstImage,
    secondImage
}) => {
    const [visibleLetters, setVisibleLetters] = useState<number[]>([]); // Track which letters are visible
    const companyNameRef = useRef<HTMLDivElement>(null);

    var timeFrame = "May 2023 - August 2023";
    var combo = company+timeFrame

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        combo.split('').forEach((_, index) => {
                            setTimeout(() => {
                                setVisibleLetters((prevVisibleLetters) => [...prevVisibleLetters, index]);
                            }, index * 100);
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (companyNameRef.current) {
            observer.observe(companyNameRef.current);
        }

        return () => {
            if (companyNameRef.current) {
                observer.unobserve(companyNameRef.current);
            }
        };
    }, [company]);

    return (
        <div className='resume-layer-container'>
            <div className='company-name' ref={companyNameRef}>
                {company.split('').map((letter, index) => (
                    <div
                        key={index}
                        className={`company-letter ${visibleLetters.includes(index) ? 'animate' : ''}`}
                    >
                        {letter === ' ' ? '\u00A0' : letter}
                    </div>
                ))}
            </div>
            <div className='job-pictures'>
                <div className='first-image-container'>
                    <img src={firstImage} alt="First office badge" />
                </div>
                <div className='first-image-details'>{firstImageDetails}</div>
                <div className='second-image-container'>
                    <img src={secondImage} alt="View from the office" />
                </div>
                <div className='second-image-details'>{secondImageDetails}</div>
            </div>
            <div className='job-info'>
                <div className='time-period'>
                    {timeFrame.split('').map((letter, index) => (
                        <div
                            key={index}
                            className={`company-letter ${visibleLetters.includes(index + company.length) ? 'animate' : ''}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {letter === ' ' ? '\u00A0' : letter}
                        </div>
                    ))}
                </div>
                <ol className='job-points'>
                    <li>Designed mockups for the UI of a new B2B service using Figma and Adobe Creative Cloud apps.</li>
                    <li>Presented the mockups and then implemented design feedback using TypeScript, CSS, Esri, nebulaGL, and Mapbox.</li>
                    <li>Created a validation system for GeoJSON files and leveraged AWS for user account validation and data storage.</li>
                    <li>Wrote unit and integration tests using CypressTests, ensuring the behavior of newly built components.</li>
                    <li>Presented the final product to the Amazon Location Services team, collected feedback, and launched the service to production.</li>
                </ol>
            </div>
        </div>
    );
};

export default ResumeLayers;
