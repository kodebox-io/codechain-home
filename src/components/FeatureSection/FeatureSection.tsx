import * as React from "react";
import { withTranslation, WithTranslation, Trans } from "react-i18next";
import { Container } from "reactstrap";
import "./FeatureSection.scss";
import guaranteed from "./img/guaranteed_privacy_protection.svg";
import increase from "./img/increased_liquidity.svg";
import legal from "./img/legal_compliance.svg";
import programmable from "./img/programmable_assets.svg";
import transparent from "./img/transparent_and_immutable_transactions.svg";

type Props = WithTranslation;

class FeatureSection extends React.Component<Props> {
    public render() {
        return (
            <div className="Feature-section" id="#feature">
                <Container>
                    <div className="section-name-container">
                        <div className="section-title-container">
                            <span className="section-title">
                                Why CodeChain?
                            </span>
                        </div>
                        <div className="section-description-container">
                            <span className="section-description">
                                <Trans i18nKey="feature:codechain.content" />
                            </span>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="feature-item d-inline-block wow fadeInUp">
                            <div>
                                <img src={legal} />
                            </div>
                            <div className="feature-item-title-container">
                                <span className="title">
                                    <Trans i18nKey="feature:legal.title" />
                                </span>
                            </div>
                            <div>
                                <span className="description">
                                    <Trans i18nKey="feature:legal.content" />
                                </span>
                            </div>
                        </div>
                        <div className="feature-item d-inline-block wow fadeInUp">
                            <div>
                                <img src={programmable} />
                            </div>
                            <div className="feature-item-title-container">
                                <span className="title">
                                    <Trans i18nKey="feature:asset.title" />
                                </span>
                            </div>
                            <div>
                                <span className="description">
                                    <Trans i18nKey="feature:asset.content" />
                                </span>
                            </div>
                        </div>
                        <div className="feature-item d-inline-block wow fadeInUp">
                            <div>
                                <img src={increase} />
                            </div>
                            <div className="feature-item-title-container">
                                <span className="title">
                                    <Trans i18nKey="feature:liquidity.title" />
                                </span>
                            </div>
                            <div>
                                <span className="description">
                                    <Trans i18nKey="feature:liquidity.content" />
                                </span>
                            </div>
                        </div>
                        <div className="feature-item d-inline-block wow fadeInUp">
                            <div>
                                <img src={transparent} />
                            </div>
                            <div className="feature-item-title-container">
                                <span className="title">
                                    <Trans i18nKey="feature:public.title" />
                                </span>
                            </div>
                            <div>
                                <span className="description">
                                    <Trans i18nKey="feature:public.content" />
                                </span>
                            </div>
                        </div>
                        <div className="feature-item d-inline-block wow fadeInUp">
                            <div>
                                <img src={guaranteed} />
                            </div>
                            <div className="feature-item-title-container">
                                <span className="title">
                                    <Trans i18nKey="feature:privacy.title" />
                                </span>
                            </div>
                            <div>
                                <span className="description">
                                    <Trans i18nKey="feature:privacy.content" />
                                </span>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default withTranslation()(FeatureSection);
