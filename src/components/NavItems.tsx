import React from "react";
import {NavItem} from "./NavItem";
import "./css/NavItems.css";

export class NavItems extends React.Component<{ toggleMenuActive: any, menuActive: boolean }> {

    render() {
        return <nav id="nav-items" className={"nav-items" + (this.props.menuActive ? " active" : "")}>
            <div className="nav-items-wrapper">
                <NavItem text="ABOUT" firstItem={true} href="#about" toggleMenuActive={this.props.toggleMenuActive}/>
                <NavItem text="PROJECTS" href="#projects" toggleMenuActive={this.props.toggleMenuActive}/>
                <NavItem text="CONTACT" href="#contact" toggleMenuActive={this.props.toggleMenuActive}/>
            </div>
        </nav>
    }
}