import * as React from "react";
import { Col, Container, Row } from "reactstrap";
import "./SeeMoreSection.scss";

export default class SeeMoreSection extends React.Component<any, any> {
    public render() {
        return (
            <div className="See-more-section">
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className="d-flex align-items-center justify-content-center">
                                <div className="more-text">See more</div>
                                <div>
                                    <div className="custom-btn more-btn">
                                        Features
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="d-flex align-items-center justify-content-center">
                                <div className="more-text">Read more</div>
                                <div>
                                    <div className="custom-btn more-btn">
                                        White paper
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
