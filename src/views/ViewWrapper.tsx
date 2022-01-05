import React from 'react';
import {Footer} from "../components/Footer";
import "./css/ViewWrapper.css"
import {BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom";
import {MainView} from "./MainView";
import {RamenGodView} from "./RamenGodView";
import {CSSTransition, TransitionGroup} from "react-transition-group";

export function ViewWrapper() {
    return <div>
        <Router>
            <Routes>
                <Route path="/ramen-god" element={<RamenGodView/>}/>
                <Route path="/" element={<MainView/>}/>
            </Routes>
            <Footer/>
        </Router>

    </div>
}