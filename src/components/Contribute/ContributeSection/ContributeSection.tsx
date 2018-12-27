import * as React from "react";
import { Col, Container, Row } from "reactstrap";
import "./ContributeSection.scss";
import contribute from "./img/Contributing_code.svg";
import HowToBecome from "./img/How_to_become.svg";
import pullRequest from "./img/Pull_request_checkli.svg";

export default class ContributeSection extends React.Component<any, any> {
    public render() {
        return (
            <div className="Contribute">
                <Container className="contribute-container">
                    <div className="text-center title-container">
                        <span className="section-title">Contribute</span>
                    </div>
                    <Row className="feature-item align-items-center">
                        <Col md="6" className="mb-5 mb-md-0">
                            <div className="text-center image-container">
                                <img src={contribute} />
                            </div>
                        </Col>
                        <Col md="6">
                            <div className="text-container">
                                <div className="mb-3">
                                    <span className="second-title">
                                        Contributing code
                                    </span>
                                </div>
                                <div className="mb-4">
                                    <span className="description">
                                        If you have improvements to CodeChain,
                                        send us your pull requests!
                                    </span>
                                </div>
                                <div className="mb-4">
                                    <span className="description">
                                        CodeChain team members will be assigned
                                        to review your pull requests. Once the
                                        pull requests are approved and pass
                                        continuous integration checks, we will
                                        merge the pull requests.
                                    </span>
                                </div>
                                <div>
                                    <span className="description">
                                        If you want to contribute but you're not
                                        sure where to start, take a look at the
                                        issues with the 'good first issue'
                                        label. These are issues that we believe
                                        are particularly well suited for outside
                                        contributions, often because we probably
                                        won't get to them right now. If you
                                        decide to start on an issue, leave a
                                        comment so that other people know that
                                        you're working on it. If you want to
                                        help out, but not alone, use the issue
                                        comment thread to coordinate.
                                    </span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="feature-item flex-column-reverse flex-md-row align-items-center">
                        <Col md="6">
                            <div className="text-container">
                                <div className="mb-3">
                                    <span className="second-title">
                                        Pull reqeust checklist
                                    </span>
                                </div>
                                <div className="mb-4">
                                    <span className="description">
                                        Before sending your pull requests, make
                                        sure you followed this list.
                                    </span>
                                </div>
                                <div className="description">
                                    <ul>
                                        <li>
                                            Read{" "}
                                            <a
                                                target="_blank"
                                                href="https://github.com/CodeChain-io/codechain/blob/master/CODE_OF_CONDUCT.md"
                                            >
                                                Code of Conduct
                                            </a>
                                            .
                                        </li>
                                        <li>
                                            Ensure you have signed the
                                            Contributor License Agreement (CLA).
                                        </li>
                                        <li>
                                            Changes are consistent with the{" "}
                                            <a
                                                href="https://github.com/CodeChain-io/codechain/wiki/Coding-Style"
                                                target="_blank"
                                            >
                                                Coding Style
                                            </a>
                                            .
                                        </li>
                                        <li>
                                            Run{" "}
                                            <a
                                                target="_blank"
                                                href="https://github.com/CodeChain-io/codechain/wiki/Unit-Tests"
                                            >
                                                Unit Tests
                                            </a>
                                            .
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col md="6" className="mb-5 mb-md-0">
                            <div className="text-center image-container">
                                <img src={pullRequest} />
                            </div>
                        </Col>
                    </Row>
                    <Row className="feature-item align-items-center">
                        <Col md="6" className="mb-5 mb-md-0">
                            <div className="text-center image-container">
                                <img src={HowToBecome} />
                            </div>
                        </Col>
                        <Col md="6">
                            <div className="text-container">
                                <div className="mb-3">
                                    <span className="second-title">
                                        How to become a contributor and submit
                                        your own code
                                    </span>
                                </div>
                                <div className="mb-4">
                                    <span className="description">
                                        We'd love to accept your patches! Before
                                        we can take them, we have to jump a
                                        couple of legal hurdles.
                                    </span>
                                </div>
                                <div className="mb-4">
                                    <span className="description">
                                        Please fill out the{" "}
                                        <a
                                            target="_blank"
                                            href="https://www.clahub.com/agreements/CodeChain-io/codechain"
                                        >
                                            individual Contributor License
                                            Agreement (CLA)
                                        </a>
                                        .Once we receive it, we'll be able to
                                        accept your pull requests.
                                    </span>
                                </div>
                                <div>
                                    <span className="description">
                                        NOTE: Only original source code from you
                                        and other people that have signed the
                                        CLA can be accepted into the main
                                        repository.
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
