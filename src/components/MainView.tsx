import React from "react";
import {SectionStart} from "./SectionStart";
import {BetweenerIn, BetweenerOut} from "./Betweener";
import {SectionAbout} from "./SectionAbout";
import {SectionProjects} from "./SectionProjects";
import {SectionContact} from "./SectionContact";

export class MainView extends React.Component {
    render() {
        return <div>
            <SectionStart/>
            <BetweenerIn/>
            <SectionAbout/>
            <BetweenerOut/>
            <SectionProjects/>
            <BetweenerIn/>
            <SectionContact/>
        </div>;
    }
}