import React from "react";

const year=new Date().getFullYear();

function Footer(){
    return (
        <footer>
            <p>Sign up for our newsletter</p>
            <input type="email"></input>
            <button type="submit">Submit</button>
        </footer>
    );
}

export default Footer;