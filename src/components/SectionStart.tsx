import React from "react";
import "./css/SectionStart.css"
import {FancyHand} from "./FancyHand";

export class SectionStart extends React.Component {
    render() {
        return <section id="start" className="section dark beige-font">
            <div className="sub-section">
                <div className="container-box">
                    <div className="section-heading start-heading">Hi, I’m Jonathan!</div>
                    <p className="section-text start-text">
                        I live in Tönisvorst (Germany) and work as a Software Developer in Nuremberg.
                        I'm interested in Maths and Game Development.
                    </p>
                </div>
                <div className="container-box">
                    <FancyHand/>
                </div>
            </div>
        </section>;
    }
}