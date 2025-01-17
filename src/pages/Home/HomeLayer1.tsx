import React, { useEffect, useState } from 'react';
import QuotationBody from './HomeComponent/QuotationBody';
import NameLogo from '../../components/NameLogo';
import { ReactComponent as AudioButton } from '../../audio.svg';
import { FaLinkedin } from 'react-icons/fa';
import DrawingGIF from "../../media/images/tolutransparent.gif";
import './home-layer-1.css';
import songs from './Songs';

interface HomeLayer1Props {
}

function getRandomArbitrary(max : number) {
    var arr = [];
    while(arr.length < 3){
        var r = Math.floor(Math.random() * max) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    return arr;
}

const HomeLayer1: React.FC<HomeLayer1Props> = () => {

    const pageColour = '#344c34';
    const [displySongs, setDisplaySongs] = useState<any>([]);

    useEffect(() =>{
        var indexes = getRandomArbitrary(songs.length-1);
        let arr = []
        for(let index of indexes){
            arr.push(songs.at(index))
        }
        setDisplaySongs(arr);
    }, [])


    console.log(displySongs)
    return(
        <div className='home-layer-1-container'>
            <div className='layer-info'>
                <div className='top-header-left'>
                    <NameLogo />
                    <div className='audio-button'>
                        <AudioButton />
                    </div>
                </div>
                <div className='resume-download'>
                    Click to download my resume
                </div>
                <div className='svg-blurb' style={{fontFamily: `Margarine`}}>
                    I'm a...
                </div>
                <div className='svg-image-container' style={{width: "100%", height:"fit-content", display: `flex`, justifyContent: `center`}}>
                    <img src={DrawingGIF}/>
                </div>
                <div className='contact-group'>
                    <div className='contact-heading'>Contact Me</div>
                    <div className='contact-links'>
                        <ul className='reach-links'>
                            <li>emoruwatoluwanimi@gmail.com</li>
                            <li><a href="https://www.linkedin.com/in/toluwanimi-emoruwa-1417ab218/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            <li><a href="https://github.com/EmoruwaTolu" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        </ul>
                    </div>
                </div>
                <QuotationBody quote="What is the point of being alive if you don't at least try to do something remarkable?" author='John Green' colour={pageColour}/>
                <div className='songs-listening'>
                    <div className='song-header'>
                        <p>Here are some the songs I currently enjoy.</p>
                        <p>{`You can refresh for a new set :)`}</p>
                    </div>
                    <div className='song-content'>
                        {
                            displySongs.map((song : any, index : number) => (
                                <a className='song-details' key={index} href={song["link"]}>
                                    <img src={song["cover-art"]}/>
                                    <div className='song-info'>
                                        <p>{`${song["song-name"]} - ${song["artist"]}`}</p>
                                    </div>
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HomeLayer1;