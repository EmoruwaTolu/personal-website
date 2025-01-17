import React, {useState} from 'react';
import CSSALandingPage from "../../../media/images/CSSA-landing-page.png";

interface WritingSectionProps {
    isFadingOut: boolean;
}

const projects = [
    {
        title: "CSSA Website",
        link: "https://cssa-aei.ca/",
        image: CSSALandingPage,
        description: "This is a website that I built for the Computer Science Students Association",
        tech: ["Frontend", "Web Design", "ReactJS", "CSS", "MongoDB", "GCP"]
    },
];

const WritingSection: React.FC<WritingSectionProps> = ({isFadingOut}) => {

    return(
            <div className='tab-info-1'>
                {projects.map((project, index) => (
                    <div key={index} className={`writings-container ${isFadingOut ? 'fade-out' : ''}`}>
                        <div>Coming soon :3</div>
                    </div>
                ))}
        </div>
    )
};

export default WritingSection;