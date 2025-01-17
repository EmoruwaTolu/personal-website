import React, { useEffect, useState } from 'react';
import AmazonLogo from '../../../media/images/amazon-logo.png';
import TrendMicroLogo from '../../../media/images/TrendMicroLogo.jpg';
import NRCLogo from '../../../media/images/NRCLogo.png';
import './experience-section.css';

interface ExperienceSectionProps {
    isFadingOut: boolean;
}

const experiences = [
    {
        company: "Amazon Web Services",
        role: "Software Engineer Intern",
        image: AmazonLogo,
        time: "May 2023 - August 2023",
        tech: ["AWS", "Figma", "ReactJS", "Typescript", "CypressTests", "Mapbox", "D3", "Deck.GL", "GeoJSON"],
        location: "Vancouver, BC",
        points: [
            "Designed and built a platform on which users are able to visualize, edit, and draw geofences using Mapbox, DeckGL, and D3.",
            "Managed and validated user geofences on the AWS Console.",
            "Wrote unit tests for backend functions and used Cypress to test UI components behaviour."
        ]
    },
    {
        company: "Trend Micro",
        role: "Cloud Engineer Intern",
        image: TrendMicroLogo,
        time: "January 2024 - April 2024",
        tech: ["AWS", "GCP", "Azure", "Go", "Serverless Framework", "Cybersecurity"],
        location: "Ottawa, ON",
        points: [
            "Wrote code to validate user credentials and rotate them after a period of time to ensure account security.",
            "Redesigned database schema to help backend functions become more optimized.",
            "Added functionality to metric loggers to gather more insightful information about user behaviour."
        ]
    },
    {
        company: "National Research Canada",
        role: "Data Visualization Engineer",
        image: NRCLogo,
        time: "September 2024 - December 2024",
        tech: ["AWS", "D3", "React", "ArcGIS", "Esri", "Data Visualization"],
        location: "Ottawa, ON",
        points: [
            "Designed and built a platform using React that allowed users to view the historical data of the water flow and water level, at different points along the river.",
            "Built a system where water levels on the river could be predicted based on changes the user made at different points.",
            "Added functionality to metric loggers to gather more insightful information about user behaviour."
        ]
    },
];

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ isFadingOut }) => {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        // Trigger fade-in when the component mounts
        setFadeIn(true);
    }, []);

    return (
        <div className={`experience-section ${fadeIn ? 'fade-in' : ''} ${isFadingOut ? 'fade-out' : ''}`}>
            {experiences.map((job, index) => (
                <div key={index} className="experience-1-container">
                    <div className='job-header'>
                        <div className='left-experience'>
                            <img src={job.image} alt={`${job.company} Logo`} />
                            <div className='job-details'>
                                <div className='company-title'>{job.company}</div>
                                <div className='intern-date' style={{ margin: "1vw 0 0 0" }}>{job.time}</div>
                                <div className='role-location' style={{ opacity: "0.5" }}>{job.location}</div>
                            </div>
                        </div>
                        <div className='job-experience'>
                            <div className='role-title'>{job.role}</div>
                            <ul className='things-done' style={{ padding: 0 }}>
                                {job.points.map((things, thingsIndex) => (
                                    <li key={thingsIndex}>{things}</li>
                                ))}
                            </ul>
                            <div className='technologies'>
                                {job.tech.map((tech, techIndex) => (
                                    <div key={techIndex} className='pill'>{tech}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ExperienceSection;


                    {/* <div>
                        <div style={{width: `100%`, height: `12vw`, display: `flex`, boxSizing: `border-box`, alignItems: `center`}}>
                            <div className='company-image-container' style={{width: `20%`}}>
                                <div className='image-box' style={{backgroundColor: "#232F3F", height: `7vw`, width: `7vw`,borderRadius: `50%`, overflow: `hidden`, display: `flex`, 
                                    alignItems: `center`, justifyContent: `center`}}>
                                    <img className='company-image' src={AmazonLogo} style={{height: `100%`, width: `100%`, objectFit: `scale-down`}}/>
                                </div>
                            </div>
                            <div className='company-job-info' style={{width: `75%`, flexDirection: `column`, display: `flex`, justifyContent: `start`, height: `fit-content`}}>
                                <p className='job-title' style={{width:`fit-content`, margin: `0`}}>Software Engineer Intern</p>
                                <p className='job-place' style={{width:`fit-content`, margin: `0`}}>Amazon Web Services</p>
                                <p style={{width:`fit-content`, margin: `1em 0`}}>May 2023 - August 2023</p>
                            </div>
                            <div
                                className="dropdown-button"
                                style={{ width: "5%", cursor: "pointer" }}
                                onClick={handleToggle} 
                                >
                                {isCollapsed ? "v" : "^"}
                            </div>
                        </div>
                        {!isCollapsed && (
                            <div
                            className="job-done-stuff"
                            style={{ boxSizing: "border-box", marginTop: "1em" }}
                            >
                            <ul className="things-done" style={{ padding: 0 }}>
                                <li>
                                Designed and built a platform on which users are able to
                                visualize, edit, and draw geofences using Mapbox, DeckGL, and D3.
                                </li>
                                <li>
                                Managed and validated user geofences on the AWS Console.
                                </li>
                                <li>
                                Wrote unit tests for backend functions and used Cypress to test UI
                                components behaviour.
                                </li>
                            </ul>
                            </div>
                        )}
                    </div> */}