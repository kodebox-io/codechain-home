import * as React from "react";
import DocumentsSection from "./DocumentsSection/DocumentsSection";
import DownloadSection from "./DownloadSection/DownloadSection";
import PresentationSection from "./PresentationSection/PresentationSection";

export default class Source extends React.Component<any, any> {
    public render() {
        return (
            <div>
                <DownloadSection />
                <DocumentsSection />
                <PresentationSection />
            </div>
        );
    }
}
