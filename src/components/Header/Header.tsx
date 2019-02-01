import * as React from "react";
import MediaQuery from "react-responsive";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import { NavHashLink as NavLink } from "react-router-hash-link";
import { Modal, ModalBody } from "reactstrap";
import "./Header.scss";
import menuClose from "./img/Close.svg";
import logoWhite from "./img/CodechainLogo_White.svg";
import logo from "./img/logo.svg";
import menuWhite from "./img/menu.svg";
import menuBlue from "./img/menu2.svg";

interface State {
    isOpen: boolean;
    isBlueHeader: boolean;
    checkingTop: boolean;
}

const HeaderHeight = 76;
const scrollWithOffset = (el: any, offset: number) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
        top: elementPosition,
        left: 0,
        behavior: "smooth"
    });
};

class Header extends React.Component<RouteComponentProps, State> {
    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            isOpen: false,
            isBlueHeader: true,
            checkingTop: true
        };
    }

    public componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    public componentWillMount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    public render() {
        const { isBlueHeader, isOpen, checkingTop } = this.state;
        return (
            <div
                className={`d-flex align-items-center Header ${!isBlueHeader &&
                    "white-header"} ${checkingTop && "transition"}`}
            >
                <NavLink
                    to="#home"
                    activeClassName="selected"
                    // tslint:disable-next-line:jsx-no-lambda
                    scroll={el => scrollWithOffset(el, HeaderHeight)}
                >
                    {isBlueHeader ? (
                        <img src={logoWhite} />
                    ) : (
                        <img src={logo} />
                    )}
                </NavLink>
                <MediaQuery query="(min-width:768px)">
                    <div className={`menu-item ml-auto`}>
                        <NavLink
                            to="/#feature"
                            activeClassName="selected"
                            // tslint:disable-next-line:jsx-no-lambda
                            scroll={el => scrollWithOffset(el, HeaderHeight)}
                        >
                            <span className="menu-item-header">
                                Why CodeChain
                            </span>
                        </NavLink>
                    </div>
                    <div className="menu-item">
                        <NavLink
                            to="/#platform"
                            activeClassName="selected"
                            // tslint:disable-next-line:jsx-no-lambda
                            scroll={el => scrollWithOffset(el, HeaderHeight)}
                        >
                            <span className="menu-item-header">Platform</span>
                        </NavLink>
                    </div>
                    <div className="menu-item">
                        <NavLink
                            to="/#contact"
                            activeClassName="selected"
                            // tslint:disable-next-line:jsx-no-lambda
                            scroll={el => scrollWithOffset(el, HeaderHeight)}
                        >
                            <span className="menu-item-header">Contact</span>
                        </NavLink>
                    </div>
                    <div className="menu-item">
                        <a href="https://medium.com/codechain" target="_blank">
                            <span>Blog</span>
                        </a>
                    </div>
                    <div className="divider" />
                    <div className="menu-item">
                        <Link to="/about">
                            <span>About Us</span>
                        </Link>
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
                                    <NavLink
                                        to="#home"
                                        activeClassName="selected"
                                        // tslint:disable-next-line:jsx-no-lambda
                                        scroll={el =>
                                            scrollWithOffset(el, HeaderHeight)
                                        }
                                        onClick={this.toggle}
                                    >
                                        <img src={logoWhite} />
                                    </NavLink>
                                </div>
                                <div className="menu-item">
                                    <NavLink
                                        to="#feature"
                                        activeClassName="selected"
                                        // tslint:disable-next-line:jsx-no-lambda
                                        scroll={el =>
                                            scrollWithOffset(el, HeaderHeight)
                                        }
                                        onClick={this.toggle}
                                    >
                                        <span className="item-name">
                                            Why CodeChain
                                        </span>
                                    </NavLink>
                                </div>
                                <div className="menu-item">
                                    <NavLink
                                        to="#platform"
                                        activeClassName="selected"
                                        // tslint:disable-next-line:jsx-no-lambda
                                        scroll={el =>
                                            scrollWithOffset(el, HeaderHeight)
                                        }
                                        onClick={this.toggle}
                                    >
                                        <span className="item-name">
                                            Platform
                                        </span>
                                    </NavLink>
                                </div>
                                <div className="menu-item">
                                    <NavLink
                                        to="#contact"
                                        activeClassName="selected"
                                        // tslint:disable-next-line:jsx-no-lambda
                                        scroll={el =>
                                            scrollWithOffset(el, HeaderHeight)
                                        }
                                        onClick={this.toggle}
                                    >
                                        <span className="item-name">
                                            Contact
                                        </span>
                                    </NavLink>
                                </div>
                                <div className="menu-item">
                                    <a
                                        href="https://medium.com/codechain"
                                        target="_blank"
                                    >
                                        <span className="item-name">Blog</span>
                                    </a>
                                </div>
                                <div className="divider-vertical" />
                                <div className="menu-item">
                                    <Link to="/about">
                                        <span className="item-name">
                                            About Us
                                        </span>
                                    </Link>
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
        const { isBlueHeader, checkingTop } = this.state;
        if (!checkingTop) {
            return;
        }
        const top = document.body.getBoundingClientRect().top;
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
