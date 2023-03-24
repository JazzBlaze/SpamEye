import React from "react";
import Button from '@mui/material/Button';
import NavBar from "./Navbar"

function Page1(){
    return (
        <div>
        <NavBar />
        <h1 className="hero">Safe Internet Browsing</h1>
        <p>Your web safety is our concern</p>
        <Button>Abc</Button>
        <img src="../images/hero.png" />
        </div>
    );
}

export default Page1;