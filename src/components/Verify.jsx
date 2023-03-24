import './Verify.css'

import React from 'react';
import Typed from 'react-typed'
import Button from './Button';
function Verify(){

    return(
        <>
            <div className="container block">
         
                <h2 className='Verify-title'>Verify&nbsp;
                    <Typed
                        strings={['Links', 'Phone Numbers', 'SMS']}
                        typeSpeed={40}
                        backSpeed={40}
                        loop
                    />
                </h2>
                <div className='verify-btn'><Button text="Check for spam" link="/"/></div>
            </div>
            
        </>
    )


}

export default Verify