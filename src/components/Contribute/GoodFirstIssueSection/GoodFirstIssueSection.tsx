import axios from "axios";
import * as _ from "lodash";
import moment from "moment";
import * as React from "react";
import { Col, Container, Row } from "reactstrap";
import "./GoodFirstIssueSection.scss";
import check from "./img/check.svg";

const projectList = [
    {
        name: "CodeChain-sdk-js",
        url: "https://api.github.com/repos/CodeChain-io/codechain-sdk-js"
    },
    {
        name: "CodeChain",
        url: "https://api.github.com/repos/CodeChain-io/codechain"
    }
];

const storageKey = "good-first-issues";

interface State {
    issues: {
        [name: string]: {
            isFetching: boolean;
            error?: boolean | null;
            data?:
                | {
                      title: string;
                      url: string;
                      number: number;
                      updatedAt: string;
                  }[]
                | null;
        };
    };
}

export default class GoodFirstIssueSection extends React.Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            issues: {}
        };
    }
    public componentDidMount() {
        this.loadIssues();
    }
    public render() {
        const { issues } = this.state;
        return (
            <div className="Good-first-issue">
                <Container>
                    <div className="good-first-issue-seciton-title-container text-center">
                        <span className="section-title">Good first issue</span>
                    </div>
                    {_.keys(issues).map(projectName => {
                        const issue = issues[projectName];
                        return (
                            <div key={projectName}>
                                <div className="title-container">
                                    <span className="title">{projectName}</span>
                                </div>
                                <div>
                                    {issue.isFetching ? (
                                        <div>
                                            <span>Loading...</span>
                                        </div>
                                    ) : issue.error ? (
                                        <div>
                                            <p>Github is not responding</p>
                                        </div>
                                    ) : issue.data!.length === 0 ? (
                                        <div>
                                            <p>To be uploaded</p>
                                        </div>
                                    ) : (
                                        <div>
                                            <div className="issue-list">
                                                {issue.data!.map(data =>
                                                    this.getIssueItem(data)
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </Container>
            </div>
        );
    }

    private getIssueItem = (item: {
        title: string;
        url: string;
        number: number;
        updatedAt: string;
    }) => {
        return (
            <a href={item.url} target="_blank" key={item.number}>
                <Row className="issue-item">
                    <Col md={7}>
                        <div className="d-flex align-items-center">
                            <div className="check-container">
                                <img src={check} />
                            </div>
                            <div className="issue-title-container">
                                <span>{item.title}</span>
                            </div>
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="text-left text-md-right">
                            <span className="date-text">
                                {`#${item.number} opened on ${moment(
                                    item.updatedAt
                                ).format("DD MMM, YYYY")}`}
                            </span>
                        </div>
                    </Col>
                </Row>
            </a>
        );
    };

    private loadIssues = async () => {
        const issuePath = "/issues?labels=good+first+issue";
        await Promise.all(
            projectList.map(async project => {
                const projectName = project.name;
                this.setState({
                    issues: {
                        ...this.state.issues,
                        [projectName]: {
                            isFetching: true
                        }
                    }
                });
                const projectURL = project.url;
                try {
                    const response = await this.fetchIssues(
                        projectURL + issuePath
                    );
                    const issues = response.data.map((data: any) => ({
                        title: data.title,
                        url: data.html_url,
                        number: data.number,
                        updatedAt: data.updated_at
                    }));
                    this.setState({
                        issues: {
                            ...this.state.issues,
                            [projectName]: {
                                isFetching: false,
                                data: issues
                            }
                        }
                    });
                } catch (e) {
                    console.log(e);
                    this.setState({
                        issues: {
                            ...this.state.issues,
                            [projectName]: {
                                isFetching: false,
                                error: true
                            }
                        }
                    });
                }
            })
        );
    };

    private fetchIssues = async (url: string): Promise<any> => {
        const savedData = sessionStorage.getItem(storageKey + url);
        if (savedData) {
            try {
                const savedObject = JSON.parse(savedData);
                return savedObject;
            } catch (e) {
                console.log(e);
            }
        }
        const response = await axios.get(url);
        sessionStorage.setItem(storageKey + url, JSON.stringify(response));
        return response;
    };
}
