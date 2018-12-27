import * as React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import "./Contributors.scss";

interface ContributorItem {
    name: string;
    nickname: string;
    company?: string | null;
    part: string;
    link: string;
}

const contributors: ContributorItem[] = [
    {
        name: "Kwang Yul Seo",
        nickname: "@kseo",
        company: "Kodebox",
        part: "Consensus, Mining, MemPool, Keystore",
        link: "https://github.com/kseo"
    },
    {
        name: "Seulgi Kim",
        nickname: "@sgkim126",
        company: "Kodebox",
        part: "Transaction, Sharding, Network",
        link: "https://github.com/sgkim126"
    },
    {
        name: "Joon Mo Yang",
        nickname: "@Kais-DkM",
        company: "Kodebox",
        part: "Scripting, Sync, Consensus",
        link: "https://github.com/Kais-DkM"
    },
    {
        name: "JinGyeong Jeong",
        nickname: "@joojis",
        company: "Kodebox",
        part: "JSON RPC API, SDK, Key, Gateway",
        link: "https://github.com/joojis"
    },
    {
        name: "Juhyung Park",
        nickname: "@majecty",
        company: "Kodebox",
        part: "Account, Verification, Network, Transaction, Keystore",
        link: "https://github.com/majecty"
    },
    {
        name: "Gilyoung Kim",
        nickname: "@xpdlf1004",
        company: "Kodebox",
        part: "Explorer, Indexer, Wallet",
        link: "https://github.com/xpdlf1004"
    },
    {
        name: "GeunWoo Kim",
        nickname: "@GNUp",
        company: "Kodebox",
        part: "Merkling, Network, Helicopter, Dex",
        link: "https://github.com/GNUp"
    },
    {
        name: "Hyunsik Jeong",
        nickname: "@jhs7jhs",
        company: "Kodebox",
        part: "Integration tests, Keystore, Transaction",
        link: "https://github.com/jhs7jhs"
    },
    {
        name: "Seung Woo Kim",
        nickname: "@ScarletBlue",
        company: "Kodebox",
        part: "Documentation, SDK",
        link: "https://github.com/ScarletBlue"
    },
    {
        name: "SeongChan Lee",
        nickname: "@foriequal0",
        company: "Kodebox",
        part: "PoS",
        link: "https://github.com/foriequal0"
    },
    {
        name: "Seunghee Baek",
        nickname: "@tammy17",
        company: "Kodebox",
        part: "Wallet, Dex, Gateway",
        link: "https://github.com/tammy17"
    },
    {
        name: "Kyunghee Yim",
        nickname: "@Haarpuia",
        part: "Explorer",
        link: "https://github.com/Haarpuia"
    },
    {
        name: "Dongjun Lee",
        nickname: "@redongjun",
        part: "Mining",
        link: "https://github.com/redongjun"
    }
];

export default class Contributors extends React.Component<any, any> {
    public render() {
        return (
            <div>
                <div className="Contributors">
                    <Container>
                        <div className="contributors-section-title-container text-center">
                            <span className="section-title">Contributors</span>
                        </div>
                        <div className="contributor-list">
                            {contributors.map(contributor =>
                                this.getContributorItem(contributor)
                            )}
                            <Link to="/contribute">
                                <div className="contributor-item">
                                    <div className="d-flex align-items-center">
                                        <span className="name">
                                            Interested in contributing?
                                        </span>
                                    </div>
                                    <hr />
                                    <div>
                                        <span className="nickname">
                                            Contribute now!
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </Container>
                </div>
                <div className="Stay-connected">
                    <Container>
                        <div className="text-center">
                            <a
                                href="https://gitter.im/CodeChain-io/codechain"
                                target="_blank"
                            >
                                <div className="custom-btn reverse d-inline-block">
                                    Stay Connected
                                </div>
                            </a>
                        </div>
                    </Container>
                </div>
            </div>
        );
    }

    private getContributorItem = (item: ContributorItem) => {
        return (
            <a href={item.link} target="_blank" key={item.nickname}>
                <div className="contributor-item">
                    <div className="d-flex align-items-center">
                        <span className="name">{item.name}</span>
                        {item.company && (
                            <span className="company ml-auto">
                                {item.company}
                            </span>
                        )}
                    </div>
                    <hr />
                    <div>
                        <span className="nickname">{item.nickname}</span>
                    </div>
                    <div className="mt-3">
                        <span className="part">{item.part}</span>
                    </div>
                </div>
            </a>
        );
    };
}
