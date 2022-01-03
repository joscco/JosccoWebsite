import React from "react";
import notebookImage from "./images/notebook.png"
import "./css/SectionAbout.css"
import {SkillSection} from "./SkillSection";

const languageSkillItems = [
    {
        title: "Java",
        description: "main language at work",
    },
    {
        title: "Typescript",
        description: "main language for private web projects",
    },
    {
        title: "Javascript",
        description: "sometimes used directly for sketches",
    },
    {
        title: "HTML"
    },
    {
        title: "CSS",
        description: "I mainly use SCSS",
    },
    {
        title: "Python"
    },
    {
        title: "R"
    }
]

const toolSkillItems = [
    {
        title: "Swing"
    },
    {
        title: "Hibernate"
    },
    {
        title: "Spring"
    },
    {
        title: "Jenkins"
    },
    {
        title: "React"
    },
    {
        title: "Git"
    },
    {
        title: "PIXI.js"
    }
]

export class SectionAbout extends React.Component {
    render() {
        return <section id="about" className="section">
            <div className="sub-section reverse-section">
                <div className="container-box">
                    <div className="section-heading about-heading">About Me</div>
                    <div className="section-text about-text">
                        After I studied Mathematics in Siegen and Düsseldorf I started working as a Software Developer and that's what I spend my time
                        with now.
                    </div>
                    <div className="section-text about-text">
                        I love including my passion for illustration and maths in personal coding projects.
                    </div>
                </div>
                <div className="container-box">
                    <img className="notebook-image" src={notebookImage} alt="Notebook and Coffee Illustration"/>
                </div>
            </div>
            <div className="section">
                <div className="sub-section section-heading">
                    Work Experience
                </div>
                <div className="sub-section">
                    <SkillSection heading="Languages" headingClass="language-text" items={languageSkillItems}/>
                    <SkillSection heading="Tools & Frameworks" headingClass="tool-text" items={toolSkillItems}/>
                </div>
            </div>
        </section>
    }
}