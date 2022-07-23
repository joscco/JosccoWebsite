import React from "react";
import {ProjectCarousel} from "./ProjectCarousel";

export class SectionProjects extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render() {
        return <div id="projects" className="section beige">
            <div className="project-carousel-section">
                <ProjectCarousel/>
            </div>
        </div>
    }
}