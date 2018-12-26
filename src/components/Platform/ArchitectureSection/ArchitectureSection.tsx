import * as React from "react";
import { Container } from "reactstrap";
import "./ArchitectureSection.scss";
import architecture from "./img/Platform_architecture-01.png";

export default class ArchitectureSection extends React.Component<any, any> {
    public render() {
        return (
            <div className="Platform-architecture-section">
                <Container>
                    <div className="title-container text-center">
                        <span className="title-text">
                            Platform architecture
                        </span>
                    </div>
                    <div className="text-center">
                        <img src={architecture} className="architecture-img" />
                    </div>
                </Container>
            </div>
        );
    }
}
