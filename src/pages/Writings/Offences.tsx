import React, { useEffect, useState } from 'react';
import './offences.css';
import TitlePicture from "../../media/images/writings/best-offences/warriorsvsceltics.jpg";
import AntoniNash from "../../media/images/writings/best-offences/antoninash.webp";
import LeBronWemby from "../../media/images/writings/best-offences/lebronwemby.avif";
import DirkNash from "../../media/images/writings/best-offences/dirknash.jpg";
import Dwight from "../../media/images/writings/best-offences/dwight.webp";
import ScrollDots from '../../components/ScrollDots';
import ThreesScatterplot from './ThreesScatterplot';
import Table from './Table';
import Dropdown from '../../components/Dropdown';
import BarGraph from './BarGraph';

interface OffencesProps {
}

const lineTeams = ["Celtics", "Warriors", "Suns", "Magic", "Lakers"];
const teams = [
    { name: "Toronto Raptors", threePointAttemptRate: 36.5, position: "29" },
    { name: "Golden State Warriors", threePointAttemptRate: 36.2, position: "-"  },
    { name: "Denver Nuggets", threePointAttemptRate: 34.6, position: "30"  },
];
const thirdQ = [
    { name: "Golden State Warriors", threePointAttemptRate: 2112, position: "1"  },
    { name: "Boston Celtics", threePointAttemptRate: 1122, position: "2"  },
    { name: "Los Angeles Clippers", threePointAttemptRate: 892, position: "3"  },
]
const offensiveRtg = [
    { name: "Los Angeles Lakers", threePointAttemptRate: 115.9, position: "15"  },
    { name: "Golden State Warriors 2015-16", threePointAttemptRate: 115.6, position: "-"  },
    { name: "Minnesota Timberwolves", threePointAttemptRate: 115.6, position: "16"  },
]


const BestOffences: React.FC<OffencesProps> = () => {

    const [team, setTeam] = useState('');

    return(
        <div className='article-container'>
            <div className='best-offences-container'>
                <div id='section1' style={{width: "100%", height: "100vh", display: "flex", boxSizing: "border-box", paddingTop: "2vw"}}>
                    <div className='title-img-container'>
                        <div className='article-title'>Are We Witnessing The Greatest Offenses Ever?</div>
                        <img src={TitlePicture} />
                        <div className='article-details'>
                            <div>By Toluwanimi Emoruwa</div>
                            <div>Mon. 30 Jan. 2025</div>
                        </div>
                        <div>
                            <a href='/' style={{width: `5vw`, height: `2vw`, display: `flex`, alignItems: `center`, boxSizing: "border-box"}}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" style={{marginRight: `10px`}}><path style={{fill:`#344c34`}} d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z" data-name="Left"/></svg>
                                <p style={{fontSize: `1.1vw`}}>Home</p>
                            </a>
                        </div>
                    </div>
                    <div className='article-part1-offences' style={{width: "50%", padding: `0 2vw`, boxSizing: 'border-box'}}>
                        <div className='factoid'>
                            Fact #1: When you look at the teams with the best Offensive Rating in NBA history, every single one that made the top 10 was from the last THREE seasons.
                        </div>
                        <div className='text-container-1' style={{width: "100%"}}>
                            <p>
                            Insane right? But when you think about it, it does make sense. Teams shoot more threes these days and hit them at an all-time clip. 
                            </p>
                            <p>As of January 13th, 2025, the Celtics are shooting over 50 percent of their shots from three- the exact number is 54 if you want 
                                to be pedantic. However, the Celtics aren't the only team shooting so many threes.
                            </p>
                        </div>
                        <div className='first-graph-offences' style={{width: "100%", height: `40vh`}}>
                            <ThreesScatterplot />
                        </div>
                        {/* <div className='graph-dropdown'>
                            <Dropdown title='Select an NBA team' teams={lineTeams} onSelect={setTeam}/>
                        </div> */}
                    </div>
                </div>
                <div id='section2' style={{width: "100%", height: "100vh", display: "flex", boxSizing: "border-box", padding: "2vw 0", justifyContent: "space-between"}}>
                    <div className='article-part2-offences-left'>
                        <p>
                            Taking the numbers at face value, teams are as efficient as ever. However, we need to add some context and cut through some noise. 
                        </p>
                        <p>
                            For full transparency, this article will use the Warriors as the case study; for my money, they're the best offence this league has produced. Here are some things to consider.
                        </p>
                        <div className='factoid' style={{marginBottom: "2vw"}}>
                            1. Two is most definitely more than three.
                        </div>
                        <div className='twosthrees-image' style={{boxSizing: "border-box"}}>
                            <img src={AntoniNash} style={{width: "100%", height: "auto", border: "1px solid #334c34", boxShadow: "3px 3px black"}}/>
                        </div>
                        <p style={{fontStyle: "italic", fontSize: "0.8em", textAlign: "center"}}>
                            Pictured above are NBA MVP Steve Nash, and the coach who in my opinion started this whole revolution Mike D'Antoni, more on them later.
                        </p>
                    </div>
                    <div className='article-part2-offences-right'>
                        <p>
                            As obvious as this statement is, the degree to which it affects NBA offences is understated. The 2015 Warriors, who are often hailed as the pioneers of the 
                            three-point revolution, famously discarded Charles Barkley's “Jump shooting teams can't win it all” and produced the most 
                            “winningest” season of all time (they went 73-9).
                        </p>
                        <p>
                            They would rank 29th in today's league for the Three-Point attempt rate!
                        </p>
                        <Table teams={teams} header='NBA Teams and Their Three-Point Attempt Rate'/>
                        <p>
                            The caveat here is that they would rank first today regarding accuracy. 
                            However, when you factor in both the Warriors' accuracy and their attempts and weigh 
                            that against today's average accuracy and attempts, you wake up to a stark reality—the all-conquering 
                            Warriors score fewer points from three than an average team today.
                        </p>
                        <div className='math-section' style={{fontStyle: "italic", flexDirection: "column", width: "100%", textAlign: "left"}}>
                            <p style={{fontWeight: "800", color: "#344c34"}}>In 2015 Golden State shot 31.6 threes a game, with an accuracy of 41.6%.</p>
                            <p style={{fontWeight: "800"}}>Resulting in 39.3 points a game from three.</p>
                            <p style={{fontWeight: "800", color: "#344c34"}}>The average team in the NBA today shoots 37.6 threes a game with an accuracy of 36%</p>
                            <p style={{fontWeight: "800"}}>Resulting in 40.5 points a game from three.</p>
                        </div>
                        <p>
                            More teams are trading twos for threes, and it’s starting to show in the numbers. It’s not a coincidence that the offensive boom 
                            we’ve seen over the last few years coincides with the increase in popularity of the three-point shot.
                        </p>
                    </div>
                </div>
                <div id='section3' style={{width: "100%", height: "100vh", display: "flex", boxSizing: "border-box", padding: "2vw 0", justifyContent: "space-between"}}>
                    <div className='article-part2-offences-left'>
                        <div className='factoid'>2. It's a whole different game</div>
                        <div className='twosthrees-image' style={{boxSizing: "border-box", marginTop: "2vw"}}>
                            <img src={LeBronWemby} style={{width: "100%", height: "auto", border: "1px solid #334c34", boxShadow: "3px 3px black"}}/>
                        </div>
                        <p>
                            Let's take this idea with the Warriors a step further. The team that had just had the most “winningest” season 
                            ever added Kevin Durant. For those who might not be familiar, a player two years removed from his MVP season finished 
                            second place in MVP voting for the last two and had won four of the last five scoring titles.
                        </p>
                        <p>
                            It was effectively the equivalent of Usain Bolt being on steroids.
                        </p>
                        <p>
                            As a side note, the 73-9 Warriors would be 7th in offensive rating in NBA history at the time. 
                            However, there’s some context missing here; “the third quarter Warriors.” The Warriors of this time are famed 
                            for blitzing teams in the third quarter and being ahead by so many points that the starters didn’t need to 
                            play in the 4th quarter.
                        </p>
                        
                    </div>
                    <div className='article-part2-offences-right'>
                        <Table teams={thirdQ} header='Third Quarter Point Differential'/>
                        <p style={{fontStyle:"italic", fontSize:"0.8em", textAlign:"center", margin:0}}>
                            This includes the season when the Warriors didn’t have Kevin Durant(who left in free agency), Stephen Curry, or 
                            Klay Thompson(who suffered season-ending injuries). 
                            Klay didn’t play, and Curry only played five games.
                        </p>
                        <p>
                            These new supercharged Warriors teams proceeded to produce three of the best offensive seasons in NBA 
                            history, with two of those seasons being the best offensive seasons ever (again, with respect to 
                            offensive rating).
                        </p>
                        <p>
                            Why do I say all this? This Warriors team would’ve had the 16th-best offence last season. Baffling, 
                            isn’t it? Within half a decade, the Warriors' all-conquering offence has been usurped by over half 
                            of the teams in the NBA.
                        </p>
                        <Table teams={offensiveRtg} header='Offensive Rating 2023-24'/>
                        <p>
                            There’s no way all these teams are better; many certainly don’t look better- looking at you, 
                            Phoenix. Perhaps we need a way to adjust for this, and that’s where I think relating an offence 
                            to the league average comes in.
                        </p>
                    </div>
                </div>
                <div id='section4' style={{width: "100%", height: "100vh", display: "flex", boxSizing: "border-box", padding: "2vw 0", justifyContent: "space-between"}}>
                    <div className='article-part2-offences-left'>
                        <p>
                            When we factor in the offensive ratings of the other teams we get a very different picture.
                            By subtracting the season's average offensive rating from the best offenses we create a relative offensive rating, and
                            our graph looks very different.
                        </p>
                        <div style={{width: "100%"}}> 
                            <BarGraph />
                        </div>
                        <p>
                            All of a sudden, the only team from the last 5 years is the Boston Celtics. But what does this graph really tell us?

                        </p>
                    </div>
                    <div className='article-part2-offences-right'>
                        <div className='factoid'>3. Innovators lead the way</div>
                        <div className='twosthrees-image' style={{boxSizing: "border-box", marginTop: "1vw"}}>
                            <img src={DirkNash} style={{width: "100%", height: "auto", border: "1px solid #334c34", boxShadow: "3px 3px black", objectFit: "contain"}}/>
                        </div>
                        <p>
                            Running through the list, two things might jump out at you.
                            <ul>
                                <li>Majority of these teams seem to be heavily reliant on 3s, espsecially to a point where they were heavily criticized.</li>
                                <li>Wow, Steve Nash was really good, like <b><i>insanely</i></b> good.</li>
                            </ul>
                        </p>
                        <p>I know it seems obvious to say a two time MVP was insanely good, but I feel that there's often some revisionism when we talk
                            about his MVPs versus some like Kobe.He was the engine <b>FOUR</b> of the five best offenses of all 
                            time (You could argue Dirk was more important on those Dallas teams but that's neither here nor there).
                        </p>
                        <p>
                            
                        </p>
                    </div>
                </div>
                <div id='section5' style={{width: "100%", height: "100vh", display: "flex", boxSizing: "border-box", padding: "2vw 0", justifyContent: "space-between", border: "none"}}>
                    <div className='article-part2-offences-left'>
                        <p>
                            The jumpshooting teams dominate this list, but if teams today are more jumpshooting than ever, why don' they show up?
                        </p>
                        <p>
                            A successful product will always become a trend. While jumpshooting teams were always maligned for not ever winning it all, it didn't mean
                            people were't taking notice. Steve Nash's "Seven seconds or less" Suns teams are probably the inflection point for where 
                            jumpshooting teams began to see major success.
                        </p>
                        <div className='twosthrees-image' style={{boxSizing: "border-box", marginTop: "1vw"}}>
                            <img src={Dwight} style={{width: "100%", height: "auto", border: "1px solid #334c34", boxShadow: "3px 3px black", objectFit: "contain"}}/>
                        </div>
                        <p>
                            Dwight Howard's Orlando Magic then come to mind, and then perhaps two of the most successful jumpshooting teams(before the last five years), the 
                            Golden State Warriors and James Harden's Houston Rockets.
                        </p> 
                    </div>
                    <div className='article-part2-offences-right' style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                        <div style={{display: "flex", flexDirection: "column", textAlign: "left", lineHeight: "1.75em"}}>
                            <p>
                                It's not coincidence that since these teams' success we've seen more teams adopt a more three point oriented approach.
                                But if everyone is using the same approach the amount of variance you get decreases. Teams are scoring better than ever 
                                but that's because offences have optimized their scoring.
                            </p>
                            <p>
                                So, to circle back to our original question of "Are we witnessing the greatest offences ever?" The answer would depend on your criteria for greatest
                                but the more accurate statement would be "We are witnessing the most <b>Efficient</b> offences ever."
                            </p>
                            <p>
                                Today's game is different from the 90s, and as such we should apply proper context, almost like adjusting for inflation.
                                However, I would be remiss to not mention that this inflation is due to the imporvement of offensive schemes and talent in today's game.
                            </p>
                        </div>
                        <div style={{textAlign: "left"}}>
                            <p>
                                Thanks for reading my article! Feel free to let me know what you think, and as always, don't go changing :)
                            </p>
                            <div className='navigation-tools' 
                                style={{width: `100%`, boxSizing: `border-box`, padding:"1vw 0",  borderTop: `1px dashed #344c34`, borderBottom: `1px dashed #344c34`, display: `flex`, justifyContent: `space-between`}}>
                                <a href='/' style={{width: `5vw`, height: `2vw`, display: `flex`, alignItems: `center`}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" style={{marginRight: `10px`}}><path style={{fill:`#344c34`}} d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z" data-name="Left"/></svg>
                                    <p style={{fontSize: `1.1vw`}}>Home</p>
                                </a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
            <ScrollDots sectionIDs={["section1","section2","section3","section4", "section5"]}/>
        </div>
    )
};

export default BestOffences;