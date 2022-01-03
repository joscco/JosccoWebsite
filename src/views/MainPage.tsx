import React from 'react';
import {NavBar} from "../components/NavBar";
import {SectionProjects} from "../components/SectionProjects";
import {SectionAbout} from "../components/SectionAbout";
import {SectionContact} from "../components/SectionContact";
import {SectionStart} from "../components/SectionStart";
import {Footer} from "../components/Footer";
import "./css/MainPage.css"

class BetweenerIn extends React.Component {
    render() {
        return <div className="betweener betweener-in" />;
    }
}

class BetweenerOut extends React.Component {
    render() {
        return <div className="betweener betweener-out" />;
    }
}

export class MainPage extends React.Component {
    render() {
        return <div>
            <NavBar/>
            <SectionStart/>
            <BetweenerIn/>
            <SectionAbout/>
            <BetweenerOut/>
            <SectionProjects/>
            <BetweenerIn/>
            <SectionContact/>
            <BetweenerOut/>
            <Footer/>
        </div>;
    }
}