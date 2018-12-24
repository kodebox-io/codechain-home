import * as React from "react";
import MediaQuery from "react-responsive";
import laptop from "./img/laptop.png";
import "./LogoSection.scss";

export default class LogoSection extends React.Component<any, any> {
    public render() {
        return (
            <div className="Logo-section">
                <div className="d-flex h-100 w-100 align-items-center justify-content-center">
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
                </div>
                <div className="graph-background" />
                <MediaQuery query="(min-width:768px)">
                    <div className="computer-continer animated fadeInUp">
                        <img src={laptop} />
                    </div>
                </MediaQuery>
            </div>
        );
    }
}
