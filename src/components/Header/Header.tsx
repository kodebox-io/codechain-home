import * as React from "react";
import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";
import { Modal, ModalBody } from "reactstrap";
import "./Header.scss";
import logoWhite from "./img/CodechainLogo_White.svg";
import logo from "./img/logo.svg";

interface State {
    isOpen: boolean;
    isTop: boolean;
}

export default class Header extends React.Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            isOpen: false,
            isTop: true
        };
    }
    public componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
    public componentWillMount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    public render() {
        const { isTop, isOpen } = this.state;
        return (
            <div
                className={`d-flex align-items-center Header ${isTop &&
                    "blue-header"}`}
            >
                <Link to="/">
                    <img src={logo} />
                </Link>
                <MediaQuery query="(min-width:768px)">
                    <div className="menu-item ml-auto">
                        <Link to="/platform">Platform</Link>
                    </div>
                    <div className="menu-item">Technology</div>
                    <div className="menu-item">About us</div>
                    <div className="menu-item">
                        <div
                            className={`custom-btn paper-btn ${isTop &&
                                "reverse"}`}
                        >
                            White Paper
                        </div>
                    </div>
                </MediaQuery>
                <MediaQuery query="(max-width:767px)">
                    <div className="menu-item ml-auto" onClick={this.toggle}>
                        menu
                    </div>
                    <Modal isOpen={isOpen} toggle={this.toggle} fade={false}>
                        <ModalBody>
                            <div className="menu-modal">
                                <div
                                    className="close-btn"
                                    onClick={this.toggle}
                                >
                                    close
                                </div>
                                <div className="logo-container">
                                    <img src={logoWhite} />
                                </div>
                                <div className="menu-item">
                                    <span className="item-name">Platform</span>
                                </div>
                                <div className="menu-item">
                                    <span className="item-name">
                                        Technology
                                    </span>
                                </div>
                                <div className="menu-item">
                                    <span className="item-name">About us</span>
                                </div>
                                <div className="menu-item">
                                    <div className="custom-btn reverse paper-btn d-inline-block">
                                        White Paper
                                    </div>
                                </div>
                            </div>
                        </ModalBody>
                    </Modal>
                </MediaQuery>
            </div>
        );
    }

    private toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    private handleScroll = () => {
        const { isTop } = this.state;
        const top = document.body.getBoundingClientRect().top;
        if (isTop && top <= -20) {
            this.setState({
                isTop: false
            });
        } else if (!isTop && top > -20) {
            this.setState({
                isTop: true
            });
        }
    };
}
