import * as React from "react";
import FeatureSection from "./FeatureSection/FeatureSection";
import "./Home.scss";
import LogoSection from "./LogoSection/LogoSection";
import PlatformSection from "./PlatformSection/PlatformSection";
import SeeMoreSection from "./SeeMoreSection/SeeMoreSection";

export default class Home extends React.Component<any, any> {
    public render() {
        return (
            <div className="Home">
                <LogoSection />
                <FeatureSection />
                <PlatformSection />
                <SeeMoreSection />
            </div>
        );
    }
}
