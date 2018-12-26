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
                    <img src={logo} />
                </Link>
                <MediaQuery query="(min-width:768px)">
                    <div className="menu-item ml-auto">
                        <Link to="/platform">Platform</Link>
                    </div>
                    <div className="menu-item">
                        <span onClick={this.toggleTechMenu} id="TechMenu">
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
                                        <div className="menu-drop-item selected">
                                            <span>Source code</span>
                                        </div>
                                        <div className="menu-drop-item">
                                            <span>Contribute</span>
                                        </div>
                                        <div className="menu-drop-item">
                                            <span>Contributors</span>
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
                                        <div className="menu-drop-item selected">
                                            <span>Company</span>
                                        </div>
                                        <div className="menu-drop-item">
                                            <span>Blog</span>
                                        </div>
                                    </div>
                                </div>
                            </PopoverBody>
                        </Popover>
                    </div>
                    <div className="menu-item">
                        <div
                            className={`custom-btn paper-btn ${isBlueHeader &&
                                "reverse"}`}
                        >
                            White Paper
                        </div>
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
                                    <img src={logoWhite} />
                                </div>
                                <div className="menu-item">
                                    <span className="item-name">Platform</span>
                                </div>
                                <div className="menu-item">
                                    <span
                                        className="item-name"
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
                                                <div className="menu-drop-item selected">
                                                    <span>Source code</span>
                                                </div>
                                                <div className="menu-drop-item">
                                                    <span>Contribute</span>
                                                </div>
                                                <div className="menu-drop-item">
                                                    <span>Contributors</span>
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
                                                <div className="menu-drop-item selected">
                                                    <span>Company</span>
                                                </div>
                                                <div className="menu-drop-item">
                                                    <span>Blog</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}
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
