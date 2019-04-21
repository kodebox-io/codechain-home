import * as _ from "lodash";
import * as React from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import { Container } from "reactstrap";
import { RawFaqData } from "../FAQ";
import AnswerItem from "./AnswerItem";
import "./index.scss";

interface OwnProps {
    data?: RawFaqData[];
}

type Props = OwnProps & WithTranslation;
class QuickAnswersSection extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }
    public render() {
        const { data, i18n } = this.props;
        const groupData = data && this.parseData(data);
        return (
            <div className="Quick-answers">
                <Container>
                    {groupData ? (
                        Object.keys(groupData).map((categoryId, index) => (
                            <div key={index} className="answer-container">
                                <div
                                    className="category-title-container"
                                    id={`category-${categoryId}`}
                                >
                                    <span>
                                        {i18n.language === "ko"
                                            ? groupData[categoryId][0]
                                                  .categoryName_ko
                                            : groupData[categoryId][0]
                                                  .categoryName_en}
                                    </span>
                                </div>
                                {groupData[categoryId].map(
                                    (d, questionIndex) => (
                                        <AnswerItem
                                            data={d}
                                            key={questionIndex}
                                        />
                                    )
                                )}
                            </div>
                        ))
                    ) : (
                        <div className="text-center">
                            <div className="loader reverse" />
                        </div>
                    )}
                </Container>
            </div>
        );
    }
    private parseData = (data: RawFaqData[]) => {
        return _.groupBy(data, d => d.categoryId);
    };
}

export default withTranslation()(QuickAnswersSection);
