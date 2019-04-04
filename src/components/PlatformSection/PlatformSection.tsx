import * as React from "react";
import { Container } from "reactstrap";
import network from "./img/Blockchain_network.svg";
import consoleImg from "./img/Console.svg";
import exchange from "./img/Exchange.svg";
import explorer from "./img/Explorer.svg";
import liquidity from "./img/Liquidity_provider.svg";
import architecture from "./img/Platform_architecture-01.png";
import wallet from "./img/Wallet.svg";
import "./PlatformSection.scss";

export default class PlatformSection extends React.Component<any, any> {
    public render() {
        return (
            <div className="Platform-section" id="platform">
                <Container>
                    <div className="section-name-container">
                        <div className="section-title-container">
                            <span className="section-title reverse">
                                Platform
                            </span>
                        </div>
                        <div className="section-description-container">
                            <span className="section-description reverse">
                                full-fledged vertical technology stack that
                                covers everything from security token issuance
                                to post-issuance governance
                            </span>
                        </div>
                    </div>
                    <div className="platform-item-container">
                        <div className="platform-item d-inline-block wow fadeInUp active">
                            <div className="mb-3">
                                <div className="platform-item-image-container">
                                    <img src={network} />
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
                                    payouts, buyouts, lockups, etc.
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
                        <div className="platform-item d-inline-block wow fadeInUp active">
                            <div className="mb-3">
                                <div className="platform-item-image-container">
                                    <img src={exchange} />
                                </div>
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
                        <div className="platform-item d-inline-block wow fadeInUp active">
                            <div className="mb-3">
                                <div className="platform-item-image-container">
                                    <img src={wallet} />
                                </div>
                            </div>
                            <div>
                                <span className="description">Wallet</span>
                            </div>
                            <div className="mt-2">
                                <span className="description2">
                                    Easy transactions, voting &<br />
                                    management of asset portfolios
                                </span>
                            </div>
                        </div>
                        <div className="platform-item d-inline-block wow fadeInUp active">
                            <div className="mb-3">
                                <div className="platform-item-image-container">
                                    <img src={explorer} />
                                </div>
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
                    <div className="architecture-container">
                        <img src={architecture} className="architecture-img" />
                    </div>
                    <div className="button-container">
                        <a
                            href="https://github.com/CodeChain-io"
                            target="_blank"
                        >
                            <div className="custom-btn reverse">
                                Source Code
                            </div>
                        </a>
                        <a target="_blank" href="https://api.codechain.io">
                            <div className="custom-btn reverse">API</div>
                        </a>
                        <a
                            href="https://codechain.readthedocs.io/en/latest/"
                            target="_blank"
                        >
                            <div className="custom-btn reverse">Manual</div>
                        </a>
                    </div>
                </Container>
            </div>
        );
    }
}
