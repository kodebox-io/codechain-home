import * as React from "react";
import { Trans, withTranslation, WithTranslation } from "react-i18next";
import { Container } from "reactstrap";
import "./ContactUsSection.scss";

type Props = WithTranslation;

interface State {
    name: string;
    email: string;
    company: string;
    message: string;
    isNameValid?: boolean | null;
    isEmailValid?: boolean | null;
    isCompanyValid?: boolean | null;
    isMessageValid?: boolean | null;
}

class ContactUsSection extends React.Component<Props, State> {
    private submitFormRef: React.RefObject<HTMLFormElement>;
    private submitNameRef: React.RefObject<HTMLInputElement>;
    private submitEmailRef: React.RefObject<HTMLInputElement>;
    private submitCompanyRef: React.RefObject<HTMLInputElement>;
    private submitMessageRef: React.RefObject<HTMLTextAreaElement>;

    constructor(props: Props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            company: "",
            message: "",
            isNameValid: undefined,
            isEmailValid: undefined,
            isCompanyValid: undefined,
            isMessageValid: undefined
        };
        this.submitFormRef = React.createRef<HTMLFormElement>();
        this.submitNameRef = React.createRef<HTMLInputElement>();
        this.submitEmailRef = React.createRef<HTMLInputElement>();
        this.submitCompanyRef = React.createRef<HTMLInputElement>();
        this.submitMessageRef = React.createRef<HTMLTextAreaElement>();
    }
    public render() {
        const { t } = this.props;
        const {
            name,
            email,
            company,
            message,
            isNameValid,
            isEmailValid,
            isCompanyValid,
            isMessageValid
        } = this.state;
        const required = t("contact:required");
        return (
            <div className="Contact-us-section" id="#contact">
                <Container>
                    <div className="section-name-container">
                        <div className="section-title-container">
                            <span className="section-title">Contact Us</span>
                        </div>
                        <div className="section-description-container">
                            <span className="section-description">
                                <Trans i18nKey={"contact:content"} />
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className="contact-form">
                            <div className="form-group">
                                <input
                                    name="name"
                                    className={`form-control ${isNameValid ===
                                        false && "error"}`}
                                    placeholder={`Name (${required})`}
                                    type="text"
                                    value={name}
                                    onChange={this.handleNameChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    className={`form-control ${isEmailValid ===
                                        false && "error"}`}
                                    placeholder={`Email (${required})`}
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={this.handleEmailChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    className={`form-control ${isCompanyValid ===
                                        false && "error"}`}
                                    placeholder={`Company (${required})`}
                                    name="company"
                                    type="text"
                                    value={company}
                                    onChange={this.handleCompanyChange}
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    className={`form-control ${isMessageValid ===
                                        false && "error"}`}
                                    placeholder={`Message (${required})`}
                                    name="message"
                                    rows={7}
                                    value={message}
                                    onChange={this.handleMessageChange}
                                />
                            </div>
                            <div className="submit-btn-container">
                                <div
                                    className="submit-btn"
                                    onClick={this.handleSubmit}
                                >
                                    Submit
                                </div>
                            </div>
                        </div>
                    </div>
                    <form
                        className="d-none"
                        ref={this.submitFormRef}
                        target="_blank"
                        action="https://formspree.io/support@kodebox.io"
                        method="POST"
                    >
                        <input
                            type="text"
                            name="name"
                            ref={this.submitNameRef}
                        />
                        <input
                            type="email"
                            name="_replyto"
                            ref={this.submitEmailRef}
                        />
                        <input
                            type="text"
                            name="company"
                            ref={this.submitCompanyRef}
                        />
                        <textarea name="message" ref={this.submitMessageRef} />
                    </form>
                </Container>
            </div>
        );
    }

    private handleSubmit = async () => {
        if (!this.checkName()) {
            return;
        }
        if (!this.checkEmail()) {
            return;
        }
        if (!this.checkCompany()) {
            return;
        }
        if (!this.checkMessage()) {
            return;
        }
        this.submitNameRef.current!.value = this.state.name;
        this.submitEmailRef.current!.value = this.state.email;
        this.submitCompanyRef.current!.value = this.state.company;
        this.submitMessageRef.current!.value = this.state.message;
        this.submitFormRef.current!.submit();
        this.clearForm();
    };

    private clearForm = () => {
        this.setState({
            name: "",
            email: "",
            company: "",
            message: "",
            isCompanyValid: undefined,
            isEmailValid: undefined,
            isMessageValid: undefined,
            isNameValid: undefined
        });
    };

    private checkName = () => {
        const { name } = this.state;
        if (!name) {
            this.setState({
                isNameValid: false
            });
            return false;
        }
        this.setState({
            isNameValid: true
        });
        return true;
    };

    private checkEmail = () => {
        const { email } = this.state;
        if (!email) {
            this.setState({
                isEmailValid: false
            });
            return false;
        }
        if (!this.validateEmail(email)) {
            this.setState({
                isEmailValid: false
            });
            return false;
        }
        this.setState({
            isEmailValid: true
        });
        return true;
    };

    private validateEmail = (email: string) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    private checkCompany = () => {
        const { company } = this.state;
        if (!company) {
            this.setState({
                isCompanyValid: false
            });
            return false;
        }
        this.setState({
            isCompanyValid: true
        });
        return true;
    };

    private checkMessage = () => {
        const { message } = this.state;
        if (!message) {
            this.setState({
                isMessageValid: false
            });
            return false;
        }
        this.setState({
            isMessageValid: true
        });
        return true;
    };

    private handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ name: e.target.value, isNameValid: undefined });
    };

    private handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ email: e.target.value, isEmailValid: undefined });
    };

    private handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ company: e.target.value, isCompanyValid: undefined });
    };

    private handleMessageChange = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        this.setState({ message: e.target.value, isMessageValid: undefined });
    };
}

export default withTranslation("contact")(ContactUsSection);
