import React from "react";
import {Skill} from "./Skill";
import "./css/SkillSection.css"

class Skills extends React.Component<{ items: ({ description?: string; title: string })[] }> {

    items = this.props.items;
    skillItems = this.items.map((item, index) => {
        return <Skill item={item} index={index} key={index}/>
    })

    render() {
        return <div className="skills">
            {this.skillItems}
        </div>
    }
}

export class SkillSection extends React.Component<{ heading: string, headingClass: string, items: ({ description?: string; title: string })[] }> {
    render() {
        return <div className="container-box justify-top-container skill-container">
            <div className="section-sub-heading skills-sub-heading">
                <div className={this.props.headingClass}>{this.props.heading}</div>
            </div>
            <Skills items={this.props.items}/>
        </div>;
    }
}