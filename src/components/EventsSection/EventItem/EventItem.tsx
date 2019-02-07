import moment from "moment";
import * as React from "react";
import { Event } from "../EventsSection";
import "./EventItem.scss";

const EVENT_PHOTO_PATH = "/about/eventPhoto/";

interface Props {
    event: Event;
}

export default class EventItem extends React.Component<Props, any> {
    public render() {
        const { event } = this.props;
        const isPast = moment(event.endDate).diff(moment()) < 0;
        return (
            <div className="Event-item">
                <div className="content">
                    <a href={event.link} target="_blank">
                        <div>
                            <div
                                className="image"
                                style={{
                                    backgroundImage: `url(${EVENT_PHOTO_PATH}${
                                        event.photo
                                    }.png)`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center center",
                                    backgroundSize: "cover"
                                }}
                            />
                            <div className="info-container">
                                <div className="sub-title-container">
                                    <span>{event.subTitle}</span>
                                </div>
                                <div className="title-container">
                                    <span>{event.title}</span>
                                </div>
                            </div>
                        </div>
                    </a>
                    <div className={`overlay ${isPast ? "past" : "upcoming"}`}>
                        {isPast ? "Past : " : "Upcoming : "}
                        {event.startDate === event.endDate
                            ? moment(event.startDate).format("MMM Do, YYYY")
                            : `${moment(event.startDate).format(
                                  "MMM Do, YYYY"
                              )} ~
                            ${moment(event.endDate).format("MMM Do, YYYY")}`}
                    </div>
                </div>
            </div>
        );
    }
}
