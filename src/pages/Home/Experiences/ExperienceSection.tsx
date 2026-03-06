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
        time: "May 2025- August 2025",
        tech: ["AWS", "DynamoDB", "AWS RDS", "Java"],
        location: "Toronto, ON",
        points: [
            "Leveraged AWS tools like DynamoDB, Lambda, and SNS to improve the speed at which teams deployed agents for AWS Relational Databases",
            "Designed and built new workflows that improved the management of database resources.",
            "Optimized existing workflows to improve database efficiency and reduce cost."
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
            "Built metric loggers to gain more insight into user behaviour while they used the platform."
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
            "Created a serverless framework and built cronjobs that worked to improve customer account security.",
            "Designed and built AWS Schedules, Lambdas to help more efficiently protect user privacy."
        ]
    },
    {
        company: "Amazon Web Services",
        role: "Software Engineer Intern",
        image: AmazonLogo,
        time: "May 2023 - August 2023",
        tech: ["AWS", "Figma", "ReactJS", "Typescript", "CypressTests", "Mapbox", "D3", "Deck.GL", "GeoJSON"],
        location: "Vancouver, BC",
        points: [
            "• Designed mockups for the UI of a new B2B service that was launched using Figma and Adobe Creative Cloud apps.",
            "Designed and built a platform on which users are able to visualize, edit, and draw geofences using Mapbox, DeckGL, and D3.",
            "Managed and validated user geofences on the AWS Console.",
            "Wrote unit tests for backend functions and used Cypress to test UI components behaviour."
        ]
    }
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