import React from "react";
import Button from '@mui/material/Button';
import NavBar from "./Navbar"

function Page1(){
    return (
        <div>
        <NavBar />
        <h1>Safe Internet Browsing</h1>
        <p>Your web safety is our concern</p>
        <Button>Abc</Button>
        <img className="alignRight" src="" />
        </div>
    );
}

export default Page1;