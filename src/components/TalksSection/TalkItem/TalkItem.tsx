import * as React from "react";
import { Talk } from "../TalksSection";
import Logo from "./img/logo.png";
import "./TalkItem.scss";

interface Props {
    talk: Talk;
}

export default class TalkItem extends React.Component<Props, any> {
    public render() {
        const { talk } = this.props;
        return (
            <div className="Talk-item">
                <div className="content">
                    <div className="deco" />
                    <div className="title-container">
                        <span>{talk.title}</span>
                    </div>
                    <div className="bottom-container">
                        <div className="date-container">
                            <span>{talk.date}</span>
                        </div>
                        <div className="logo-container">
                            <img src={Logo} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
