import React from "react";
import notebookImage from "../images/AboutSection/notebook.png"
import "./css/SectionAbout.css"

export class SectionAbout extends React.Component {
    render() {
        return <section id="about" className="section beige dark-font">
            <div className="sub-section reverse-section">
                <div className="container-box">
                    <div className="section-heading about-heading">About Me</div>
                    <div className="section-text about-text">
                        I studied Mathematics at the Universities of Siegen and Düsseldorf and been working as a Software Developer since 2020.
                    </div>
                    <div className="section-text about-text">
                        I love doing Maths, drawing Illustrations, coding Games and making Music.
                        Bringing all these things together in private coding projects is one of the biggest sources of joy for me (besides my people and dogs at home).
                    </div>
                </div>
                <div className="container-box">
                    <img className="notebook-image" src={notebookImage} alt="Notebook and Coffee Illustration"/>
                </div>
            </div>
        </section>
    }
}