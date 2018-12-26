import * as React from "react";
import MediaQuery from "react-responsive";
import { Col, Container, Row } from "reactstrap";
import "./Footer.scss";
import logo from "./img/CodechainLogo_White.svg";
import facebook from "./img/facebook.svg";
import github from "./img/github.svg";
import gitter from "./img/gitter.svg";
import twitter from "./img/twitter.svg";

export default class Footer extends React.Component<any, any> {
    public render() {
        return (
            <div className="Footer">
                <Container>
                    <Row>
                        <Col md={4}>
                            <div>
                                <img src={logo} />
                            </div>
                            <div className="mt-4">
                                <span>
                                    CodeChain and CodeChain logo are
                                    <br />
                                    trademarks of Kodebox, Inc
                                </span>
                            </div>
                            <div className="mt-4">
                                <div>
                                    <span className="font-weight-bold">
                                        Contact
                                    </span>
                                </div>
                                <div>
                                    <span>Email us: support@kodebox.io</span>
                                </div>
                            </div>
                            <div className="mt-4">
                                <img src={github} className="mr-3 link-icon" />
                                <img src={gitter} className="mr-3 link-icon" />
                                <img src={twitter} className="mr-3 link-icon" />
                                <img
                                    src={facebook}
                                    className="mr-3 link-icon"
                                />
                            </div>
                        </Col>
                        <Col md={8}>
                            <div className="link-container">
                                <div className="d-inline-block link-item-col mb-5">
                                    <span className="link-item link-header">
                                        Home
                                    </span>
                                </div>
                                <div className="d-inline-block link-item-col mb-5">
                                    <span className="link-item link-header">
                                        Platform
                                    </span>
                                </div>
                                <MediaQuery query="(max-width:767px)">
                                    <br />
                                </MediaQuery>
                                <div className="d-inline-block link-item-col text-left">
                                    <div className="mb-4">
                                        <span className="link-header">
                                            Technology
                                        </span>
                                    </div>
                                    <div className="mb-2">
                                        <span className="link-item">
                                            Source code
                                        </span>
                                    </div>
                                    <div className="mb-2">
                                        <span className="link-item">
                                            Contribute
                                        </span>
                                    </div>
                                    <div className="mb-2">
                                        <span className="link-item">Team</span>
                                    </div>
                                </div>
                                <div className="d-inline-block link-item-col text-left">
                                    <div className="mb-4">
                                        <span className="link-header">
                                            About us
                                        </span>
                                    </div>
                                    <div className="mb-2">
                                        <span className="link-item">
                                            Company
                                        </span>
                                    </div>
                                    <div className="mb-2">
                                        <span className="link-item">Blog</span>
                                    </div>
                                    <div className="mb-2">
                                        <span className="link-item">
                                            Contact
                                        </span>
                                    </div>
                                </div>
                                <div className="d-inline-block link-item-col">
                                    <span className="link-header">
                                        Privacy policy
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
