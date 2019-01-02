import * as React from "react";
import ContactUsSection from "../ContactUsSection/ContactUsSection";
import FeatureSection from "../FeatureSection/FeatureSection";
import LogoSection from "../LogoSection/LogoSection";
import PlatformSection from "../PlatformSection/PlatformSection";
import "./Home.scss";
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
                <ContactUsSection />
            </div>
        );
    }
}
