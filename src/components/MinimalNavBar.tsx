import React from 'react';
import {Logo} from "./Logo";
import "./css/NavBar.css"

export class MinimalNavBar extends React.Component {

    render() {
        return <div id="top-navbar">
            <div className="sub-section">
                <Logo toggleMenuActive={()=>{}} menuActive={false}/>
            </div>
        </div>
    }
}