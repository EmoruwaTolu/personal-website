import React, {useState} from 'react';
import NameLogo from '../../components/NameLogo';
import ScrollDots from '../../components/ScrollDots';
import Construction from '../../media/images/cssa/construction.jpg';
import HomePage from '../../media/images/pldatabase/HomePage.png';
import TextFile from '../../media/images/pldatabase/TxtFiles.png';
import Server from '../../media/images/pldatabase/Server.png';
import MongoDB from '../../media/images/pldatabase/mongodb.png';
import Connections from '../../media/images/pldatabase/connections.png';
import Create from '../../media/images/pldatabase/create.png';
import Player from '../../media/images/pldatabase/player.png';
import Home1 from '../../media/images/pldatabase/home1.png';
import './pl-website.css';

interface PLDatabaseProps {
}

const PLDatabase: React.FC<PLDatabaseProps> = () => {

    const title = "PL Database"

    const tech = ["Frontend", "Web Scraping", "ReactJS", "BeautifulSoup", "MongoDB", "Python", "NodeJS", "Backend", "Databases"]

    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentIndex2, setCurrentIndex2] = useState(0);
    const images = [TextFile, Server, MongoDB];

    const screenshots = [Player, Connections, Create, Home1];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    const handleNext2 = () => {
        setCurrentIndex2((prevIndex) => (prevIndex + 1) % screenshots.length);
    };

    const handlePrev2 = () => {
        setCurrentIndex2(
        (prevIndex) => (prevIndex - 1 + screenshots.length) % screenshots.length
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
                                <img src={HomePage}/>
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
                                    <p style={{height: 'fit-content'}}>PL Database was an idea born from my roommates and me discussing who the better players in the <a style={{textDecoration: `none`, backgroundColor: "#344c34", color: "white", padding: `3px`}} href='https://en.wikipedia.org/wiki/Premier_League'> Premier League</a> were.</p>
                                    <p>It was during one of these debates that we decided to look at the statistics. We found that most sites we wanted to use had one of two issues: there wasn't enough in-depth information, 
                                        or the website was a wall of spreadsheets.
                                    </p>
                                    <p>It was because of this that I decided to create a site that gave users the best of both worlds.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p style={{fontSize: `0.8vw`, backgroundColor: `#344c34`, color: `white`, display: "flex", justifyContent: `center`, padding: `1vw`}}>
                    *** Just as a disclaimer, the website should take a while to load initially, this is due to the backend server being made using a free tier of Render, 
                    and in this tier the server spins down when not being actively used. ***
                </p>
                <a className='cssa-transition-blurb' 
                    href='https://cssa-aei.ca/'
                    style={{display: `flex`, borderTop: `1px dashed #344c34`, borderBottom: `1px dashed #344c34`, color: `black`, boxSizing: `border-box`,
                            padding: `1vw 0.5vw`, textDecoration: `none`
                    }}>
                        <div style={{fontWeight: `800`, marginRight: `10px`}}>Don't want to read?</div>
                        <div> Click to go to the site</div>
                </a>
                <div id="section2" style={{ height: "100vh", boxSizing: `border-box`, margin: `2vw 0`, paddingTop: `1vw`, display: `flex`, alignItems: `center` }}>
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
                                    Engineering Process
                                </div>
                                <div className='image-blurb-info'>
                                    <p>
                                        The first thing I needed to do was get the data that was going to be visualized on the site. After taking a look
                                        a various pre-existing APIs and their prices, I decided to scrape the data online. <a style={{textDecoration: `none`, backgroundColor: "#344c34", color: "white", padding: `3px`}} href='https://fbref.com/en/'>FBref</a> allows it's users to make use of the data 
                                        on their site as long as they're credited.
                                    </p>
                                    <p>Once the scraping was complete, I stored the data in a database using MongoDB, and then made a backend that could handle requests from the frontend.</p>
                                    <p>Percentiles were attached to raw value numbers so users can know how good a player is at a specific statistic relative to his peers.</p>
                                    <p>Once the server responds with the appropriate data the visualization of the information is done using various components on the frontend.</p>
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
                <div id="section3" style={{ height: "100vh", boxSizing: `border-box`, display: `flex`, flexDirection: `column`, justifyContent: `space-around` }}>
                    <div style={{width: `100%`, height: `fit-content`}}>
                        <img
                            src={screenshots[currentIndex2]}
                            alt={`Slide ${currentIndex2}`}
                            className="carousel-image"
                            style={{boxSizing: `border-box`, border: `3px solid #344c34`, width: "100%", height: "auto"}}
                        />
                    </div>
                    <div className='iframe-blurb' style={{display: `flex`, width: `100%`, fontFamily: `Helvetica Neue`, padding: `0.5vw 0`, boxSizing: `border-box`,  borderTop: `1px dashed #344c34`, borderBottom: `1px dashed #344c34`,justifyContent: `space-between`}}>
                        <div className='major-text' style={{display: `flex`, width: '50%'}}>
                            <div className='iframe-blurb-title' style={{fontWeight: `800`, marginRight: `10px`, width: `100%`, display: 'flex', justifyContent: `start`, alignItems:"center"}}>Here are some screenshots from the site.</div>
                        </div>
                        <div className='carousel-buttons'>
                            <button onClick={handlePrev2} className="carousel-button" style={{height: `2.5vw`, width: `2.5vw`}}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path style={{fill:`#344c34`}} d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z" data-name="Left"/></svg>
                            </button>
                            <button onClick={handleNext2} className="carousel-button" style={{height: `2.5vw`, width: `2.5vw`}}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path style={{fill:`#344c34`}} d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right"/></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div id="section4" style={{ height: "100vh", boxSizing: `border-box`, display: `flex`, flexDirection: `column`, justifyContent: `space-around` }}>
                    <iframe src="https://pl-database.onrender.com/quiz" title="CSSA Website" style={{width: `100%`, height: `85%`, border: `3px solid #344c34`, boxSizing: `border-box`}}></iframe>
                    <div className='iframe-blurb' style={{display: `flex`, width: `100%`, fontFamily: `Helvetica Neue`, padding: `1vw 0`, boxSizing: `border-box`,  borderTop: `1px dashed #344c34`, borderBottom: `1px dashed #344c34`,justifyContent: `space-between`}}>
                        <div className='major-text' style={{display: `flex`, width: 'fit-content'}}>
                            <div className='iframe-blurb-title' style={{fontWeight: `800`, marginRight: `10px`, width: `fit-content`, display: 'flex', justifyContent: `start`, alignItems:"center"}}>A fun little Connections game.</div>
                            <div className='iframe-blurb-desc' style={{marginRight: `40px`, width: `fit-content`}}>For full transparency these questions are really difficult!</div>
                        </div>
                    </div>
                </div>
                <div id="section5" style={{ height: "100vh", boxSizing: `border-box`, padding: `2vw 0`, display: `flex` }}>
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
                                <p>There's a lot of things that I feel I could improve about the site, most especially the UI.</p>
                                <p>However, between school, searching for internships, interest in other projects, and life in general, I'm not too sure when I'll blow the dust off and work on this again.
                                </p>
                                <p>This whole project was pretty much me stitching ideas together and seeing what worked and it was my first time trying some of the technologies, so it holds a special place in my heart.
                                </p>
                                <p>Who knows? I may receive a bit of inspiration and scrape more data for a cool feature on the site.</p>
                                <p>Thanks for reading all of this. Feel free to check out the other pages on my site!</p>
                            </div>
                        </div>
                        <div className='navigation-tools' 
                            style={{width: `100%`, boxSizing: `border-box`, padding:"1vw 0",  borderTop: `1px dashed #344c34`, borderBottom: `1px dashed #344c34`, display: `flex`, justifyContent: `space-between`}}>
                            <a href='/cssawebsite' style={{width: `fit-content`, height: `2vw`, display: `flex`, alignItems: `center`}}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" style={{marginRight: `10px`}}><path style={{fill:`#344c34`}} d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z" data-name="Left"/></svg>
                                <p style={{fontSize: `1.1vw`, width: `7.5vw`}}>CSSA Website</p>
                            </a>
                            <a href='/' style={{width: `5vw`, height: `2vw`, display: `flex`, alignItems: `center`}}>
                                <p style={{fontSize: `1.1vw`, marginRight: `10px`}}>Home</p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path style={{fill:`#344c34`}} d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right"/></svg>
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>
            <ScrollDots sectionIDs={["section1","section2","section3","section4","section5"]}/>
        </div>
    )
};

export default PLDatabase;