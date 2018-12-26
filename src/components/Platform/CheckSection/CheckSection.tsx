import * as React from "react";
import { Col, Container, Row } from "reactstrap";
import "./CheckSection.scss";

export default class CheckSection extends React.Component<any, any> {
    public render() {
        return (
            <div className="Platform-check-section">
                <Container>
                    <Row>
                        <Col md={6} className="check-it-container">
                            <div className="d-md-flex align-items-center justify-content-center">
                                <div className="more-text">Check it out</div>
                                <div>
                                    <div className="custom-btn more-btn reverse">
                                        Source Code
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="d-md-flex align-items-center justify-content-center">
                                <div className="more-text">Read more</div>
                                <div>
                                    <div className="custom-btn more-btn reverse">
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
