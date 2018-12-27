import * as React from "react";
import { Container } from "reactstrap";
import "./FeatureSection.scss";
import network from "./img/Blockchain_network.svg";
import consoleImg from "./img/Console.svg";
import exchange from "./img/Exchange.svg";
import explorer from "./img/Explorer.svg";
import liquidity from "./img/Liquidity_provider.svg";
import wallet from "./img/Wallet.svg";

export default class FeatureSection extends React.Component<any, any> {
    public render() {
        return (
            <div className="Platform-feature-section">
                <Container>
                    <div className="section-title-container reverse">
                        <div>
                            <span className="section-index">03</span>
                        </div>
                        <div className="section-deco" />
                        <div className="mb-3">
                            <span className="section-title">
                                Feature complete
                            </span>
                        </div>
                        <div className="section-description-container">
                            <span className="section-description">
                                The platform is fully-featured with
                            </span>
                        </div>
                    </div>

                    <div className="platform-item-container">
                        <a
                            href="https://github.com/CodeChain-io/codechain"
                            target="_blank"
                        >
                            <div className="platform-item d-inline-block wow fadeInUp active">
                                <div className="mb-3">
                                    <div className="platform-item-image-container">
                                        <img src={network} />
                                        <div className="overlay" />
                                    </div>
                                </div>
                                <div>
                                    <span className="description">
                                        Blockchain network
                                    </span>
                                </div>
                                <div className="mt-2">
                                    <span className="description2">
                                        Public & permissioned
                                        <br />
                                        powered by CodeChain engine
                                    </span>
                                </div>
                            </div>
                        </a>
                        <div className="platform-item d-inline-block wow fadeInUp">
                            <div className="mb-3">
                                <img src={consoleImg} />
                            </div>
                            <div>
                                <span className="description">Console</span>
                            </div>
                            <div className="mt-2">
                                <span className="description2">
                                    Issue, transfer and manage
                                    <br />
                                    assets, users, votes, dividend
                                    <br />
                                    payouts, buyouts, lockups, ect.
                                </span>
                            </div>
                        </div>
                        <div className="platform-item d-inline-block wow fadeInUp">
                            <div className="mb-3">
                                <img src={liquidity} />
                            </div>
                            <div>
                                <span className="description">
                                    Liquidity provider
                                </span>
                            </div>
                            <div className="mt-2">
                                <span className="description2">
                                    Algorithmic autonomous
                                    <br />
                                    liquidity reserve layer
                                </span>
                            </div>
                        </div>
                        <a
                            href="https://github.com/CodeChain-io/codechain-exchange"
                            target="_blank"
                        >
                            <div className="platform-item d-inline-block wow fadeInUp active">
                                <div className="mb-3">
                                    <div className="platform-item-image-container">
                                        <img src={exchange} />
                                        <div className="overlay" />
                                    </div>
                                </div>
                                <div>
                                    <span className="description">
                                        Exchange
                                    </span>
                                </div>
                                <div className="mt-2">
                                    <span className="description2">
                                        Customizable asset
                                        <br />
                                        trading platform
                                    </span>
                                </div>
                            </div>
                        </a>
                        <a
                            href="https://github.com/CodeChain-io/codechain-wallet"
                            target="_blank"
                        >
                            <div className="platform-item d-inline-block wow fadeInUp active">
                                <div className="mb-3">
                                    <div className="platform-item-image-container">
                                        <img src={wallet} />
                                        <div className="overlay" />
                                    </div>
                                </div>
                                <div>
                                    <span className="description">Wallet</span>
                                </div>
                                <div className="mt-2">
                                    <span className="description2">
                                        Easy transactions, voting,
                                        <br />& management of asset portfolios
                                    </span>
                                </div>
                            </div>
                        </a>
                        <a
                            href="https://corgi.codechain.io/explorer"
                            target="_blank"
                        >
                            <div className="platform-item d-inline-block wow fadeInUp active">
                                <div className="mb-3">
                                    <div className="platform-item-image-container">
                                        <img src={explorer} />
                                        <div className="overlay" />
                                    </div>
                                </div>
                                <div>
                                    <span className="description">
                                        Explorer
                                    </span>
                                </div>
                                <div className="mt-2">
                                    <span className="description2">
                                        Transaction tracking &<br />
                                        transparent asset auditing
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                </Container>
            </div>
        );
    }
}
