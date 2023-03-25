import React from 'react';
import About from '../components/About';
import Hero from "../components/Hero"
import Menu from '../components/Menu';
import Verify from '../components/Verify';
import Report from '../components/Report';
import Stats from '../components/Stats';
import Page1 from "../components/Page1";

function Home() {
    return (
        <>  
            <Menu />
            <Hero />
            <Verify/>
            <About/>
            <Report/>
            <Stats/>
          
        </>
        
    );
}

export default Home;