import * as React from "react";
import { Col } from "reactstrap";
import { Member } from "../TeamSection";
import Github from "./img/github.png";
import JoinUs from "./img/join-us.jpg";
import Medium from "./img/medium.png";
import Twitter from "./img/twitter.png";
import "./MemberItem.scss";

const GOOGLE_DRIVE_URL = "https://drive.google.com/uc?export=view&id=";

interface Props {
    member?: Member;
}

export default class MemberItem extends React.Component<Props, any> {
    public render() {
        const { member } = this.props;
        return (
            <Col className="Member-item" lg={4} md={6}>
                <div className="member-img-container">
                    {member ? (
                        <img
                            src={`${GOOGLE_DRIVE_URL}${member.photo}`}
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
