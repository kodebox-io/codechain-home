import * as React from "react";
import { Media } from "../MediaSection";
import "./MediaItem.scss";

const GOOGLE_DRIVE_URL = "https://drive.google.com/uc?export=view&id=";

interface Props {
    media: Media;
}
export default class MediaItem extends React.Component<Props, any> {
    public render() {
        const { media } = this.props;
        return (
            <div className="Media-item">
                <a href={media.link} target="_blank">
                    <div className="d-flex">
                        <div className="info-container">
                            <div className="title-container">
                                <span>{media.title}</span>
                            </div>
                            <div className="date-container">
                                <span>
                                    [{media.date}] {media.media}
                                </span>
                            </div>
                            <div className="text-container">
                                <span>{media.text}</span>
                            </div>
                        </div>
                        <div
                            className="photo"
                            style={{
                                background: `url(${GOOGLE_DRIVE_URL}${
                                    media.photo
                                })`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center center",
                                backgroundSize: "cover"
                            }}
                        />
                    </div>
                </a>
            </div>
        );
    }
}
