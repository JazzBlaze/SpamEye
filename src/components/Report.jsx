import './Report.css'

import React from 'react';
import Typed from 'react-typed'
import Button from './Button';
function Report(){

    return(
        <>
            <div className="report container block">
         
                <h2 className='report-title'>Found Spam&nbsp;
                    <Typed
                        strings={['Links', 'Phone Numbers', 'SMS']}
                        typeSpeed={40}
                        backSpeed={40}
                        loop
                    />
                &nbsp;?</h2>
                <div className='report-btn'><Button text="REPORT TO US" link="/"/></div>
            </div>
            
        </>
    )


}

export default Report