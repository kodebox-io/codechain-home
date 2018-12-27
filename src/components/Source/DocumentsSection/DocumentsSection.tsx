import * as React from "react";
import { Col, Container, Row } from "reactstrap";
import "./DocumentsSection.scss";

export default class DocumentsSection extends React.Component<any, any> {
    public render() {
        return (
            <div className="Document-section">
                <Container>
                    <div className="section-title-container reverse">
                        <div>
                            <span className="section-index">02</span>
                        </div>
                        <div className="section-deco" />
                        <div className="mb-3">
                            <span className="section-title">Document</span>
                        </div>
                        <div className="section-description-container large">
                            <span className="section-description">
                                Please read the manual if you would like to know
                                the basic and intermediate functionality of
                                CodeChain. If you would like to interact with
                                CodeChain immediately, please refer to the API
                                document.
                            </span>
                        </div>
                    </div>
                    <Row className="button-container">
                        <Col lg="4">
                            <a
                                target="_blank"
                                href="https://docs.google.com/presentation/d/1o59qQvoa83BLK42ynuVZ1PbX9qQ57f7obmueo9TP1MA/edit?usp=sharing"
                            >
                                <div className="custom-btn reverse mb-3 mb-lg-0">
                                    CodeChain at a glance
                                </div>
                            </a>
                        </Col>
                        <Col lg="4">
                            <a
                                target="_blank"
                                href="https://codechain.readthedocs.io/en/latest/"
                            >
                                <div className="custom-btn reverse mb-3 mb-lg-0">
                                    Manual
                                </div>
                            </a>
                        </Col>
                        <Col lg="4">
                            <a
                                target="_blank"
                                href="https://api.codechain.io/0.5.1/"
                            >
                                <div className="custom-btn reverse mb-3 mb-lg-0">
                                    API Document
                                </div>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
