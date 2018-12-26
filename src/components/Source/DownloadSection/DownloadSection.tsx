import * as React from "react";
import { Container } from "reactstrap";
import "./DownloadSection.scss";

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
                            <div>icon</div>
                            <div>
                                <span>Download</span>
                            </div>
                            <div>
                                <span>
                                    Binary downloads will be available soon.
                                </span>
                            </div>
                            <div>icons</div>
                        </div>
                        <div className="d-inline-block download-item">
                            <div>icon</div>
                            <div>
                                <span>Download</span>
                            </div>
                            <div>
                                <span>
                                    Binary downloads will be available soon.
                                </span>
                            </div>
                            <div>icons</div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}
