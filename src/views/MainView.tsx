import React from "react";
import {SectionStart} from "../components/SectionStart";
import {BetweenerIn, BetweenerOut} from "../components/Betweener";
import {SectionAbout} from "../components/SectionAbout";
import {SectionProjects} from "../components/SectionProjects";
import {SectionContact} from "../components/SectionContact";
import {NavBar} from "../components/NavBar";
import {SectionWorkExperience} from "../components/SectionSkills";

export class MainView extends React.Component {
    render() {
        return <div>
            <NavBar/>
            <SectionStart/>
            <BetweenerIn color1="dark" color2="yellow"/>
            <SectionAbout/>
            <BetweenerOut color1="yellow" color2="red"/>
            <SectionWorkExperience/>
            <BetweenerIn color1="red" color2="beige"/>
            <SectionProjects/>
            <BetweenerOut color1="beige" color2="dark"/>
            <SectionContact/>
            <BetweenerIn color1="dark" color2="beige"/>
        </div>;
    }
}