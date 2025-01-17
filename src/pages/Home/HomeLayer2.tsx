import React, {useState} from 'react';
import ProjectSection from './Projects/ProjectSection';
import ExperienceSection from './Experiences/ExperienceSection';
import WritingSection from './Writings/WritingSection';
import './home-layer-2.css';
import { time } from 'console';

interface HomeLayer2Props {
}

const HomeLayer2: React.FC<HomeLayer2Props> = () => {

    const pageColour = '#344c34';

    const [isFadingOut, setIsFadingOut] = useState(false);
    const [selectedTab, setSelectedTab] = useState('Projects  ');
    const [slideNum, setSlideNum] = useState(1);

    const handleTabClick = (tab : string) => {
        // Start fade-out effect
        setIsFadingOut(true);

        // Optionally navigate to a new section after the fade-out completes
        setTimeout(() => {
            setSelectedTab(tab);
            if(tab === 'Projects  '){
                setSlideNum(1)
            }
            else if(tab === 'Experience'){
                setSlideNum(2)
            }
            else{
                setSlideNum(3)
            }
            setIsFadingOut(false);
            // Insert logic here for switching tabs or content (if needed)
        }, 1200); // Match this duration with the CSS transition duration
    };

    return(
        <div className={`home-layer-2-container`}>
            <div className='right-side-tabs'>
                <div className='right-tab' onClick={() => handleTabClick('Projects  ')}>Projects</div>
                <div className='right-tab' onClick={() => handleTabClick('Experience')}>Experience</div>
                <div className='right-tab' onClick={() => handleTabClick('Writings  ')}>Writings</div>
            </div>
            <div className='right-side-header'>
                <div className='right-title'>
                    {selectedTab.split('').map((letter, letterIndex) => (
                        <div 
                            key={letterIndex} 
                            className={`${isFadingOut ? 'fade-out' : 'fade-in'} tab-letter`}
                            style={{ animationDelay: `${letterIndex * 50}ms` }} // Stagger delay for each letter
                        >
                            {letter}
                        </div>
                    ))}
                </div>
                <div className='right-number' style={{overflow: `hidden`}}>
                    <div>0</div>
                    <div className={`${isFadingOut ? 'fade-out-num' : 'fade-in-num'} rotate-num`}>{slideNum}</div>
                </div>
            </div>
            <div className='tab-info'>
                {selectedTab === 'Projects  ' && <ProjectSection isFadingOut={isFadingOut}/>}
                {selectedTab === 'Experience' && <ExperienceSection isFadingOut={isFadingOut}/>}
                {selectedTab === 'Writings  ' && <WritingSection isFadingOut={isFadingOut}/>}
            </div>
            
        </div>
    )
};

export default HomeLayer2;