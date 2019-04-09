import * as React from "react";
import { withTranslation, WithTranslation, Trans } from "react-i18next";
import { Container } from "reactstrap";
import network from "./img/Blockchain_network.svg";
import consoleImg from "./img/Console.svg";
import exchange from "./img/Exchange.svg";
import explorer from "./img/Explorer.svg";
import liquidity from "./img/Liquidity_provider.svg";
import architecture from "./img/Platform_architecture-01.png";
import wallet from "./img/Wallet.svg";
import "./PlatformSection.scss";

type Props = WithTranslation;

class PlatformSection extends React.Component<Props> {
    public render() {
        console.log()
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
                                <Trans i18nKey="platform:platform.content" />
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
                                    <Trans i18nKey="platform:blockchain.title" />
                                </span>
                            </div>
                            <div className="mt-2">
                                <span className="description2">
                                    <Trans i18nKey="platform:blockchain.content" />
                                </span>
                            </div>
                        </div>
                        <div className="platform-item d-inline-block wow fadeInUp">
                            <div className="mb-3">
                                <img src={consoleImg} />
                            </div>
                            <div>
                                <span className="description">
                                    <Trans i18nKey="platform:console.title" />
                                </span>
                            </div>
                            <div className="mt-2">
                                <span className="description2">
                                    <Trans i18nKey="platform:console.content" />
                                </span>
                            </div>
                        </div>
                        <div className="platform-item d-inline-block wow fadeInUp">
                            <div className="mb-3">
                                <img src={liquidity} />
                            </div>
                            <div>
                                <span className="description">
                                    <Trans i18nKey="platform:liquidity.title" />
                                </span>
                            </div>
                            <div className="mt-2">
                                <span className="description2">
                                    <Trans i18nKey="platform:liquidity.content" />
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
                                <span className="description">
                                    <Trans i18nKey="platform:exchange.title" />
                                </span>
                            </div>
                            <div className="mt-2">
                                <span className="description2">
                                    <Trans i18nKey="platform:exchange.content" />
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
                                <span className="description">
                                    <Trans i18nKey="platform:wallet.title" />
                                </span>
                            </div>
                            <div className="mt-2">
                                <span className="description2">
                                    <Trans i18nKey="platform:wallet.content" />
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
                                <span className="description">
                                    <Trans i18nKey="platform:explorer.title" />
                                </span>
                            </div>
                            <div className="mt-2">
                                <span className="description2">
                                    <Trans i18nKey="platform:explorer.content" />
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

export default withTranslation()(PlatformSection);
