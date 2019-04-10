import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import Language from "@material-ui/icons/Language";
import * as React from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import MediaQuery from "react-responsive";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import { NavHashLink as NavLink } from "react-router-hash-link";
import { Modal, ModalBody, Popover, PopoverBody } from "reactstrap";
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
    isLangOpen: boolean;
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

type Props = RouteComponentProps & WithTranslation;

class Header extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isLangOpen: false,
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
        const { i18n } = this.props;
        const { isBlueHeader, isOpen, checkingTop } = this.state;

        const selectedText = i18n.language === "ko" ? "한국어" : "English";
        const remainingText =
            i18n.language === "ko" ? (
                <div className="eng-text">English</div>
            ) : (
                "한국어"
            );
        const remainingLang = i18n.language === "ko" ? "en" : "ko";
        return (
            <div
                className={`d-flex align-items-center Header ${!isBlueHeader &&
                    "white-header"} ${checkingTop && "transition"}`}
            >
                <NavLink
                    to="/#home"
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
                    <div className="divider" />
                    <div className="menu-item">
                        <Link to="/about">
                            <span>About Us</span>
                        </Link>
                    </div>
                    <div className="divider" />
                    <div className="menu-item">
                        <a href="https://medium.com/codechain" target="_blank">
                            <span>Blog</span>
                        </a>
                    </div>
                    <div className="divider" />
                    <div
                        id="language-change-btn"
                        className="d-flex align-items-center menu-item"
                        onClick={this.toggleLangButton}
                    >
                        <Language className="language-icon" />
                        <span className="item-name">{selectedText}</span>
                        <Popover
                            hideArrow={true}
                            placement="bottom"
                            isOpen={this.state.isLangOpen}
                            target="language-change-btn"
                            toggle={this.toggleLangButton}
                            className={`lang-popover ${!isBlueHeader &&
                                "white-header"}`}
                        >
                            <PopoverBody>
                                <span
                                    className="item-name"
                                    // tslint:disable-next-line:jsx-no-lambda
                                    onClick={() =>
                                        this.changeLanguage(remainingLang)
                                    }
                                >
                                    {remainingText}
                                </span>
                            </PopoverBody>
                        </Popover>
                        <ArrowDropDown />
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
                                        to="/#home"
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
                                        to="/#feature"
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
                                        to="/#platform"
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
                                        to="/#contact"
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
                                <div className="divider-vertical" />
                                <div className="menu-item">
                                    <Link to="/about" onClick={this.toggle}>
                                        <span className="item-name">
                                            About Us
                                        </span>
                                    </Link>
                                </div>
                                <div className="divider-vertical" />
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
                                    <div className="d-flex justify-content-center">
                                        <span
                                            className="item-name"
                                            // tslint:disable-next-line:jsx-no-lambda
                                            onClick={() =>
                                                this.changeLanguage("en")
                                            }
                                        >
                                            English
                                        </span>
                                        <div
                                            style={{ width: 20 }}
                                            className="divider"
                                        />
                                        <span
                                            className="item-name"
                                            // tslint:disable-next-line:jsx-no-lambda
                                            onClick={() =>
                                                this.changeLanguage("ko")
                                            }
                                        >
                                            한국어
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </ModalBody>
                    </Modal>
                </MediaQuery>
            </div>
        );
    }

    private toggleLangButton = () => {
        this.setState({
            isLangOpen: !this.state.isLangOpen
        });
    };

    private toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    private changeLanguage = (lang: string) => {
        const { i18n } = this.props;
        i18n.changeLanguage(lang);
        this.toggleLangButton();
        this.toggle();
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

export default withTranslation()(withRouter(Header));
