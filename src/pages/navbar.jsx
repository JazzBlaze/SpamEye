import React from "react";
import {BrowserRouter,Route,Link} from "react-router-dom";

function Navbar(){
    return(
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/search-spam">Search spam</Link></li>
                <li><Link to="/report-spam">Report spam</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;
