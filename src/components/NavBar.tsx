import React from 'react';
import {Logo} from "./Logo";
import {HamburgerMenu} from "./HamburgerMenu";
import {NavItems} from "./NavItems";
import "./css/NavBar.css"

export class NavBar extends React.Component <{}, {isActive: boolean}> {
    constructor(props: any) {
        super(props);
        this.state = {isActive: false};
        this.toggleMenuActive = this.toggleMenuActive.bind(this);
    }

    toggleMenuActive() {
        this.setState({isActive: !this.state.isActive})
    }

    render() {
        return <div id="top-navbar">
            <div className="sub-section">
                <Logo toggleMenuActive={this.toggleMenuActive} menuActive={this.state.isActive}/>
                <HamburgerMenu toggleMenuActive={this.toggleMenuActive} menuActive={this.state.isActive}/>
                <NavItems toggleMenuActive={this.toggleMenuActive} menuActive={this.state.isActive}/>
            </div>
        </div>
    }
}