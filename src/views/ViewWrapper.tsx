import React from 'react';
import {Footer} from "../components/Footer";
import "./css/ViewWrapper.css"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {MainView} from "./MainView";

export function ViewWrapper() {
    return <div>
        <Router>
            <Routes>
                <Route path="/" element={<MainView/>}/>
            </Routes>
            <Footer/>
        </Router>
    </div>
}