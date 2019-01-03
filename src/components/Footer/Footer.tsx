import * as React from "react";
import MediaQuery from "react-responsive";
import { HashLink as Link } from "react-router-hash-link";
import { Col, Container, Row } from "reactstrap";
import "./Footer.scss";
import logo from "./img/CodechainLogo_White.svg";
import github from "./img/github.svg";
import gitter from "./img/gitter.svg";
import medium from "./img/medium.svg";
import twitter from "./img/twitter.svg";

const HeaderHeight = 76;
const scrollWithOffset = (el: any, offset: number) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
        top: elementPosition,
        left: 0,
        behavior: "smooth"
    });
};

export default class Footer extends React.Component<any, any> {
    public render() {
        return (
            <div className="Footer">
                <Container>
                    <Row>
                        <Col md={7}>
                            <div>
                                <img src={logo} />
                            </div>
                            <div className="mt-4">
                                <div>
                                    <span className="font-weight-bold mr-3">
                                        Contact
                                    </span>
                                    <span>Email us: support@kodebox.io</span>
                                </div>
                            </div>
                            <div className="mt-2">
                                <span>
                                    CodeChain and CodeChain logo are trademarks
                                    of Kodebox, Inc
                                </span>
                            </div>
                        </Col>
                        <Col md={5}>
                            <div className="link-icon-container">
                                <a
                                    target="_blank"
                                    href="https://github.com/CodeChain-io"
                                >
                                    <img
                                        src={github}
                                        className="mr-3 mr-md-0 ml-0 ml-md-3 link-icon"
                                    />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://gitter.im/CodeChain-io/codechain"
                                >
                                    <img
                                        src={gitter}
                                        className="mr-3 mr-md-0 ml-0 ml-md-3 link-icon"
                                    />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://twitter.com/codechain_io"
                                >
                                    <img
                                        src={twitter}
                                        className="mr-3 mr-md-0 ml-0 ml-md-3 link-icon"
                                    />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://medium.com/codechain"
                                >
                                    <img
                                        src={medium}
                                        className="mr-3 mr-md-0 ml-0 ml-md-3 link-icon"
                                    />
                                </a>
                            </div>
                        </Col>
                    </Row>
                    <div className="link-container">
                        <div className="link-item-col">
                            <Link
                                to="#feature"
                                // tslint:disable-next-line:jsx-no-lambda
                                scroll={el =>
                                    scrollWithOffset(el, HeaderHeight)
                                }
                            >
                                <span className="link-header">
                                    Why CodeChain
                                </span>
                            </Link>
                        </div>
                        <div className="link-item-col">
                            <Link
                                to="#platform"
                                // tslint:disable-next-line:jsx-no-lambda
                                scroll={el =>
                                    scrollWithOffset(el, HeaderHeight)
                                }
                            >
                                <span className="link-header">Platform</span>
                            </Link>
                        </div>
                        <div className="link-item-col">
                            <Link
                                to="#contact"
                                // tslint:disable-next-line:jsx-no-lambda
                                scroll={el =>
                                    scrollWithOffset(el, HeaderHeight)
                                }
                            >
                                <span className="link-header">Contact</span>
                            </Link>
                        </div>
                        <div className="link-item-col">
                            <a
                                target="_blank"
                                href="https://medium.com/codechain"
                            >
                                <span className="link-header">Blog</span>
                            </a>
                        </div>
                        <div className="link-item-col">
                            <a target="_blank" href="https://kodebox.io">
                                <span className="link-header">Kodebox</span>
                            </a>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}
