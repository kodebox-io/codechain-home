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
                    <div className="title-contaienr">
                        <span className="title">Platform</span>
                    </div>
                    <div>
                        <div className="platform-item d-inline-block wow fadeInUp">
                            <div className="mb-3">
                                <img src={network} />
                            </div>
                            <div>
                                <span className="description">
                                    BlockChain network
                                </span>
                            </div>
                            <div className="mt-2">
                                <span className="description2">
                                    Public&permissioned/
                                    <br />
                                    powered by CodeChain engine
                                </span>
                            </div>
                        </div>
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
                        <div className="platform-item d-inline-block wow fadeInUp">
                            <div className="mb-3">
                                <img src={exchange} />
                            </div>
                            <div>
                                <span className="description">Exchange</span>
                            </div>
                            <div className="mt-2">
                                <span className="description2">
                                    Customizable asset
                                    <br />
                                    trading platform
                                </span>
                            </div>
                        </div>
                        <div className="platform-item d-inline-block wow fadeInUp">
                            <div className="mb-3">
                                <img src={wallet} />
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
                        <div className="platform-item d-inline-block wow fadeInUp">
                            <div className="mb-3">
                                <img src={explorer} />
                            </div>
                            <div>
                                <span className="description">Explorer</span>
                            </div>
                            <div className="mt-2">
                                <span className="description2">
                                    Transaction tracking &<br />
                                    transparent asset auditing
                                </span>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}
