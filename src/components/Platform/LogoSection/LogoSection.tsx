import * as React from "react";
import { Col, Container, Row } from "reactstrap";
import logo from "./img/Logo2.svg";
import "./LogoSection.scss";

export default class LogoSection extends React.Component<any, any> {
    public render() {
        return (
            <div className="Platform-logo-section text-center">
                <Container>
                    <div className="logo-container">
                        <img src={logo} />
                    </div>
                    <div className="codechain-description-container">
                        <span className="codechain-description">
                            CodeChain platform is an end-to-end solution for
                            real-world asset digitization and tokenization.
                        </span>
                    </div>
                    <Row>
                        <Col md={6} className="mb-5 mb-md-0">
                            <div className="section-title-container">
                                <div>
                                    <span className="section-index">01</span>
                                </div>
                                <div className="section-deco" />
                                <div className="mb-3">
                                    <span className="section-title">
                                        Easy to use
                                    </span>
                                </div>
                                <div>
                                    <span className="section-description">
                                        You just need to register the asset,
                                        program the conditions and regulations
                                        that the asset-backed tokens need to
                                        comply, and issue them. Simple as it is.
                                    </span>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="section-title-container">
                                <div>
                                    <span className="section-index">02</span>
                                </div>
                                <div className="section-deco" />
                                <div className="mb-3">
                                    <span className="section-title">
                                        No issuance or trading fees
                                    </span>
                                </div>
                                <div>
                                    <span className="section-description">
                                        The platform only charges network fees
                                        that are needed for transaction
                                        record-keeping. You can buy the network
                                        fee tokens in bulk or pay as you go with
                                        a credit card. Just like amazon cloud.
                                    </span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
