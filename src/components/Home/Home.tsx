import * as React from "react";
import FeatureSection from "./FeatureSection/FeatureSection";
import "./Home.scss";
import LogoSection from "./LogoSection/LogoSection";
import PlatformSection from "./PlatformSection/PlatformSection";
import SeeMoreSection from "./SeeMoreSection/SeeMoreSection";
const WOW = require("wowjs");

export default class Home extends React.Component<any, any> {
    public componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();
    }
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
