import React from "react";
import smoke1Image from "../images/AboutSection/smoke1.png";
import smoke2Image from "../images/AboutSection/smoke2.png";
import backgroundCodeImage from "../images/AboutSection/codeBackground.png"
import backgroundNotebookImage from "../images/AboutSection/backgroundNotebook.png"
import cupImage from "../images/AboutSection/cup.png";
import penImage from "../images/AboutSection/pen.png";
import codeImage from "../images/AboutSection/code.png";
import notebookImage from "../images/AboutSection/notebook.png";
import "./css/NotebookIllustration.css"

export class NotebookIllustration extends React.Component<{}, { width: number, seconds: number }> {
    private readonly notebookRef: React.RefObject<HTMLInputElement>;
    private timer: any;

    constructor(props: any) {
        super(props);
        this.state = {
            width: 0,
            seconds: 0
        };
        this.notebookRef = React.createRef();
    }

    squarifyHandImage = () => {
        this.setState({width: this.notebookRef.current ? this.notebookRef.current.getBoundingClientRect().width : 0})
    };

    componentDidMount() {
        this.squarifyHandImage();
        window.addEventListener("resize", this.squarifyHandImage);
        this.timer = setInterval(() => {
            this.setState({
                seconds: this.state.seconds + 0.1
            })
        }, 100);
    }

    render() {
        return <div className="container-box notebook-illustration"
                    ref={this.notebookRef}
                    style={{height: this.state.width + 'px'}}>
            <img className="about-img notebook-image"
                 src={notebookImage}
                 alt="Notebook"/>
            <img className="about-img notebook-background"
                 src={backgroundNotebookImage}
                 alt="Back1"/>
            <img className="about-img code-background"
                 src={backgroundCodeImage}
                 alt="Back2"/>
            <img className="about-img smoke-1-image" src={smoke1Image}
                 style={{top: 2 + 2 * Math.sin(this.state.seconds) + "%"}} alt="Smoke"/>
            <img className="about-img smoke-2-image" src={smoke2Image}
                 style={{top: 4 + 2 * Math.cos(this.state.seconds) + "%"}} alt="More Smoke"/>
            <img className="about-img cup-image" src={cupImage} alt="A cup"/>
            <img className="about-img pen-image" src={penImage}
                 style={{
                     right: -2 * Math.sin(this.state.seconds) * Math.sin(this.state.seconds / 2) + "%",
                     top: 45 + 0.5 * Math.sin(this.state.seconds) * Math.sin(this.state.seconds / 2) + "%"
                 }}
                 alt="A pen"/>
            <img className="about-img code-image" src={codeImage}
                 style={{
                     left: -6 + 1.4 * Math.sin(this.state.seconds) + "%",
                     top: -15 + 10 * Math.sin(this.state.seconds) + "%"
                 }}
                 alt="Code lines"/>
        </div>
    }
}