import * as React from "react";
import MediaQuery from "react-responsive";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import { Modal, ModalBody, Popover, PopoverBody } from "reactstrap";
import "./Header.scss";
import menuClose from "./img/Close.svg";
import logoWhite from "./img/CodechainLogo_White.svg";
import dropBlue from "./img/Header_Drop_blue.svg";
import dropWhite from "./img/Header_Drop_white.svg";
import logo from "./img/logo.svg";
import menuWhite from "./img/menu.svg";
import menuBlue from "./img/menu2.svg";

enum Page {
    Home,
    Platform,
    Source,
    Contribute,
    Contributors
}

interface State {
    isOpen: boolean;
    isBlueHeader: boolean;
    isTechMenuOpen: boolean;
    isAboutMenuOpen: boolean;
    checkingTop: boolean;
    isTechMobileMenuOpen: boolean;
    isAboutMobileMenuOpen: boolean;
}

class Header extends React.Component<RouteComponentProps, State> {
    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            isOpen: false,
            isBlueHeader: true,
            isTechMenuOpen: false,
            isAboutMenuOpen: false,
            checkingTop: true,
            isTechMobileMenuOpen: false,
            isAboutMobileMenuOpen: false
        };
    }

    public componentDidMount() {
        if (
            this.props.location.pathname !== "/" &&
            this.props.location.pathname !== "/index.html"
        ) {
            this.setState({ checkingTop: false, isBlueHeader: false });
        } else {
            this.setState({ checkingTop: true, isBlueHeader: true });
        }
        window.addEventListener("scroll", this.handleScroll);
    }

    public componentWillMount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    public componentWillReceiveProps(props: RouteComponentProps) {
        if (
            props.location.pathname !== "/" &&
            props.location.pathname !== "/index.html"
        ) {
            this.setState({ checkingTop: false, isBlueHeader: false });
        } else {
            this.setState({ checkingTop: true, isBlueHeader: true });
        }
        this.setState({
            isOpen: false,
            isTechMobileMenuOpen: false,
            isAboutMobileMenuOpen: false,
            isTechMenuOpen: false,
            isAboutMenuOpen: false
        });
    }

    public render() {
        const {
            isBlueHeader,
            isOpen,
            isAboutMenuOpen,
            isTechMenuOpen,
            checkingTop,
            isAboutMobileMenuOpen,
            isTechMobileMenuOpen
        } = this.state;
        return (
            <div
                className={`d-flex align-items-center Header ${!isBlueHeader &&
                    "white-header"} ${checkingTop && "transition"}`}
            >
                <Link to="/">
                    {isBlueHeader ? (
                        <img src={logoWhite} />
                    ) : (
                        <img src={logo} />
                    )}
                </Link>
                <MediaQuery query="(min-width:768px)">
                    <div className={`menu-item ml-auto`}>
                        <Link to="/platform">
                            <span
                                className={`menu-item-header ${this.getCurrentPage() ===
                                    Page.Platform && "selected"}`}
                            >
                                Platform
                            </span>
                        </Link>
                    </div>
                    <div className="menu-item">
                        <span
                            onClick={this.toggleTechMenu}
                            id="TechMenu"
                            className={`menu-item-header ${(this.getCurrentPage() ===
                                Page.Source ||
                                this.getCurrentPage() === Page.Contribute ||
                                this.getCurrentPage() === Page.Contributors) &&
                                "selected"}`}
                        >
                            Technology
                        </span>
                        <Popover
                            className={`header-menu-popover ${!isBlueHeader &&
                                "white-menu"}`}
                            placement="bottom"
                            isOpen={isTechMenuOpen}
                            target="TechMenu"
                            hideArrow={true}
                            toggle={this.toggleTechMenu}
                        >
                            <PopoverBody>
                                <div className="menu-drop-container">
                                    <div className="text-center arrow-container">
                                        {isBlueHeader ? (
                                            <img src={dropWhite} />
                                        ) : (
                                            <img src={dropBlue} />
                                        )}
                                    </div>
                                    <div className="text-left menu-drop-item-container">
                                        <div
                                            className={`menu-drop-item ${this.getCurrentPage() ===
                                                Page.Source && "selected"}`}
                                        >
                                            <Link to="/source">
                                                <span>Source code</span>
                                            </Link>
                                        </div>
                                        <div
                                            className={`menu-drop-item ${this.getCurrentPage() ===
                                                Page.Contribute && "selected"}`}
                                        >
                                            <Link to="/contribute">
                                                <span>Contribute</span>
                                            </Link>
                                        </div>
                                        <div
                                            className={`menu-drop-item ${this.getCurrentPage() ===
                                                Page.Contributors &&
                                                "selected"}`}
                                        >
                                            <Link to="/contributors">
                                                <span>Contributors</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </PopoverBody>
                        </Popover>
                    </div>
                    <div className="menu-item">
                        <span onClick={this.toggleAboutMenu} id="AboutMenu">
                            About us
                        </span>
                        <Popover
                            className={`header-menu-popover ${!isBlueHeader &&
                                "white-menu"}`}
                            placement="bottom"
                            isOpen={isAboutMenuOpen}
                            target="AboutMenu"
                            hideArrow={true}
                            toggle={this.toggleAboutMenu}
                        >
                            <PopoverBody>
                                <div className="menu-drop-container">
                                    <div className="text-center arrow-container">
                                        {isBlueHeader ? (
                                            <img src={dropWhite} />
                                        ) : (
                                            <img src={dropBlue} />
                                        )}
                                    </div>
                                    <div className="text-left menu-drop-item-container">
                                        <div className="menu-drop-item">
                                            <a
                                                target="_blank"
                                                href="https://kodebox.io"
                                            >
                                                <span>Company</span>
                                            </a>
                                        </div>
                                        <div className="menu-drop-item">
                                            <a
                                                target="_blank"
                                                href="https://medium.com/codechain"
                                            >
                                                <span>Blog</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </PopoverBody>
                        </Popover>
                    </div>
                    <div className="menu-item">
                        <a target="_blank" href="/CodeChain_white_paper_v1.pdf">
                            <div
                                className={`custom-btn paper-btn ${isBlueHeader &&
                                    "reverse"}`}
                            >
                                White Paper
                            </div>
                        </a>
                    </div>
                </MediaQuery>
                <MediaQuery query="(max-width:767px)">
                    <div className="menu-item ml-auto" onClick={this.toggle}>
                        {isBlueHeader ? (
                            <img src={menuWhite} />
                        ) : (
                            <img src={menuBlue} />
                        )}
                    </div>
                    <Modal
                        isOpen={isOpen}
                        toggle={this.toggle}
                        fade={false}
                        className="header-menu-modal"
                    >
                        <ModalBody>
                            <div className="menu-modal">
                                <div
                                    className="close-btn"
                                    onClick={this.toggle}
                                >
                                    <img src={menuClose} />
                                </div>
                                <div className="logo-container">
                                    <Link to="/">
                                        <img src={logoWhite} />
                                    </Link>
                                </div>
                                <div className="menu-item">
                                    <Link to="/platform">
                                        <span
                                            className={`item-name ${this.getCurrentPage() ===
                                                Page.Platform && "selected"}`}
                                        >
                                            Platform
                                        </span>
                                    </Link>
                                </div>
                                <div className="menu-item">
                                    <span
                                        className={`item-name ${(this.getCurrentPage() ===
                                            Page.Source ||
                                            this.getCurrentPage() ===
                                                Page.Contribute ||
                                            this.getCurrentPage() ===
                                                Page.Contributors) &&
                                            "selected"}`}
                                        onClick={this.toggleTechMenuOnMobile}
                                    >
                                        Technology
                                    </span>
                                    {isTechMobileMenuOpen && (
                                        <div>
                                            <div>
                                                <img src={dropWhite} />
                                            </div>
                                            <div>
                                                <div
                                                    className={`menu-drop-item ${this.getCurrentPage() ===
                                                        Page.Source &&
                                                        "selected"}`}
                                                >
                                                    <Link to="/source">
                                                        <span>Source code</span>
                                                    </Link>
                                                </div>
                                                <div
                                                    className={`menu-drop-item ${this.getCurrentPage() ===
                                                        Page.Contribute &&
                                                        "selected"}`}
                                                >
                                                    <Link to="/contribute">
                                                        <span>Contribute</span>
                                                    </Link>
                                                </div>
                                                <div
                                                    className={`menu-drop-item ${this.getCurrentPage() ===
                                                        Page.Contributors &&
                                                        "selected"}`}
                                                >
                                                    <Link to="/contributors">
                                                        <span>
                                                            Contributors
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="menu-item">
                                    <span
                                        className="item-name"
                                        onClick={this.toggleAboutMenuOnMobile}
                                    >
                                        About us
                                    </span>
                                    {isAboutMobileMenuOpen && (
                                        <div>
                                            <div>
                                                <img src={dropWhite} />
                                            </div>
                                            <div>
                                                <div className="menu-drop-item">
                                                    <a
                                                        target="_blank"
                                                        href="https://kodebox.io"
                                                    >
                                                        <span>Company</span>
                                                    </a>
                                                </div>
                                                <div className="menu-drop-item">
                                                    <a
                                                        target="_blank"
                                                        href="https://medium.com/codechain"
                                                    >
                                                        <span>Blog</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="menu-item">
                                    <a
                                        target="_blank"
                                        href="/CodeChain_white_paper_v1.pdf"
                                    >
                                        <div className="custom-btn reverse paper-btn d-inline-block">
                                            White Paper
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </ModalBody>
                    </Modal>
                </MediaQuery>
            </div>
        );
    }

    private getCurrentPage = () => {
        const path = this.props.location.pathname;
        switch (path) {
            case "/":
                return Page.Home;
            case "/index.html":
                return Page.Home;
            case "/platform":
                return Page.Platform;
            case "/source":
                return Page.Source;
            case "/contribute":
                return Page.Contribute;
            case "/contributors":
                return Page.Contributors;
        }
        return Page.Home;
    };

    private toggleTechMenu = () => {
        this.setState({
            isTechMenuOpen: !this.state.isTechMenuOpen
        });
    };

    private toggleTechMenuOnMobile = () => {
        this.setState({
            isTechMobileMenuOpen: !this.state.isTechMobileMenuOpen
        });
    };

    private toggleAboutMenu = () => {
        this.setState({
            isAboutMenuOpen: !this.state.isAboutMenuOpen
        });
    };

    private toggleAboutMenuOnMobile = () => {
        this.setState({
            isAboutMobileMenuOpen: !this.state.isAboutMobileMenuOpen
        });
    };

    private toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    private handleScroll = () => {
        const { isBlueHeader, checkingTop } = this.state;
        if (!checkingTop) {
            return;
        }
        const top = document.body.getBoundingClientRect().top;
        this.setState({
            isAboutMenuOpen: false,
            isTechMenuOpen: false
        });
        if (isBlueHeader && top <= -20) {
            this.setState({
                isBlueHeader: false
            });
        } else if (!isBlueHeader && top > -20) {
            this.setState({
                isBlueHeader: true
            });
        }
    };
}

export default withRouter(Header);
