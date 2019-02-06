import * as React from "react";
import { Container } from "reactstrap";
import "./AboutUsSection.scss";

export default class AboutUsSection extends React.Component<any, any> {
    public render() {
        return (
            <div className="About-us">
                <Container>
                    <div className="title-container">
                        <span>About Us</span>
                    </div>
                    <div className="description-container">
                        <span>
                            A blockchain technology company on a mission to
                            create and enable smarter asset management systems
                        </span>
                    </div>
                </Container>
            </div>
        );
    }
}
