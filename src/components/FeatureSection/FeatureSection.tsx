import * as React from "react";
import { Container } from "reactstrap";
import "./FeatureSection.scss";
import guaranteed from "./img/guaranteed_privacy_protection.svg";
import increase from "./img/increased_liquidity.svg";
import legal from "./img/legal_compliance.svg";
import noIssuance from "./img/no_issuance.svg";
import programmable from "./img/programmable_assets.svg";
import transparent from "./img/transparent_and_immutable_transactions.svg";

export default class FeatureSection extends React.Component<any, any> {
    public render() {
        return (
            <div className="Feature-section" id="feature">
                <Container>
                    <div className="section-name-container">
                        <div className="section-title-container">
                            <span className="section-title">
                                Why CodeChain?
                            </span>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="feature-item d-inline-block wow fadeInUp">
                            <div>
                                <img src={legal} />
                            </div>
                            <div className="feature-item-title-container">
                                <span className="title">Legal compliance</span>
                            </div>
                            <div>
                                <span className="description">
                                    Token-level built-in
                                    <br />
                                    support for regulatory
                                    <br />
                                    compliant issuance and
                                    <br />
                                    transactions (KYC/AML)
                                </span>
                            </div>
                        </div>
                        <div className="feature-item d-inline-block wow fadeInUp">
                            <div>
                                <img src={programmable} />
                            </div>
                            <div className="feature-item-title-container">
                                <span className="title">
                                    Programmable assets
                                </span>
                            </div>
                            <div>
                                <span className="description">
                                    Instant dividend or interest
                                    <br />
                                    payouts, buybacks, voting,
                                    <br />
                                    asset composition/
                                    <br />
                                    decomposition/recomposition
                                </span>
                            </div>
                        </div>
                        <div className="feature-item d-inline-block wow fadeInUp">
                            <div>
                                <img src={increase} />
                            </div>
                            <div className="feature-item-title-container">
                                <span className="title">
                                    Increased liquidity
                                </span>
                            </div>
                            <div>
                                <span className="description">
                                    Native support for
                                    <br />
                                    algorithm- based
                                    <br />
                                    autonomous liquidity
                                    <br />
                                    reserve mechanism
                                </span>
                            </div>
                        </div>
                        <div className="feature-item d-inline-block wow fadeInUp">
                            <div>
                                <img src={transparent} />
                            </div>
                            <div className="feature-item-title-container">
                                <span className="title">Public blockchain</span>
                            </div>
                            <div>
                                <span className="description">
                                    Blockchain offers decentralized,
                                    <br />
                                    secure, transparent, and
                                    <br />
                                    immutable transactions
                                </span>
                            </div>
                        </div>
                        <div className="feature-item d-inline-block wow fadeInUp">
                            <div>
                                <img src={guaranteed} />
                            </div>
                            <div className="feature-item-title-container">
                                <span className="title">
                                    Privacy protection
                                </span>
                            </div>
                            <div>
                                <span className="description">
                                    Chain-level control
                                    <br />
                                    over privacy for
                                    <br />
                                    assets and owners
                                </span>
                            </div>
                        </div>
                        <div className="feature-item d-inline-block wow fadeInUp">
                            <div>
                                <img src={noIssuance} />
                            </div>
                            <div className="feature-item-title-container">
                                <span className="title">
                                    No issuance or
                                    <br />
                                    trading fees
                                </span>
                            </div>
                            <div>
                                <span className="description">
                                    The platform only charges
                                    <br />
                                    network transaction fees
                                </span>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}
