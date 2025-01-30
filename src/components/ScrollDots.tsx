import React, { useState, useEffect } from "react";
import './scroll-dots.css';

interface ScrollDotsProps {
    sectionIDs: string[];
}

const ScrollDots: React.FC<ScrollDotsProps> = ({ sectionIDs }) => {
    const [activeSection, setActiveSection] = useState(0);

    useEffect(() => {
        const observerOptions = {
            root: null, 
            rootMargin: "0px",
            threshold: 0.5, // Trigger when 50% of a section is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = sectionIDs.indexOf(entry.target.id);
                    if (index !== -1) {
                        setActiveSection(index);
                    }
                }
            });
        }, observerOptions);

        sectionIDs.forEach((id) => {
            const section = document.getElementById(id);
            if (section) {
                observer.observe(section);
            }
        });

        return () => {
            sectionIDs.forEach((id) => {
                const section = document.getElementById(id);
                if (section) {
                    observer.unobserve(section);
                }
            });
        };
    }, [sectionIDs]);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    };

    return (
        <div className="scroll-dots">
            {sectionIDs.map((id, index) => (
                <div
                    key={id}
                    className={`dot ${index === activeSection ? "active" : ""}`}
                    onClick={() => scrollToSection(id)}
                ></div>
            ))}
        </div>
    );
};

export default ScrollDots;
