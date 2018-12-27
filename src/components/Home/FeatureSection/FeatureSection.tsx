import * as React from "react";
import { Container } from "reactstrap";
import "./FeatureSection.scss";
import guaranteed from "./img/guaranteed_privacy_protection.svg";
import increase from "./img/increased_liquidity.svg";
import legal from "./img/legal_compliance.svg";
import programmable from "./img/programmable_assets.svg";
import transparent from "./img/transparent_and immutable_transactions.svg";

export default class FeatureSection extends React.Component<any, any> {
    public render() {
        return (
            <div className="Feature-section">
                <Container>
                    <div className="d-inline-block test2 text-center">
                        <div className="feature-item d-inline-block wow fadeInUp">
                            <div>
                                <img src={legal} />
                            </div>
                            <div className="mb-3">
                                <span className="title">Legal compliance</span>
                            </div>
                            <div>
                                <span className="description">
                                    Token-level built-in support
                                    <br /> for regulatory compliant
                                    <br /> issuance and transactions
                                    <br />
                                    (KYC/AML)
                                </span>
                            </div>
                        </div>
                        <div className="feature-item d-inline-block wow fadeInUp">
                            <div>
                                <img src={programmable} />
                            </div>
                            <div className="mb-3">
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
                            <div className="mb-3">
                                <span className="title">
                                    Increased liquidity
                                </span>
                            </div>
                            <div>
                                <span className="description">
                                    Native support for algorithm-
                                    <br />
                                    based autonomous liquidity
                                    <br />
                                    reserve mechanism layer
                                </span>
                            </div>
                        </div>
                        <div className="feature-item d-inline-block wow fadeInUp">
                            <div>
                                <img src={transparent} />
                            </div>
                            <div className="mb-3">
                                <span className="title">
                                    Transparent and immutable transactions
                                </span>
                            </div>
                            <div>
                                <span className="description">
                                    Public blockchain network
                                </span>
                            </div>
                        </div>
                        <div className="feature-item d-inline-block wow fadeInUp">
                            <div>
                                <img src={guaranteed} />
                            </div>
                            <div className="mb-3">
                                <span className="title">
                                    Guaranteed privacy protection
                                </span>
                            </div>
                            <div>
                                <span className="description">
                                    Tier 1 privacy implementation
                                </span>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}
