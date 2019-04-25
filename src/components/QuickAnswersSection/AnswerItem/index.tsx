import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import ArrowDropUp from "@material-ui/icons/ArrowDropUp";
import * as React from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import { RawFaqData } from "../../FAQ";
import "./index.scss";
const showdown = require("showdown");
const converter = new showdown.Converter({
    tables: "true",
    openLinksInNewWindow: true
});

interface OwnProps {
    data: RawFaqData;
}

interface State {
    isOpen: boolean;
}

type Props = OwnProps & WithTranslation;
class AnswerItem extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { isOpen: false };
    }
    public render() {
        const { data, i18n } = this.props;
        const { isOpen } = this.state;
        return (
            <div
                className={`Answer-item ${isOpen && "selected"}`}
                id={`question-${data.id}`}
            >
                <div
                    className={`answer-item-question-container ${isOpen &&
                        "selected"}`}
                    onClick={this.toggle}
                >
                    <span>
                        {i18n.language === "ko"
                            ? data.question_ko
                            : data.question_en}
                    </span>
                    {isOpen ? <ArrowDropUp /> : <ArrowDropDown />}
                </div>
                {isOpen && (
                    <div
                        className={"answer-item-answer-container"}
                        dangerouslySetInnerHTML={{
                            __html: converter.makeHtml(
                                i18n.language === "ko"
                                    ? data.answer_ko
                                    : data.answer_en
                            )
                        }}
                    />
                )}
            </div>
        );
    }
    private toggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };
}

export default withTranslation()(AnswerItem);
