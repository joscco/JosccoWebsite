import React from 'react';
import {Logo} from "./Logo";
import "./css/NavBar.css"
import {Link} from "react-router-dom";

export class MinimalNavBar extends React.Component {

    render() {
        return <div id="top-navbar">
            <div className="sub-section">
                <Link to="/">
                    <Logo toggleMenuActive={()=>{}} menuActive={false}/>
                </Link>
            </div>
        </div>
    }
}