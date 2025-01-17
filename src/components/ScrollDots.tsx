import React, { useState, useEffect } from "react";
import './scroll-dots.css';

interface ScrollDotsProps {
    sectionIDs: string[];
}

const ScrollDots: React.FC<ScrollDotsProps> = ({sectionIDs}) => {
    const [activeSection, setActiveSection] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            const sectionOffsets = sectionIDs.map((id) => {
                const element = document.getElementById(id);
                return element ? element.offsetTop : 0;
            });

            const activeIndex = sectionOffsets.findIndex(
                (offset, index) => scrollPosition >= offset && (index === sectionIDs.length - 1 || scrollPosition < sectionOffsets[index + 1])
            );

            setActiveSection(activeIndex);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [sectionIDs]);

    const scrollToSection = (id : string, index: number) => {
        const section = document.getElementById(id);
        console.log(index)
        if(section){
            section.scrollIntoView({ behavior: "smooth" });
        }
        setActiveSection(index);
    };

    return (
        <div className="scroll-dots">
        {sectionIDs.map((id, index) => (
            <div
                key={id}
                className={`dot ${index === activeSection ? "active" : ""}`}
                onClick={() => scrollToSection(id, index)}
            ></div>
        ))}
        </div>
    );
};

export default ScrollDots;
