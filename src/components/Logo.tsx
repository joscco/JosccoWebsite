import React from 'react';
import {ReactComponent as LogoSVG} from './images/logo.svg'
import "./css/Logo.css"

export class Logo extends React.Component<{ toggleMenuActive: any, menuActive: boolean }> {

    constructor(props: { toggleMenuActive: any, menuActive: boolean }) {
        super(props);
        this.toggleMenuActive = this.toggleMenuActive.bind(this);
    }

    toggleMenuActive() {
        if (this.props.menuActive) {
            this.props.toggleMenuActive();
        }
    }

    render() {
        return <div className="logo">
            <a href="#start" onClick={this.toggleMenuActive}>
                <LogoSVG/>
            </a>
        </div>
    }
}