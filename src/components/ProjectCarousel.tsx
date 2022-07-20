import React from "react";
import "./css/ProjectCarousel.css"
import dicity from "./images/dicity.png"
import ludumDare50 from "./images/ludumDare50.png"
import adventsKalender2021 from "./images/adventsKalender2021.png"
import arrowLeft from "./images/arrow_left.svg"
import arrowRight from "./images/arrow_right.svg"
import wildNight from "./images/wildNight.png";
import jamesBot from "./images/jamesBot.png";
import ramenGod from "./images/ramengod.png";
import masterThesis from "./images/eulers_totient_plot.png";
import bachelorThesis from "./images/poisson_points.png";
import zuckerWatte from "./images/zuckerwatte.png";
import {Link} from "react-router-dom";

export class ProjectCarousel extends React.Component {
    projectCarousel = React.createRef() as React.MutableRefObject<HTMLInputElement>;

    createItem(item: ProjectItemType, index: number) {

        let itemLink = item.hasSubPage
            ? <Link to={item.link} className="project-item-link">
                <img src={item.imagePath} className="project-item-image" alt={item.imageAlt}/>
            </Link>
            : <a href={item.link} className="project-item-link">
                <img src={item.imagePath} className="project-item-image" alt={item.imageAlt}/>
            </a>;

        return <div key={index} className={"carousel-item project-item" + ((index === 0) ? " active" : "")}>
            {itemLink}
            <div className="project-text">
                <div className="project-item-heading">{item.heading}</div>
                <div className="project-item-description">{item.description}</div>
            </div>
        </div>
    }

    render() {
        let items = PROJECTS.map((item, index) => this.createItem(item, index));
        let indicators = this.createIndicators(PROJECTS.length);
        return <div ref={this.projectCarousel} id="projects-carousel" className="container-box carousel slide"
                    data-ride="carousel">
            {indicators}
            <div className="carousel-inner">
                {items}
            </div>
            <a className="carousel-control-prev" href={"#projects-carousel"} role="button" data-slide="prev">
                <img className="arrow arrow-left" src={arrowLeft} alt="left-arrow"/>
            </a>
            <a className="carousel-control-next" href={"#projects-carousel"} role="button" data-slide="next">
                <img className="arrow arrow-right" src={arrowRight} alt="right-arrow"/>
            </a>
        </div>;
    }

    createIndicators(length: number) {
        let items = Array.from(Array(length).keys()).map(number => <li data-target="#carouselExampleIndicators"
                                                                       data-slide-to={number} key={number}
                                                                       className={number === 0 ? "active" : ""}/>);
        return <ol data-target="#projects-carousel" className="carousel-indicators">
            {items}
        </ol>
    }
}

type ProjectItemType = {
    hasSubPage: boolean,
    link: string,
    imagePath: any,
    imageAlt: string,
    heading: string,
    description: string
}

const PROJECTS: ProjectItemType[] = [{
    hasSubPage: false,
    link: "https://joscco.itch.io/dicity",
    imagePath: dicity,
    imageAlt: "Dicity",
    heading: "Dicity",
    description: "A Game for the GMTK 2022 Game Jam"
},{
    hasSubPage: false,
    link: "https://joscco.itch.io/dating-under-the-comet",
    imagePath: ludumDare50,
    imageAlt: "Dating under the Comet",
    heading: "Dating under the Comet",
    description: "A Game for the Ludum Dare 50 Game Jam"
}, {
    hasSubPage: false,
    link: "https://joscco.github.io/Adventskalender2021",
    imagePath: adventsKalender2021,
    imageAlt: "Adventskalender 2021",
    heading: "Adventskalender 2021",
    description: "An interactive Pixi.js advent calender"
}, {
    hasSubPage: false,
    link: "./pdf/WildNightComic_Joscco.pdf",
    imagePath: wildNight,
    imageAlt: "Wildnight Comic Image",
    heading: "Wild Night",
    description: "A comic I drew for SCHICK Magazine #14"
}, {
    hasSubPage: false,
    link: "https://github.com/joscco/JamesBot",
    imagePath: jamesBot,
    imageAlt: "James Bot Image",
    heading: "James Reminder Bot",
    description: "A Telegram Bot for Birthday and Garbage Day Reminders."
}, {
    hasSubPage: true,
    link: "/ramen-god",
    imagePath: ramenGod,
    imageAlt: "Ramen God Image",
    heading: "Ramen God",
    description: "An illustration I did for a very great soup"
}, {
    hasSubPage: false,
    link: "./pdf/master_thesis_schmitz.pdf",
    imagePath: masterThesis,
    imageAlt: "Master Thesis Image",
    heading: "Master Thesis",
    description: "On the Turán-Kubilius-Inequality in Number Theory"
}, {
    hasSubPage: false,
    link: "./pdf/bachelor_thesis_schmitz.pdf",
    imagePath: bachelorThesis,
    imageAlt: "Bachelor Thesis Image",
    heading: "Bachelor Thesis",
    description: "On point processes, mainly the poisson kind."
}, {
    hasSubPage: false,
    link: "./pdf/schick_8_schmitz.pdf",
    imagePath: zuckerWatte,
    imageAlt: "Zuckerwatte Comic",
    heading: "Zuckerwatte",
    description: "A comic I drew for SCHICK Magazine #8"
}
];