import * as React from "react";
import ContributeSection from "./ContributeSection/ContributeSection";
import GoodFirstIssueSection from "./GoodFirstIssueSection/GoodFirstIssueSection";

export default class Contribute extends React.Component<any, any> {
    public render() {
        return (
            <div>
                <ContributeSection />
                <GoodFirstIssueSection />
            </div>
        );
    }
}
