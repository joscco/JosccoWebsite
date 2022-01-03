import React from "react";
import "./css/NavItem.css";

export class NavItem extends React.Component<NavItemProps, {}> {

    constructor(props: NavItemProps) {
        super(props);
        this.toggleMenuActive = this.toggleMenuActive.bind(this);
    }

    toggleMenuActive() {
        if (window.innerWidth <= 768) {
            this.props.toggleMenuActive();
        }
    }

    render() {
        return <a href={this.props.href} className={"nav-bar-item nav-link" + (this.props.firstItem ? " active" : "")} onClick={this.toggleMenuActive}>{this.props.text}</a>
    }
}

type NavItemProps = { firstItem?: boolean, text: string, href: string, toggleMenuActive: any}