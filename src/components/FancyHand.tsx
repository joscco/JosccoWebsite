import React, {Component} from "react";
import handImage from "../images/StartSection/hand.png";
import cloud1 from "../images/StartSection/cloud1.png"
import cloud2 from "../images/StartSection/cloud2.png"
import cloud3 from "../images/StartSection/cloud3.png"
import javaIcon from "../images/StartSection/javaIcon.png"
import godotIcon from "../images/StartSection/godotIcon.png"
import typescriptIcon from "../images/StartSection/typescriptIcon.png"
import mathIcon from "../images/StartSection/primeIcon.png"
import codeIcon from "../images/StartSection/functionIcon.png"

import eyesOpen from "../images/StartSection/eyes_open.png"
import eyesClosed from "../images/StartSection/eyes_closed.png"
import mouthClosed from "../images/StartSection/mouthClosed.png"
import mouthOpen from "../images/StartSection/mouthOpen.png"
import "./css/FancyHand.css"

export class FancyHand extends Component<{}, { width: number, seconds: number, imagesFadedIn: boolean, blink: boolean, closeMouth: boolean }> {
    private readonly handRef: React.RefObject<HTMLInputElement>;
    private timer: any;
    private fadeIn: any;

    constructor(props: any) {
        super(props);
        this.state = {
            width: 0,
            blink: false,
            closeMouth: true,
            seconds: 0,
            imagesFadedIn: false
        };
        this.handRef = React.createRef();
    }

    mapItemToImage(item: { src: any, alt: string }, index: number, seconds: number) {
        let itemStyle = this.getMinItemPosition(index, seconds);
        return <img
            className={"min-image" + (this.state.imagesFadedIn ? " visible" : "")}
            src={item.src}
            alt={item.alt}
            style={itemStyle}
            key={index}
        />
    }

    getMinItemPosition(index: number, seconds: number): { left: string, top: string, zIndex: number } {
        return {
            left: (0.5 + Math.sin(0.6 * seconds + 10 * index) * 0.4) * this.state.width + "px",
            top: (0.5 + Math.sin(-0.6 * seconds + 20 * index) * 0.4) * this.state.width + "px",
            zIndex: -2 * Math.floor(Math.cos(0.6 * seconds + 10 * index))
        }
    };

    squarifyHandImage = () => {
        this.setState({width: this.handRef.current ? this.handRef.current.getBoundingClientRect().width : 0})
    };

    componentDidMount() {
        this.squarifyHandImage();
        window.addEventListener("resize", this.squarifyHandImage);
        this.fadeIn = setTimeout(() => {
                this.setState({imagesFadedIn: true})
            }, 400
        );
        this.timer = setInterval(() => {
            this.setState({
                seconds: this.state.seconds + 0.1,
                blink: this.decideIfBlinking(this.state.blink),
                closeMouth: this.decideIfCloseMouth(this.state.closeMouth)
            })
        }, 100);
    }

    decideIfBlinking(blink: boolean) {
        if (blink) {
            // Stop blinking with 20% probability
            return Math.random() > 0.2;
        }
        // Start blinking with 3% probability
        return Math.random() < 0.03;
    }

    decideIfCloseMouth(closeMouth: boolean) {
        if (closeMouth) {
            // Open mouth with 2% probability
            return Math.random() > 0.02;
        }
        // Close mouth with 30% probability
        return Math.random() < 0.3;
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.squarifyHandImage)
        clearInterval(this.timer);
    }

    render() {
        let seconds = this.state.seconds;
        let icons = minImages.map((item, index) => this.mapItemToImage(item, index, seconds));
        return <div ref={this.handRef}
                    className="fancy-hand"
                    style={
                        {
                            height: this.state.width + 'px'
                        }}>
            {icons}
            <img className="hand-image" src={handImage} alt="Hand"/>
            <img className="hand-image-eyes" src={this.state.blink ? eyesClosed : eyesOpen} alt="handImageEyes"/>
            <img className="hand-image-mouth" src={this.state.closeMouth ? mouthClosed : mouthOpen} alt="handImageMouth"/>
        </div>;
    }
}

const minImages = [
    {
        src: cloud1,
        alt: "Cloud 1 Icon"
    },
    {
        src: cloud2,
        alt: "Cloud 2 Icon"
    },
    {
        src: cloud3,
        alt: "Cloud 3 Icon"
    },
    {
        src: javaIcon,
        alt: "Java Icon"
    },
    {
        src: typescriptIcon,
        alt: "Typescript Icon"
    },
    {
        src: mathIcon,
        alt: "Math Icon"
    },
    {
        src: godotIcon,
        alt: "Godot Icon"
    },
    {
        src: codeIcon,
        alt: "Code Icon"
    }];


