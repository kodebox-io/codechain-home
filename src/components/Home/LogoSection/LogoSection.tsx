import * as React from "react";
import laptop from "./img/laptop.png";
import "./LogoSection.scss";

export default class LogoSection extends React.Component<any, any> {
    public render() {
        return (
            <div className="Logo-section">
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
                        <div className="custom-btn reverse paper-btn">
                            White Paper
                        </div>
                    </div>
                </div>
                <div className="graph-background" />
                <div className="computer-continer">
                    <img src={laptop} />
                </div>
            </div>
        );
    }
}
