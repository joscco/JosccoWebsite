import React from "react";
import "./css/SectionContact.css"
import personalPicture from "../images/ContactSection/me.png"
import letterIcon from "../images/ContactSection/letter.png"

export class SectionContact extends React.Component {
    render() {
        return <section id="contact" className="section dark beige-font">
            <div className="sub-section">
            <div className="container-box heading-container">

                    <div className="contact-photo">
                        <img src={personalPicture} alt="Me"/>
                    </div>
                    <div className="section-heading contact-heading red dark-font">Any questions?</div>
                    <div className="section-sub-heading contact-subheading"> Or would you like to know more? Then feel free to</div>
                        <a className="contact-link" href="mailto:mail@joscco.com">Contact Me<img className="letter-icon" src={letterIcon} alt="letter"/></a>
                </div>
            </div>
        </section>
    }
}