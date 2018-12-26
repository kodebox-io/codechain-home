import * as React from "react";
import ArchitectureSection from "./ArchitectureSection/ArchitectureSection";
import FeatureSection from "./FeatureSection/FeatureSection";
import LogoSection from "./LogoSection/LogoSection";

export default class Platform extends React.Component<any, any> {
    public render() {
        return (
            <div>
                <LogoSection />
                <FeatureSection />
                <ArchitectureSection />
            </div>
        );
    }
}
