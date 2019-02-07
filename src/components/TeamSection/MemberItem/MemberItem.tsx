import * as React from "react";
import { Col } from "reactstrap";
import { Member } from "../TeamSection";
import Github from "./img/github.png";
import JoinUs from "./img/join-us.jpg";
import Medium from "./img/medium.png";
import Twitter from "./img/twitter.png";
import "./MemberItem.scss";
const WOW = require("wowjs");

const MEMBER_PHOTO_PATH = "/about/memberPhoto/";

interface Props {
    member?: Member;
}

export default class MemberItem extends React.Component<Props, any> {
    public componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();
    }
    public render() {
        const { member } = this.props;
        return (
            <Col className="Member-item wow fadeInUp" lg={4} md={6}>
                <div className="member-img-container">
                    {member ? (
                        <img
                            src={`${MEMBER_PHOTO_PATH}${member.photo}.png`}
                            className="photo"
                        />
                    ) : (
                        <img src={JoinUs} className="photo" />
                    )}
                </div>
                <div className="name-container">
                    <span>{member ? member.name : "Join us!"}</span>
                </div>
                <div className="part-container">
                    <span>{member ? member.part : "hi@kodebox.io"}</span>
                </div>
                {member && (
                    <div>
                        <hr className="divider" />
                        <div className="link-container">
                            <div>
                                {member.github && (
                                    <a href={member.github} target="_blank">
                                        <img src={Github} />
                                    </a>
                                )}
                                {member.twitter && (
                                    <a href={member.twitter} target="_blank">
                                        <img src={Twitter} />
                                    </a>
                                )}
                                {member.medium && (
                                    <a href={member.medium} target="_blank">
                                        <img src={Medium} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </Col>
        );
    }
}
