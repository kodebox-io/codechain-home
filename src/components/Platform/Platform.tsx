import * as React from "react";
import ArchitectureSection from "./ArchitectureSection/ArchitectureSection";
import CheckSection from "./CheckSection/CheckSection";
import FeatureSection from "./FeatureSection/FeatureSection";
import LogoSection from "./LogoSection/LogoSection";
const WOW = require("wowjs");

export default class Platform extends React.Component<any, any> {
    public componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();
    }
    public render() {
        return (
            <div>
                <LogoSection />
                <FeatureSection />
                <ArchitectureSection />
                <CheckSection />
            </div>
        );
    }
}
