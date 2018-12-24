import * as React from "react";
import FeatureSection from "./FeatureSection/FeatureSection";
import LogoSection from "./LogoSection/LogoSection";
import PlatformSection from "./PlatformSection/PlatformSection";

export default class Home extends React.Component<any, any> {
    public render() {
        return (
            <div>
                <LogoSection />
                <FeatureSection />
                <PlatformSection />
            </div>
        );
    }
}
