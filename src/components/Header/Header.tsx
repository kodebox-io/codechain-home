import * as React from "react";
import "./Header.scss";
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
        const { isTop } = this.state;
        return (
            <div
                className={`d-flex align-items-center Header ${isTop &&
                    "blue-header"}`}
            >
                <img src={logo} />
                <div className="menu-item ml-auto">Platform</div>
                <div className="menu-item">Technology</div>
                <div className="menu-item">About us</div>
                <div className="menu-item">
                    <div
                        className={`custom-btn paper-btn ${isTop && "reverse"}`}
                    >
                        White Paper
                    </div>
                </div>
            </div>
        );
    }

    private toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    private handleScroll = (event: any) => {
        const { isTop } = this.state;
        if (isTop && document.documentElement.scrollTop >= 20) {
            this.setState({
                isTop: false
            });
        } else if (!isTop && document.documentElement.scrollTop < 20) {
            this.setState({
                isTop: true
            });
        }
    };
}
