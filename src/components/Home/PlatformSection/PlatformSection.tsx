import * as React from "react";
import "./PlatformSection.scss";

import { Container } from "reactstrap";
import network from "./img/Blockchain_network.svg";
import consoleImg from "./img/Console.svg";
import exchange from "./img/Exchange.svg";
import explorer from "./img/Explorer.svg";
import liquidity from "./img/Liquidity_provider.svg";
import wallet from "./img/Wallet.svg";

export default class PlatformSection extends React.Component<any, any> {
    public render() {
        return (
            <div className="Platform-section">
                <Container>
                    <div className="title-contaienr">
                        <span className="title">Platform</span>
                    </div>
                    <div>
                        <div className="platform-item d-inline-block">
                            <div className="mb-3">
                                <img src={network} />
                            </div>
                            <div>
                                <span className="description">
                                    BlockChain network
                                </span>
                            </div>
                        </div>
                        <div className="platform-item d-inline-block">
                            <div className="mb-3">
                                <img src={consoleImg} />
                            </div>
                            <div>
                                <span className="description">Console</span>
                            </div>
                        </div>
                        <div className="platform-item d-inline-block">
                            <div className="mb-3">
                                <img src={liquidity} />
                            </div>
                            <div>
                                <span className="description">
                                    Liquidity provider
                                </span>
                            </div>
                        </div>
                        <div className="platform-item d-inline-block">
                            <div className="mb-3">
                                <img src={exchange} />
                            </div>
                            <div>
                                <span className="description">Exchange</span>
                            </div>
                        </div>
                        <div className="platform-item d-inline-block">
                            <div className="mb-3">
                                <img src={wallet} />
                            </div>
                            <div>
                                <span className="description">Wallet</span>
                            </div>
                        </div>
                        <div className="platform-item d-inline-block">
                            <div className="mb-3">
                                <img src={explorer} />
                            </div>
                            <div>
                                <span className="description">Explorer</span>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}
