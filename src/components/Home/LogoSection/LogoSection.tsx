import * as React from "react";
import MediaQuery from "react-responsive";
import laptop from "./img/laptop.png";
import "./LogoSection.scss";
const Rellax = require("rellax");
export default class LogoSection extends React.Component<any, any> {
    public componentDidMount() {
        const rellax = new Rellax(".rellax", {
            speed: -2,
            center: false,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false
        });
    }
    public render() {
        return (
            <div className="Logo-section">
                <MediaQuery query="(max-width:769px)">
                    <div
                        className="graph-background rellax"
                        data-rellax-speed="2"
                    />
                </MediaQuery>
                <MediaQuery query="(min-width:768px)">
                    <div
                        className="graph-background rellax"
                        data-rellax-speed="5"
                    />
                    <div
                        className="computer-continer rellax"
                        data-rellax-speed="2"
                    >
                        <img src={laptop} />
                    </div>
                </MediaQuery>
                <div
                    className="d-flex h-100 w-100 align-items-center justify-content-center rellax"
                    data-rellax-speed="1"
                >
                    <div className="logo-content">
                        <div className="title">
                            <span>CodeChain</span>
                        </div>
                        <div className="description">
                            <span>
                                an end-to-end solution for real-world asset
                                digitization
                            </span>
                        </div>
                        <div className="d-flex justify-content-center">
                            <a
                                target="_blank"
                                href="/CodeChain_white_paper_v1.pdf"
                            >
                                <div className="custom-btn reverse paper-btn">
                                    White Paper
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
