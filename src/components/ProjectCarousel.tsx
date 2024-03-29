import React from "react";
import "./css/ProjectCarousel.css"
import adventsKalender2021 from "../images/ProjectSection/ProjectTeasers/adventsKalender2021.png"
import adventsKalender2022 from "../images/ProjectSection/ProjectTeasers/adventskalender2022.png"
import arrowLeft from "../images/ProjectSection/arrow_left.png"
import arrowRight from "../images/ProjectSection/arrow_right.png"
import bachelorThesis from "../images/ProjectSection/ProjectTeasers/bachelorThesis.png";
import dicity from "../images/ProjectSection/ProjectTeasers/dicity.png"
import hedgeHurl2022 from "../images/ProjectSection/ProjectTeasers/hedgeHurl.png"
import jamesBot from "../images/ProjectSection/ProjectTeasers/jamesBot.png";
import ludumDare50 from "../images/ProjectSection/ProjectTeasers/ludumDare2022.png"
import masterThesis from "../images/ProjectSection/ProjectTeasers/masterThesis.png";
import ramenGod from "../images/ProjectSection/ProjectTeasers/ramengod.png";
import schick2022 from "../images/ProjectSection/ProjectTeasers/schick2022.png";
import wildNight from "../images/ProjectSection/ProjectTeasers/schick2021.png";
import zuckerWatte from "../images/ProjectSection/ProjectTeasers/schick2015.png";
import ludumDare53 from "../images/ProjectSection/ProjectTeasers/ludumDare2023.png";

export class ProjectCarousel extends React.Component {
    projectCarousel = React.createRef() as React.MutableRefObject<HTMLInputElement>;

    createItem(item: ProjectItemType, index: number) {

        let itemLink = <a href={item.link} className="project-item-link">
                <img src={item.imagePath} className="project-item-image" alt={item.imageAlt}/>
            </a>;

        return <div key={index} className={"carousel-item project-item" + ((index === 0) ? " active" : "")}>
            {itemLink}
            <div className="project-text">
                <div className="project-item-description">{item.description}</div>
                <div className="project-time">{item.time}</div>
            </div>
        </div>
    }

    render() {
        let items = PROJECTS.map((item, index) => this.createItem(item, index));
        let indicators = this.createIndicators(PROJECTS.length);
        return <div ref={this.projectCarousel}
                    id="projectsCarousel"
                    className="container-box slide carousel"
                    data-ride="carousel">
            {indicators}
            <div className="carousel-inner">
                {items}
            </div>
            <a className="carousel-control-prev" href="#projectsCarousel" role="button" data-slide="prev">
                <img className="arrow arrow-left" src={arrowLeft} alt="left-arrow"/>
            </a>
            <a className="carousel-control-next" href="#projectsCarousel" role="button" data-slide="next">
                <img className="arrow arrow-right" src={arrowRight} alt="right-arrow"/>
            </a>
        </div>;
    }

    createIndicators(length: number) {
        let items = Array.from(Array(length).keys()).map(number =>
            <li data-target="#projectsCarousel"
                key={number}
                data-slide-to={number}
                className={number === 0 ? "active" : ""}/>);
        return <ol className="carousel-indicators">
            {items}
        </ol>
    }
}

type ProjectItemType = {
    hasSubPage: boolean,
    link: string,
    imagePath: any,
    imageAlt: string,
    time: string,
    description: string
}

const PROJECTS: ProjectItemType[] = [{
    hasSubPage: false,
    link: "https://joscco.itch.io/heart-warming-deliveries",
    imagePath: ludumDare53,
    imageAlt: "Heart-Warming Deliveries",
    time: "April/May 2023",
    description: "Puzzle Game Entry for the Ludum Dare 53 Game Jam"
}, {
    hasSubPage: false,
    link: "https://joscco.itch.io/hedge-hurl",
    imagePath: hedgeHurl2022,
    imageAlt: "Hedge Hurl",
    time: "December 2022",
    description: "A billiard-like Game for the Secret Santa Jam"
}, {
    hasSubPage: false,
    link: "https://joscco.itch.io/bernds-biscuits",
    imagePath: adventsKalender2022,
    imageAlt: "Bernd's Biscuits",
    time: "November 2022",
    description: "A Christmas Bakery Puzzle Game"
}, {
    hasSubPage: false,
    link: "./pdf/schick_15_schmitz.pdf",
    imagePath: schick2022,
    imageAlt: "Schick 2022 Preview",
    time: "August 2022",
    description: "A Comic I drew for SCHICK Magazine #15"
}, {
    hasSubPage: false,
    link: "https://joscco.itch.io/dicity",
    imagePath: dicity,
    imageAlt: "Dicity",
    time: "June 2022",
    description: "A Game for the GMTK 2022 Game Jam"
}, {
    hasSubPage: false,
    link: "https://joscco.itch.io/dating-under-the-comet",
    imagePath: ludumDare50,
    imageAlt: "Dating under the Comet",
    time: "April 2022",
    description: "A Game for the Ludum Dare 50 Game Jam"
}, {
    hasSubPage: false,
    link: "https://joscco.github.io/Adventskalender2021",
    imagePath: adventsKalender2021,
    imageAlt: "Adventskalender 2021",
    time: "November 2021",
    description: "An interactive Pixi.js Advent Calender"
}, {
    hasSubPage: false,
    link: "./pdf/WildNightComic_Joscco.pdf",
    imagePath: wildNight,
    imageAlt: "Wildnight Comic Image",
    time: "August 2021",
    description: "A Comic I drew for SCHICK Magazine #14"
}, {
    hasSubPage: false,
    link: "https://github.com/joscco/JamesBot",
    imagePath: jamesBot,
    imageAlt: "James Bot Image",
    time: "Somewhen in 2021",
    description: "A Telegram Bot for Birthday and Garbage Day Reminders"
}, {
    hasSubPage: false,
    link: "./pdf/master_thesis_schmitz.pdf",
    imagePath: masterThesis,
    imageAlt: "Master Thesis Image",
    time: "September 2020",
    description: "My master thesis on the Turán-Kubilius-Inequality"
}, {
    hasSubPage: false,
    link: "./images/finalImage.png",
    imagePath: ramenGod,
    imageAlt: "Ramen God Image",
    time: "January 2020",
    description: "An Illustration I did for a very great soup"
}, {
    hasSubPage: false,
    link: "./pdf/bachelor_thesis_schmitz.pdf",
    imagePath: bachelorThesis,
    imageAlt: "Bachelor Thesis Image",
    time: "August 2018",
    description: "My bachelor thesis on point processes"
}, {
    hasSubPage: false,
    link: "./pdf/schick_8_schmitz.pdf",
    imagePath: zuckerWatte,
    imageAlt: "Zuckerwatte Comic",
    time: "July 2015",
    description: "A Comic I drew for SCHICK Magazine #8"
}
];