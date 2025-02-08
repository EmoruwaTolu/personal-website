import React, {useState} from 'react';
import NameLogo from '../../components/NameLogo';
import ScrollDots from '../../components/ScrollDots';
import CSSALanding from '../../media/images/CSSA-landing-page.png';
import EventsHome from '../../media/images/cssa/eventsHome.png';
import ExecCarousel from '../../media/images/cssa/execCarousel.png';
import FrenchHomeBottom from '../../media/images/cssa/frenchHomeBottom.png';
import VolunteerPage from '../../media/images/cssa/VolunteerPage.png';
import FrenchMinutes from '../../media/images/cssa/FrenchMinutes.png';
import EventsPage from '../../media/images/cssa/EventsPage.png';
import Construction from '../../media/images/cssa/construction.jpg';
import './cssa-website.css';

interface CSSAWebsiteProps {
}

const CSSAWebsite: React.FC<CSSAWebsiteProps> = () => {

    const title = "CSSA Website"

    const tech = ["Frontend", "Web Design", "ReactJS", "CSS", "MongoDB", "GCP", "Figma",]

    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [EventsHome, FrenchHomeBottom, ExecCarousel, EventsPage, VolunteerPage, FrenchMinutes];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    return(
        <div className='cssa-site-container'>
            <div className='cssa-project-container'>
                <div id="section1" style={{ height: "95vh", boxSizing: `border-box` }}>
                    <div className='top-bar'>
                        <NameLogo />
                        <a className='home-nav' href='/'>Return to Home</a>
                    </div>
                    <div className='cssa-layer-1'>
                        <div className='cssa-1-top'>
                            <div className='cssa-landing-image-container'>
                                <img src={CSSALanding}/>
                            </div>
                            <div className='cssa-top-right'>
                                <div className='cssa-proj-title'>
                                    {title.split('').map((letter, index) => (
                                        <div
                                            key={index}
                                            className='company-letter animate'
                                            style={{ animationDelay: `${index * 0.075}s` }}
                                        >
                                            {letter === ' ' ? '\u00A0' : letter}
                                        </div>
                                    ))}
                                </div>
                                <div className='project-pills'>
                                    {tech.map((t, techIndex) => (
                                        <div key={techIndex} className='pill'>{t}</div>
                                    ))}
                                </div>
                                <div className='cssa-project-details'>
                                    <p>The CSSA Website was a project that I built for the CSSA(Computer Science Students Association). I 
                                    became a member of the executive team of the CSSA, or, more specifically, VP IT. I asked around 
                                    and concluded that everyone thought we needed a new website, so I began to work on it.</p>
                                    <p>I designed and developed the site's front end and built the backend and API calls that allow 
                                        the site to function. The site went live in October 2024 and was a massive hit with not only Computer Science students. 
                                        Multiple people would come to the office, even though they weren't in Computer Science, to talk about how much they liked the site.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className='cssa-transition-blurb' 
                    href='https://cssa-aei.ca/'
                    style={{display: `flex`, borderTop: `1px dashed #344c34`, borderBottom: `1px dashed #344c34`, color: `black`, boxSizing: `border-box`,
                            padding: `1vw 0.5vw`, textDecoration: `none`
                    }}>
                        <div style={{fontWeight: `800`, marginRight: `10px`}}>Don't want to read?</div>
                        <div> Click to go to the site</div>
                </a>
                <div id="section2" style={{ boxSizing: `border-box`, margin: `2vw 0`, paddingTop: `1vw`, display: `flex`, alignItems: `center` }}>
                    <div className="carousel-container">
                        <div className='carousel-buttons' style={{marginBottom: `2vw`}}>
                            <button onClick={handlePrev} className="carousel-button">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path style={{fill:`#344c34`}} d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z" data-name="Left"/></svg>
                            </button>
                            <button onClick={handleNext} className="carousel-button">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path style={{fill:`#344c34`}} d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right"/></svg>
                            </button>
                        </div>
                        <div className="carousel-image-container" style={{margin: `1vw 0`, boxSizing: `border-box`}}>
                            <div className='image-blurb'>
                                <div className='image-blurb-title' 
                                    style={{fontWeight: `800`, fontFamily: `Helvetica Neue`, borderTop: `1px dashed #344c34`, borderBottom: `1px dashed #344c34`, height: `fit-content`, padding: `1vw 0`}}>
                                    Some screenshots from the site
                                </div>
                                <div className='image-blurb-info'>
                                    <p>
                                        The CSSA aims to be more than just a Computer Science space. We wanted CS at the University to be a community and thought the website should reflect that.
                                    </p>
                                    <p>Hence, the scrapbook idea. All the pictures on the site were taken during events we had.</p>
                                    <p>uOttawa is a bilingual university(French and English), so I added the functionality for users to toggle between French and English. That's why some screenshots are in French.</p>
                                    <p>On the right are screenshots from parts of the site.</p>
                                </div>
                            </div>
                            <div style={{boxSizing:"border-box"}}>
                                <img
                                    src={images[currentIndex]}
                                    alt={`Slide ${currentIndex}`}
                                    className="carousel-image"
                                    style={{boxSizing: `border-box`}}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="section3" style={{ height: "100vh", padding: `2vw 0`, boxSizing: `border-box`, display: `flex`, flexDirection: `column`, justifyContent: `space-around` }}>
                    <iframe src="https://cssa-aei.ca/about#:~:text=Our%202024%2D25%20Team" title="CSSA Website" style={{width: `100%`, height: `85%`, border: `3px solid #344c34`, boxSizing: `border-box`}}></iframe>
                    <div className='iframe-blurb' style={{display: `flex`, width: `100%`, fontFamily: `Helvetica Neue`, padding: `1vw 0`, boxSizing: `border-box`,  borderTop: `1px dashed #344c34`, borderBottom: `1px dashed #344c34`,justifyContent: `space-between`}}>
                        <div className='major-text' style={{display: `flex`}}>
                            <div className='iframe-blurb-title' style={{fontWeight: `800`, marginRight: `10px`}}>My favourite part of the site.</div>
                            <div className='iframe-blurb-desc' style={{marginRight: `40px`}}>Play around with the mouse and see what happens!</div>
                        </div>
                        <div className='iframe-blurb-small' style={{fontStyle: `italic`, fontSize: `0.8vw`, display: `flex`, alignItems: `end`}}>(Scroll if you don't see circular images of people!)</div>
                    </div>
                </div>
                <div id="section4" style={{ height: "100vh", boxSizing: `border-box`, padding: `2vw 0`, display: `flex` }}>
                    <div className='construction-image' style={{height: `100%`, width: `50%`}}>
                        <img src={Construction} style={{height:`100%`, maxWidth: `60%`}}/>
                    </div>
                    <div className='construction-blurb' style={{boxSizing: `border-box`, paddingLeft: `2vw`, width: `50%`, display: `flex`, flexDirection: `column`, justifyContent: `space-between`}}>
                        <div className='construction-top' style={{width: `100%`, height: `50%`, display: `flex`, flexDirection: `column`, justifyContent: `space-between`}}>
                            <div className='construction-blurb-title' 
                                style={{fontSize: `1.25vw`, fontWeight: `800`, fontFamily: `Helvetica Neue`, borderTop: `1px dashed #344c34`, 
                                        borderBottom: `1px dashed #344c34`, width: `100%`, display: `flex`, boxSizing: `border-box`, padding: `1vw 0`}}>
                                What Next?
                            </div>
                            <div className='construction-blurb-info' style={{textAlign: `start`, fontFamily: `Finlandica`, color: `#344c34`}}>
                                <p>Although the website has been launched, I'm constantly iterating on it and finding ways to improve it.</p>
                                <p>For example, I'm currently working on a Content Management System(CMS) to allow other team members to upload events and pictures 
                                    to different parts of the website to allow the team to how easy and quick uploads to the site.
                                </p>
                                <p>Since launching, the site's new objective has been to make it as easy as possible to maintain and build on. 
                                    To achieve this, I've begun developing a Content Management System (CMS) using backend and database tools like NodeJS, MongoDB, and AWS. 
                                    This CMS will streamline the process of updating and adding content to the website, ensuring that it remains dynamic and up-to-date. 
                                </p>
                                <p>Thanks for reading all of this. Feel free to explore the rest of my site!</p>
                            </div>
                        </div>
                        <div className='navigation-tools' 
                            style={{width: `100%`, boxSizing: `border-box`, padding:"1vw 0",  borderTop: `1px dashed #344c34`, borderBottom: `1px dashed #344c34`, display: `flex`, justifyContent: `space-between`}}>
                            <a href='/' style={{width: `5vw`, height: `2vw`, display: `flex`, alignItems: `center`}}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" style={{marginRight: `10px`}}><path style={{fill:`#344c34`}} d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z" data-name="Left"/></svg>
                                <p style={{fontSize: `1.1vw`}}>Home</p>
                            </a>
                            <a href='/pldatabase' style={{width: `fit-content`, height: `2vw`, display: `flex`, alignItems: `center`}}>
                                <p style={{fontSize: `1.1vw`, marginRight: `10px`, width: `7vw`}}>PL Database</p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path style={{fill:`#344c34`}} d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right"/></svg>
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>
            <ScrollDots sectionIDs={["section1","section2","section3","section4"]}/>
        </div>
    )
};

export default CSSAWebsite;