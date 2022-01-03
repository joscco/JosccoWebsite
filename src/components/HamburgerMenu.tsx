import React from "react";
import "./css/HamburgerMenu.css"

export class HamburgerMenu extends React.Component<{ toggleMenuActive: any, menuActive: boolean }> {
    render() {
        return <div className={"hamburger-menu" + (this.props.menuActive ? " active" : "")} onClick={this.props.toggleMenuActive}>
            <div className="patty patty-one"/>
            <div className="patty patty-two"/>
            <div className="patty patty-three"/>
        </div>
    }
}