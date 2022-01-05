import React from "react";
import {SectionStart} from "../components/SectionStart";
import {BetweenerIn, BetweenerOut} from "../components/Betweener";
import {SectionAbout} from "../components/SectionAbout";
import {SectionProjects} from "../components/SectionProjects";
import {SectionContact} from "../components/SectionContact";
import {NavBar} from "../components/NavBar";

export class MainView extends React.Component {
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
        </div>;
    }
}