import React from 'react';
import './quotation-body.css';

interface QuotationBodyProps {
    quote: string
    author: string
    colour: string
}

const QuotationBody: React.FC<QuotationBodyProps> = ({quote, author, colour}) => {

    return(
        <div className='quote-container'>
            <div className='top-circle-container mirror' style={{color: `${colour}`}}>
                "
            </div>
            <div className='quote-body' style={{color: `${colour}`}}>
                <p style={{color: `${colour}`}}>{quote}</p>
                <p style={{color: `${colour}`}}> - {author}</p>
            </div>
            <div className='bottom-circle-container' style={{color: `${colour}`}}>
                "
            </div>
        </div>
    )
};

export default QuotationBody;