import React, {Component} from "react";
import handImage from "./images/hand.png";
import java_icon from "./images/java_min.png";
import window_icon from "./images/window_min.png";
import js_icon from "./images/js_min.png";
import brackets_icon from "./images/brackets_min.png";
import mertens_icon from "./images/mertens_min.png";
import "./css/FancyHand.css"

export class FancyHand extends Component<{}, { width: number, seconds: number}> {
    private readonly handRef: React.RefObject<HTMLInputElement>;
    private timer: any;

    constructor(props: any) {
        super(props);
        this.state = {width: 0, seconds: 0};
        this.handRef = React.createRef();
        this.mapItemToImage = this.mapItemToImage.bind(this);
    }

    mapItemToImage(item: { src: any, alt: string }, index: number, seconds: number) {
        let itemStyle = this.getMinItemPosition(index, seconds);
        return <img className="min-image" src={item.src} alt={item.alt} style={itemStyle} key={index}/>
    }

    getMinItemPosition(index: number, seconds: number): { left: string, top: string, zIndex: number } {
        return {
            left: (0.5 + Math.sin(seconds + 10 * index) * 0.4) * this.state.width + "px",
            top: (0.5 + Math.sin(-seconds + 20 * index) * 0.4) * this.state.width + "px",
            zIndex: -2 * Math.floor(Math.cos(seconds + 10 * index))
        }
    };

    squarifyHandImage = () => {
        this.setState({width: this.handRef.current ? this.handRef.current.getBoundingClientRect().width : 0})
    };

    componentDidMount() {
        this.squarifyHandImage();
        window.addEventListener("resize", this.squarifyHandImage);
        this.timer = setInterval(() => {
            this.setState({seconds: new Date().getTime() / 1000})
        }, 100);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.squarifyHandImage)
            clearInterval(this.timer)  ;
    }

    render() {
        let seconds = this.state.seconds;
        let icons = minImages.map((item, index) => this.mapItemToImage(item, index, seconds));
        return <div ref={this.handRef} className="fancy-hand" style={{height: this.state.width + 'px'}}>
            {icons}
            <img className="hand-image" src={handImage} alt="Hand"/>
        </div>;
    }
}

const minImages = [{
    src: java_icon,
    alt: "Mini Java Icon"
},
    {
        src: window_icon,
        alt: "Mini Window Icon"
    },
    {
        src: js_icon,
        alt: "Mini Maths Icon"
    },
    {
        src: brackets_icon,
        alt: "Mini Programming Icon"
    },
    {
        src: mertens_icon,
        alt: "Mini Mertens Sum Icon"
    }];


