import axios from "axios";
import csv from "csvtojson";
import * as React from "react";
import { Container } from "reactstrap";
import MediaItem from "./MediaItem/MediaItem";
import "./MediaSection.scss";

const MEDIA_LIST_FILE_PATH =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vR2MKrl-YFy26ceynEi3xc_j1yY7IQNx7ACTiJCHtlsck0qFdS8VtINhFsGMxLNki39ebYVw0FfJMAL/pub?gid=0&single=true&output=csv";

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
}
export default class MediaSection extends React.Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            mediaList: undefined
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
        const { mediaList } = this.state;
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
                            mediaList.map(media => (
                                <MediaItem key={media.id} media={media} />
                            ))
                        ) : (
                            <div className="text-center">
                                <div className="loader" />
                            </div>
                        )}
                    </div>
                </Container>
            </div>
        );
    }
    private loadMediaList = (): Promise<Media[]> => {
        return new Promise((resolve, reject) => {
            axios
                .get<string>(MEDIA_LIST_FILE_PATH)
                .then(result => {
                    csv()
                        .fromString(result.data)
                        .then(resolve);
                })
                .catch(reject);
        });
    };
}
