import axios from "axios";
import csv from "csvtojson";
import * as React from "react";
import { Container } from "reactstrap";
import MediaItem from "./MediaItem/MediaItem";
import "./MediaSection.scss";

const MEDIA_LIST_FILE_PATH = "/about/media.json";

const VIEW_COUNT = 6;

export interface Media {
    id: number;
    title: string;
    text: string;
    date: string;
    media: string;
    link: string;
    photo: string;
}

interface State {
    mediaList?: Media[] | null;
    isOpen: boolean;
}
export default class MediaSection extends React.Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            mediaList: undefined,
            isOpen: false
        };
    }
    public async componentDidMount() {
        try {
            const mediaList = await this.loadMediaList();
            this.setState({
                mediaList
            });
        } catch (e) {
            console.error(e);
        }
    }
    public render() {
        const { mediaList, isOpen } = this.state;
        return (
            <div className="Media-section">
                <Container>
                    <div className="section-name-container">
                        <div className="section-title-container">
                            <span className="section-title reverse">
                                Media Coverage
                            </span>
                        </div>
                    </div>
                    <div>
                        {mediaList ? (
                            mediaList
                                .slice(
                                    0,
                                    isOpen ? mediaList.length : VIEW_COUNT
                                )
                                .map(media => (
                                    <MediaItem key={media.id} media={media} />
                                ))
                        ) : (
                            <div className="text-center">
                                <div className="loader" />
                            </div>
                        )}
                        <div className="text-center">
                            <button
                                onClick={this.toggle}
                                className="btn custom-btn reverse"
                            >
                                {isOpen ? "View less" : "View more"}
                            </button>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
    private loadMediaList = (): Promise<Media[]> => {
        return new Promise((resolve, reject) => {
            axios
                .get<Media[]>(MEDIA_LIST_FILE_PATH)
                .then(result => {
                    resolve(result.data);
                })
                .catch(reject);
        });
    };
    private toggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };
}
