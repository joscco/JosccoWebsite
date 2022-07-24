import React from "react";
import {Skill} from "./Skill";
import "./css/SectionSkill.css"

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

export class SectionSkills extends React.Component<{ heading: string, headingClass: string, items: ({ description?: string; title: string })[] }> {
    render() {
        return <div className="container-box justify-top-container skill-container">
            <div className="section-sub-heading skills-sub-heading">
                <div className={this.props.headingClass}>{this.props.heading}</div>
            </div>
            <Skills items={this.props.items}/>
        </div>;
    }
}


const languageSkillItems = [
    {
        title: "Java",
        description: "is my main language at work",
    },
    {
        title: "Typescript",
        description: "id my main language for private web projects",
    },
    {
        title: "Javascript",
        description: "sometimes used directly for sketches",
    },
    {
        title: "HTML"
    },
    {
        title: "CSS",
        description: "I mainly use SCSS",
    },
    {
        title: "Python"
    },
    {
        title: "R"
    }
]

const toolSkillItems = [
    {
        title: "Swing",
        description: "was used for building GUIs at my old job"
    },
    {
        title: "Lucene",
        description: "used to enhance searching speed intensively compared with database search"
    },
    {
        title: "Hibernate"
    },
    {
        title: "Spring"
    },
    {
        title: "Jenkins"
    },
    {
        title: "React"
    },
    {
        title: "Git"
    },
    {
        title: "Github"
    },
    {
        title: "PIXI.js"
    },
    {
        title: "Godot"
    }
]

export class SectionWorkExperience extends React.Component {
    render() {
        return <div className="section red yellow-font">
            <div className="sub-section section-heading skill-heading">
                Work Experience
            </div>
            <div className="sub-section">
                <SectionSkills heading="Languages" headingClass="language-text" items={languageSkillItems}/>
                <SectionSkills heading="Tools & Frameworks" headingClass="tool-text" items={toolSkillItems}/>
            </div>
        </div>
    }
}