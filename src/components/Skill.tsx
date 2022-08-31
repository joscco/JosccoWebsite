import React from "react";
import "./css/Skill.css";

export class Skill extends React.Component<{ index: number, item: { description?: string; title: string }, onSkillClickBind: any}> {
    constructor(props: { index: number, item: { description?: string; title: string }, onSkillClickBind: any }) {
        super(props);
        this.toggleExpand = this.toggleExpand.bind(this);
    }

    buildClassNames() {
        let className = "skill-item";
        if (this.props.item.description) {
            className += " clickable-skill";
        }
        return className;
    }

    toggleExpand() {
        this.props.onSkillClickBind(this.props.item.description);
    }

    render() {
        return <div
            className={this.buildClassNames()} key={this.props.index} onClick={this.toggleExpand}>
            <div className="skill-title">{this.props.item.title}</div>
        </div>;
    }
}