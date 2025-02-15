import React, {useState} from 'react';
import CSSALandingPage from "../../../media/images/CSSA-landing-page.png";
import { Link } from 'react-router-dom';

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
            <div className='tab-info-1' style={{textAlign:"left", height:"100%"}}>
                {projects.map((project, index) => (
                    <div key={index} className={`writings-container ${isFadingOut ? 'fade-out' : ''}`} style={{boxSizing: "border-box", padding: "1.5vw 0 ", margin: "1vw 0", borderBottom: "1px dashed #334c34",  borderTop: "1px dashed #334c34", fontSize: "0.85em"}}>
                        <Link to={"/best-offences"} style={{textDecoration: "none",  color: "black"}}>Are We Witnessing the Greatest Offences Ever?</Link>
                    </div>
                ))}
        </div>
    )
};

export default WritingSection;