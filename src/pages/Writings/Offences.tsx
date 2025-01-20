import React, { useEffect, useState } from 'react';
import ScrollDots from '../../components/ScrollDots';

interface OffencesProps {
}

const BestOffences: React.FC<OffencesProps> = () => {

    return(
        <div className='best-offences-container'>
            <div id='section1' style={{backgroundColor: "red", width: "100%"}}>


            </div>
            <ScrollDots sectionIDs={["section1","section2","section3","section4"]}/>
        </div>
    )
};

export default BestOffences;