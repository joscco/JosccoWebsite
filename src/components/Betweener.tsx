import React from "react";
import "./css/Betweener.css"

export class BetweenerIn extends React.Component<{ color1: string, color2: string }> {
    render() {
        return <div>
            <div className={`betweener betweener-in ${this.props.color1}`} />
            <div className={`betweener betweener-back ${this.props.color2}`} />
        </div>;
    }
}

export class BetweenerOut extends React.Component<{ color1: string, color2: string }> {
    render() {
        return <div>
            <div className={`betweener betweener-out ${this.props.color1}`} />
            <div className={`betweener betweener-back ${this.props.color2}`} />
        </div>;
    }
}