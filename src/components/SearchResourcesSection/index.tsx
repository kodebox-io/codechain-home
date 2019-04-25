import * as React from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import Select from "react-select";
import { getOptionValue } from "react-select/lib/builtins";
import { ValueType } from "react-select/lib/types";
import { RawFaqData } from "../FAQ";
import "./index.scss";

interface OwnProps {
    data?: RawFaqData[];
    onSelect: (id: string) => void;
}

type Props = WithTranslation & OwnProps;
class SearchResourcesSection extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }
    public parseData = (data: RawFaqData[]) => {
        const { i18n } = this.props;
        const parseData = data.map(d => ({
            label: i18n.language === "ko" ? d.question_ko : d.question_en,
            value: d.id
        }));
        return parseData;
    };
    public render() {
        const { data, t } = this.props;
        const options = data && this.parseData(data);
        return (
            <div className="Search-resources-section">
                <div className="search-resource-title">
                    <span>{t("faq:search.title")}</span>
                </div>
                <div className="select-wrapper">
                    <Select
                        isLoading={!options}
                        className="select-container"
                        onChange={this.handleChange}
                        isClearable={true}
                        value={null}
                        // tslint:disable-next-line:jsx-no-lambda
                        noOptionsMessage={() => `${t("faq:search.no_result")}`}
                        options={options}
                        classNamePrefix="custom-select"
                        placeholder={t("faq:search.placeholder")}
                    />
                </div>
            </div>
        );
    }

    private handleChange = (
        selectedOption: ValueType<{ value: string; label: string }>
    ) => {
        if (selectedOption) {
            this.props.onSelect(getOptionValue(selectedOption));
        }
    };
}

export default withTranslation()(SearchResourcesSection);
