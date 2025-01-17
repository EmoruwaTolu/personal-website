import React, { useState, useEffect } from 'react';
import CSSALandingPage from "../../../media/images/CSSA-landing-page.png";
import PLDatabase from "../../../media/images/PL_Database.png";
import ArmyShooter from "../../../media/images/ArmyShooter.png";
import './project-section.css';

interface ProjectSectionProps {
    isFadingOut: boolean;
}

const projects = [
    {
        title: "CSSA Website",
        link: "https://cssa-aei.ca/",
        image: CSSALandingPage,
        description: "This is a website that I built for the Computer Science Students Association",
        tech: ["Frontend", "Web Design", "ReactJS", "CSS", "MongoDB", "GCP"],
        infoPage: '/cssawebsite'
    },
    {
        title: "PL Database",
        link: "https://pl-database.onrender.com/",
        image: PLDatabase,
        description: "This is a website to visualize the statistics of teams and player in the Premier League 2021-22 to 2022-23 seasons.",
        tech: ["Web Scraping", "Frontend", "Backend", "MongoDB", "Data Visualization"],
        infoPage: '/pldatabase'
    },
    {
        title: "Army Shooter",
        link: "https://github.com/EmoruwaTolu/ArmyShooter-1.0.0",
        image: ArmyShooter,
        description: "This is a videogame I made using C++ that features various minigames, based on the story of WW2.",
        tech: ["C#", "Game Design"]
    },
];

const ProjectSection: React.FC<ProjectSectionProps> = ({ isFadingOut }) => {
    const [fadedInIndices, setFadedInIndices] = useState<number[]>([]);
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        // projects.forEach((_, index) => {
        //     setTimeout(() => {
        //         setFadedInIndices((prev) => [...prev, index]);
        //     }, index * 300); // Add a delay for each project (300ms interval)
        // });
        setFadeIn(true);
    }, []);

    return (
        <div className={`tab-info ${fadeIn ? 'fade-in' : ''} ${isFadingOut ? 'fade-out' : ''}`}>
            {projects.map((project, index) => (
                <div
                    key={index}
                    className={`project-1-container ${fadedInIndices.includes(index) ? 'fade-in' : ''} ${isFadingOut ? 'fade-out' : ''}`}
                >
                    <div className='project-1-header'>
                        <a className='project-title' href={project.infoPage}>{project.title}</a>
                        <div className='project-link'>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                    <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className='project-1-frame'>
                        <img src={project.image} alt={`${project.title} Screenshot`} />
                    </div>
                    <div className='project-blurb'>
                        <div className='project-description'>
                            <div className='project-statement'>{project.description}</div>
                            {project.infoPage !==  undefined && <a className='learn-more' href={project.infoPage}>Click to learn more</a>}
                        </div>
                        <div className='relevant-tech'>
                            {project.tech.map((tech, techIndex) => (
                                <div key={techIndex} className='pill'>{tech}</div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectSection;
