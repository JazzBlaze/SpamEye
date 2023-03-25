import React, {useState} from 'react';
import {useRef, useEffect} from 'react';
import logo from '../images/logo.png'
import exit from "../images/exit.svg";
import { gsap } from "gsap";

import menu from '../images/menu.png';

import "./Menu.css"
function Menu() {
    const ref = useRef(null);

    useEffect(() => {
        const menuBtn = document.querySelector("#menu-div");
        const exitBtn = document.querySelector("#menu-exit");
        let t1 = gsap.timeline({ paused: true });
        t1.to(".menu-div",{ opacity: 0, duration:0.1 });
        t1.to(".menu", { opacity: 1, duration: 0.5, top: 0, ease: "power2.inOut" });
        t1.to(
            ".nav",
            {
                opacity: 1,
                marginBottom: 0,
                duration: 0.4,
                ease: "power2.inOut",
                stagger: 0.2,
            },
            ">-0.5"
        );
    
        menuBtn.addEventListener("click", () => {
            t1.play().timeScale(1);
        });
    
        exitBtn.addEventListener("click", () => {
            t1.timeScale(2.5);
            t1.reverse();
        });
    
      }, []);
    


  return (
    <>
            <div className='menu-alpha'>
                <div className='navbar'>
                    <div className="menu-home">
                        <div ref={ref} className="menu-container menu-div" id='menu-div'>
                            <img className='menu-img' src={menu} alt=''/>
                        </div>
                    </div>
                    <img className='menu-logo' src={logo} alt='' />
                    <p className='menu-login'>LOGIN</p>
                </div>
                <div className="menu">
                    <div className="menu-background">Menu</div>
                    <div ref={ref} className="menu-exit" id='menu-exit'><img src={exit} alt=''/></div>
                    <div className="menu-container">
                        <ul className="options">
                
                            <li className="nav"><a href="/"  target="_blank" className="nav-link">Home <span className="small-number">01</span></a></li>
                            <li className="nav"><a href="/search-spam"  target="_blank" className="nav-link">Spam Detection<span className="small-number">02</span></a></li>
                            <li className="nav"><a href="/report-spam"  target="_blank" className="nav-link">Report Spam<span className="small-number">03</span></a></li>
                            <li className="nav"><a href="/merchandise" target="_blank" className="nav-link">Login <span className="small-number">04</span></a></li>
                            <li className="nav"><a href="/gallery"  target="_blank" className="nav-link">Contact Us <span className="small-number">05</span></a></li>

                            
                        </ul>
                    </div>
                    <div className="menu-container menu-right">
                        <div className="information">
                            <p className="menu-title">SPAMEYE</p>
                            <p className="description">Your web safety is our concern</p>
                        </div>
                        <div className="information">
                            <p className="menu-title">Contact</p>
                            <p className="description">spameye@gmail.com</p>
                        </div>
                        <div className="information">
                            <p className="menu-title">Keep Up With Us</p>
                            <div className="social-medias">
                                <a href="https://www.instagram.com/vibrancevit"  target="_blank" className="social-media">Instagram</a>
                                <a href="https://www.youtube.com/@vibrancevit"  target="_blank" className="social-media">Youtube</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


    </>
  )
}

export default Menu