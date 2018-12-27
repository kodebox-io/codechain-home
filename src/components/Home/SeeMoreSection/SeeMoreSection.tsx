import * as React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./SeeMoreSection.scss";

export default class SeeMoreSection extends React.Component<any, any> {
    public render() {
        return (
            <div className="See-more-section">
                <Container>
                    <Row>
                        <Col md={6} className="see-more-container">
                            <div className="d-md-flex align-items-center justify-content-center">
                                <div className="more-text">See more</div>
                                <div>
                                    <Link to="/platform">
                                        <div className="custom-btn more-btn">
                                            Features
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="d-md-flex align-items-center justify-content-center">
                                <div className="more-text">Read more</div>
                                <div>
                                    <a
                                        target="_blank"
                                        href="/CodeChain_white_paper_v1.pdf"
                                    >
                                        <div className="custom-btn more-btn">
                                            White paper
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
