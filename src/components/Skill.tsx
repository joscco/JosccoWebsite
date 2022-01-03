import React from "react";
import "./css/Skill.css";

export class Skill extends React.Component<{ index: number, item: { description?: string; title: string } }, { expanded: boolean }> {
    constructor(props: { index: number, item: { description?: string; title: string } }) {
        super(props);
        this.state = {expanded: false};
        this.toggleExpand = this.toggleExpand.bind(this);
    }

    buildClassNames() {
        let className = "skill-item";
        if (this.props.item.description) {
            className += " clickable-skill";
        }
        if (this.state.expanded) {
            className += " expanded"
        }
        return className;
    }

    toggleExpand() {
        if (this.props.item.description) {
            this.setState({expanded: !this.state.expanded});
        }
    }

    render() {
        return <div
            className={this.buildClassNames()} key={this.props.index} onClick={this.toggleExpand}>
            <div className="skill-title">{this.props.item.title}</div>
            <div className="skill-description">{this.props.item.description}</div>
        </div>;
    }
}