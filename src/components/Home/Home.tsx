import * as React from "react";
import FeatureSection from "./FeatureSection/FeatureSection";
import LogoSection from "./LogoSection/LogoSection";

export default class Home extends React.Component<any, any> {
    public render() {
        return (
            <div>
                <LogoSection />
                <FeatureSection />
            </div>
        );
    }
}
