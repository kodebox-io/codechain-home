import * as React from "react";
import { Container } from "reactstrap";
import "./DownloadSection.scss";

import download from "./img/download.svg";
import github from "./img/github-blue.svg";
import linux from "./img/linux.svg";
import apple from "./img/mac.svg";
import source from "./img/source_a_code.svg";
import window from "./img/window.svg";

export default class DownloadSection extends React.Component<any, any> {
    public render() {
        return (
            <div className="Download-section">
                <Container>
                    <div className="title-container">
                        <span className="title">Source Code</span>
                    </div>
                    <div className="section-title-container">
                        <div>
                            <span className="section-index">01</span>
                        </div>
                        <div className="section-deco" />
                        <div className="mb-3">
                            <span className="section-title">Downloads</span>
                        </div>
                        <div>
                            <span className="section-description">
                                Try out the latest blockchain technologies in
                                CodeChain.
                            </span>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="d-inline-block download-item mb-4 mb-lg-0">
                            <div>
                                <img src={download} />
                            </div>
                            <div className="download-item-title-container">
                                <span className="title">Download</span>
                            </div>
                            <div>
                                <span className="description">
                                    Binary downloads will be
                                    <br />
                                    available soon.
                                </span>
                            </div>
                            <div className="icon-container text-center">
                                <img src={linux} className="icon disable" />
                                <img src={apple} className="icon disable" />
                                <img src={window} className="icon disable" />
                            </div>
                        </div>
                        <div className="d-inline-block download-item">
                            <div>
                                <img src={source} />
                            </div>
                            <div className="download-item-title-container">
                                <span className="title">Download</span>
                            </div>
                            <div>
                                <span className="description">
                                    Get the source code.
                                </span>
                            </div>
                            <div className="icon-container text-center">
                                <a
                                    target="_blank"
                                    href="https://github.com/CodeChain-io/codechain"
                                >
                                    <img src={github} className="icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}
