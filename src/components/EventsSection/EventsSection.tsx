import axios from "axios";
import csv from "csvtojson";
import * as React from "react";
import Slider from "react-slick";
import { Container } from "reactstrap";
import EventItem from "./EventItem/EventItem";
import "./EventsSection.scss";

const EVENT_LIST_FILE_PATH = "/about/events.json";

export interface Event {
    id: number;
    subTitle: string;
    title: string;
    startDate: string;
    endDate: string;
    link: string;
    photo: string;
}

interface State {
    events?: Event[] | null;
}

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

export default class EventsSection extends React.Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            events: undefined
        };
    }
    public async componentDidMount() {
        try {
            const events = await this.loadEvents();
            this.setState({
                events
            });
        } catch (e) {
            console.error(e);
        }
    }
    public render() {
        const { events } = this.state;
        return (
            <div className="Events-section">
                <Container>
                    <div className="section-name-container">
                        <div className="section-title-container">
                            <span className="section-title">Events</span>
                        </div>
                    </div>
                    <div>
                        {events ? (
                            <div>
                                <Slider {...settings}>
                                    {events.map(event => (
                                        <EventItem
                                            key={event.id}
                                            event={event}
                                        />
                                    ))}
                                </Slider>
                            </div>
                        ) : (
                            <div className="text-center">
                                <div className="loader reverse" />
                            </div>
                        )}
                    </div>
                </Container>
            </div>
        );
    }
    private loadEvents = (): Promise<Event[]> => {
        return new Promise((resolve, reject) => {
            axios
                .get<Event[]>(EVENT_LIST_FILE_PATH)
                .then(result => {
                    resolve(result.data);
                })
                .catch(reject);
        });
    };
}
