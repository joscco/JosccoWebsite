import React from "react";
import {SectionRamenGod} from "../components/SectionRamenGod";
import {MinimalNavBar} from "../components/MinimalNavBar";

export class RamenGodView extends React.Component {
    render() {
        return <div>
            <MinimalNavBar/>
            <SectionRamenGod/>
        </div>
    }
}