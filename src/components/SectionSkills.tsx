import React from "react";
import {Skill} from "./Skill";
import "./css/SectionSkill.css"

type SkillItemType = {
    description?: string, title: string
}

export class SectionWorkExperience extends React.Component<{}, { activeItem: SkillItemType, fadingOut: boolean }> {

    state = {activeItem: {title: "", description: ""}, fadingOut: false};

    skillItems = SkillItems.map((item, index) => {
        return <Skill item={item} index={index} key={index} onSkillClickBind={() => this.setActiveItem(item)}/>
    })

    setActiveItem = (item: SkillItemType) => {
        if (item != this.state.activeItem) {
            this.setState({fadingOut: true});
            setTimeout(() => {
                this.setState({activeItem: item, fadingOut: false});
            }, 200);
        }
    };

    render() {
        return <div className="section red yellow-font">
            <div className="sub-section">
                <div className="container-box">
                    <div className="section-heading skill-heading">
                        Work Experience
                    </div>
                </div>
            </div>
            <div className="sub-section skills">
                <SectionSkills items={this.skillItems}/>
                <div
                    className={"skill-description" + (this.state.fadingOut ? " fadingOut" : "")}>{this.state.activeItem.description}</div>
            </div>
        </div>
    }
}

export class SectionSkills extends React.Component<{items: any[] }> {
    render() {
        return <div className="container-box justify-top-container skill-container">
            <div className="section-sub-heading skills-sub-heading">
                <div className="skills-subheading">Languages, Tools and Frameworks</div>
            </div>
            <div className="skills">
                {this.props.items}
            </div>
        </div>;
    }
}

const SkillItems: SkillItemType[] = [
    {title: "Java", description: "is my main language at work",},
    {title: "Typescript", description: "id my main language for private web projects",},
    {title: "Javascript", description: "sometimes used directly for sketches",},
    {title: "HTML"},
    {title: "CSS", description: "I mainly use SCSS",},
    {title: "Python"},
    {title: "R"},
    {title: "Swing", description: "was used for building GUIs at my old job"},
    {title: "Lucene", description: "used to enhance searching speed intensively compared with database search"},
    {title: "Hibernate"},
    {title: "Spring"},
    {title: "Jenkins"},
    {title: "React"},
    {title: "Git"},
    {title: "Github"},
    {title: "PIXI.js"},
    {title: "Godot"}
]

