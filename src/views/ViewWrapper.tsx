import React from 'react';
import {NavBar} from "../components/NavBar";
import {Footer} from "../components/Footer";
import "./css/ViewWrapper.css"
import {BetweenerIn, BetweenerOut} from "../components/Betweener";
import {MainView} from "../components/MainView";

export class ViewWrapper extends React.Component {
    render() {
        return <div>
            <NavBar/>
            <MainView/>
            <BetweenerOut/>
            <Footer/>
        </div>;
    }
}