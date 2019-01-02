import * as React from "react";
import { Container } from "reactstrap";
import "./ContactUsSection.scss";

interface State {
    name: string;
    email: string;
    company: string;
    message: string;
}

export default class ContactUsSection extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            name: "",
            email: "",
            company: "",
            message: ""
        };
    }
    public render() {
        const { name, email, company, message } = this.state;
        return (
            <div className="Contact-us-section" id="contact">
                <Container>
                    <div className="section-name-container">
                        <div className="section-title-container">
                            <span className="section-title">Contact Us</span>
                        </div>
                        <div className="section-description-container">
                            <span className="section-description">
                                For all inquiries or requests, please get in
                                touch! Let's explore how we can collaborate.
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className="contact-form">
                            <div className="form-group">
                                <input
                                    name="name"
                                    className="form-control"
                                    placeholder="Name"
                                    type="text"
                                    value={name}
                                    onChange={this.handleNameChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={this.handleEmailChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    placeholder="Company"
                                    name="company"
                                    type="text"
                                    value={company}
                                    onChange={this.handleCompanyChange}
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    className="form-control"
                                    placeholder="Message"
                                    name="message"
                                    rows={7}
                                    value={message}
                                    onChange={this.handleMessageChange}
                                />
                            </div>
                            <div className="submit-btn-container">
                                <div className="submit-btn">Submit</div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }

    private handleSubmit = () => {
        //
    };

    private handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ name: e.target.value });
    };

    private handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ email: e.target.value });
    };

    private handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ company: e.target.value });
    };

    private handleMessageChange = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        this.setState({ message: e.target.value });
    };
}
