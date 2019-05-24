import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import ContactUsSection from "../ContactUsSection/ContactUsSection";
import FeatureSection from "../FeatureSection/FeatureSection";
import LogoSection from "../LogoSection/LogoSection";
import PlatformSection from "../PlatformSection/PlatformSection";
import "./Home.scss";
const WOW = require("wowjs");

export const paths = ["/home", "/feature", "/platform", "/contact"];
export default class Home extends React.Component<RouteComponentProps> {
    public componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();

        const path = paths.indexOf(this.props.location.pathname) !== -1 ?
            this.props.location.pathname :
            "/home";
        const id = "#" + path.slice(1);
        window.setTimeout(() => {
            const el = document.getElementById(id);
            if (el != null) {
                el.scrollIntoView();
            }
        }, 0);
    }

    public shouldComponentUpdate() {
      return false;
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
