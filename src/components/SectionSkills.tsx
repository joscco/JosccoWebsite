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
        if (item !== this.state.activeItem) {
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
                        Tools & Co.
                    </div>
                </div>
            </div>

            <div className="sub-section skills">
                <SectionSkills items={this.skillItems}/>
            </div>
            
            <div className="container-box">
                <div className={"section-heading skill-description" + (this.state.fadingOut ? " fadingOut" : "")}>
                    {this.state.activeItem.description}
                </div>
            </div>
        </div>
    }
}

export class SectionSkills extends React.Component<{items: any[] }> {
    render() {
        return <div className="container-box justify-top-container skill-container">
            <div className="skills">
                {this.props.items}
            </div>
        </div>;
    }
}

const SkillItems: SkillItemType[] = [
    {title: "Java", description: "My main language for backend work.",},
    {title: "Typescript", description: "My main language for private web projects and frontend at work.",},
    {title: "Javascript", description: "Sometimes used directly for sketches.",},
    {title: "HTML", description: "Framework for all, not much to say about that."},
    {title: "CSS", description: "I mainly use SCSS.",},
    {title: "Python", description: "Mainly used python for maths projects and Godot."},
    {title: "R", description: "Did a lot of statistics computation in university with R."},
    {title: "Swing", description: "Swing was used for building GUIs at my old job."},
    {title: "Lucene", description: "Used to enhance searching speed intensively compared to normal database search."},
    {title: "Hibernate"},
    {title: "Spring"},
    {title: "Jenkins"},
    {title: "React"},
    {title: "Git"},
    {title: "Github"},
    {title: "PIXI.js"},
    {title: "Godot", description: "My favourite Game Engine."}
]

