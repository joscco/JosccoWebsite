import React from "react";
import "./css/SectionStart.css";
import oldImage from "./images/ramen-god/oldImage.jpg";
import sketchImage from "./images/ramen-god/sketchImage.png";
import linesImage from "./images/ramen-god/lineImage.png";
import firstColorsImage from "./images/ramen-god/firstColorImage.png";
import preFinalImage from "./images/ramen-god/preFinalImage.png";
import finalImage from "./images/ramen-god/finalImage.png";
import {BetweenerIn} from "./Betweener";
import arrowLeft from "./images/arrow_left.svg";
import arrowRight from "./images/arrow_right.svg";

export class SectionRamenGod extends React.Component {
    render() {
        return <div>
            <section className="section" style={{backgroundColor: "#FFC300"}}>

                <div id="ramen-carousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        
                        <div className="carousel-item active">
                            <div className="sub-section">
                                <div className="container-box">
                                    <div className="section-heading">¡Ramen God!</div>
                                    <p className="section-text">Papaplalaplala</p>
                                </div>
                                <div className="container-box">
                                    <img className="w-100" src={oldImage}/>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="sub-section">
                                <div className="container-box">
                                    <div className="section-heading">BLA!</div>
                                    <p className="section-text">Bli blup</p>
                                </div>
                                <div className="container-box">
                                    <img className="w-100" src={sketchImage}/>
                                </div>
                            </div>
                        </div>

                        <a className="carousel-control-prev" href="#ramen-carousel" role="button" data-slide="prev">
                            <img className="arrow arrow-left" src={arrowLeft} alt="left-arrow"/>
                        </a>
                        <a className="carousel-control-next" href="#ramen-carousel" role="button" data-slide="next">
                            <img className="arrow arrow-right" src={arrowRight} alt="right-arrow"/>
                        </a>
                    </div>
                </div>
            </section>
        </div>;
    }

// <img className="carousel-item" src={sketchImage}/>
// <img className="carousel-item" src={linesImage}/>
// <img className="carousel-item" src={firstColorsImage}/>
// <img className="carousel-item" src={preFinalImage}/>
// <img className="carousel-item" src={finalImage}/>
}