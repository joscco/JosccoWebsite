import React from "react";
import "./css/SectionStart.css";
import oldImage from "../images/RamenGodPage/oldImage.jpg";
import sketchImage from "../images/RamenGodPage/sketchImage.png";
import linesImage from "../images/RamenGodPage/lineImage.png";
import firstColorsImage from "../images/RamenGodPage/firstColorImage.png";
import preFinalImage from "../images/RamenGodPage/preFinalImage.png";
import finalImage from "../images/RamenGodPage/finalImage.png";
import arrowLeft from "../images/ProjectSection/arrow_left.png";
import arrowRight from "../images/ProjectSection/arrow_right.png";

export class SectionRamenGod extends React.Component {

    buildSlide = (item: { heading: string, text: string, imageSrc: any, alt: string, active?: boolean }, index: number) => {
        return <div className={"carousel-item" + (item.active ? " active" : "")} key={index}>
            <div className="sub-section">
                <div className="container-box">
                    <img style={{maxHeight: "75vh"}} src={item.imageSrc} alt={item.alt}/>
                </div>
                <div className="container-box">
                    <div className="section-heading">{item.heading}</div>
                    <p className="section-text">{item.text}</p>
                </div>

            </div>
        </div>
    }

    createIndicators(length: number) {
        let items = Array.from(Array(length).keys()).map(number => <li data-target="#ramen-carousel"
                                                                       data-slide-to={number} key={number}
                                                                       className={number === 0 ? "active" : ""} />);
        return <ol data-target="#ramen-carousel" className="carousel-indicators">
            {items}
        </ol>
    }

    render() {
        let indicators = this.createIndicators(SLIDES.length);
        return <div>
            <section className="section" style={{backgroundColor: "#FFC300"}}>
                <div id="ramen-carousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        {SLIDES.map((item, index) => this.buildSlide(item, index))}
                    </div>
                    {indicators}
                </div>
                <a className="carousel-control-prev" href={"#ramen-carousel"} role="button" data-slide="prev">
                    <img className="arrow arrow-left" src={arrowLeft} alt="left-arrow"/>
                </a>
                <a className="carousel-control-next" href={"#ramen-carousel"} role="button" data-slide="next">
                    <img className="arrow arrow-right" src={arrowRight} alt="right-arrow"/>
                </a>
            </section>
        </div>;
    }
}

const SLIDES = [{
    heading: "Old Version",
    text: "This was the old version.",
    imageSrc: oldImage,
    alt: "Old Version",
    active: true
}, {
    heading: "First Sketch",
    text: "I made a new sketch",
    imageSrc: sketchImage,
    alt: "First Sketch"
}, {
    heading: "Clean Lines",
    text: "I drew clean lines...",
    imageSrc: linesImage,
    alt: "Lines"
}, {
    heading: "First Colors",
    text: "added some colors...",
    imageSrc: firstColorsImage,
    alt: "First Colors"
}, {
    heading: "More Colors",
    text: "and some background...",
    imageSrc: preFinalImage,
    alt: "Prefinal Version"
}, {
    heading: "Final Touches",
    text: "and finished with adding shadows.",
    imageSrc: finalImage,
    alt: "Final Version"
}]