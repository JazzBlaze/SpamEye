import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import Home from "./pages/home.jsx";
import Login from "./pages/login.jsx";
import Search from "./pages/search-spam.jsx";
import Report from "./pages/report-spam.jsx";
import Profile from "./pages/profile.jsx";
import Test from "./pages/Test";


function App(){
    return(
        <>
            <React.StrictMode>
                <BrowserRouter>
                    <Routes>
                            <Route path="/" element={<Home />}></Route>
                            <Route path="/login" element={<Login />}></Route>
                            <Route path="/profile" element={<Profile />}></Route>
                            <Route path="/search-spam" element={<Search />}></Route>
                            <Route path="/report-spam" element={<Report />}></Route>

                    </Routes>
                </BrowserRouter>
            </React.StrictMode>
        </>
    )
}

export default App;