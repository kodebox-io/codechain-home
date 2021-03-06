import * as _ from "lodash";
import * as React from "react";
import { Trans, withTranslation, WithTranslation } from "react-i18next";
import { RawFaqData } from "../FAQ";
import "./index.scss";

interface OwnProps {
    data?: RawFaqData[];
    onSelect: (categoryId: string) => void;
}

type Props = WithTranslation & OwnProps;
class CategoriesSection extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }
    public render() {
        const { data } = this.props;
        const categories = data && this.getCategories(data);
        return (
            <div className="Categories">
                {categories ? (
                    categories.map((c, index) => (
                        <div
                            key={index}
                            // tslint:disable-next-line:jsx-no-lambda
                            onClick={() => {
                                this.props.onSelect(c.id);
                            }}
                        >
                            <div className="category-item">
                                <span>{c.label}</span>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center">
                        <div className="loader reverse" />
                    </div>
                )}
            </div>
        );
    }
    private getCategories = (data: RawFaqData[]) => {
        const { i18n } = this.props;
        const groupData = _.groupBy(data, d => d.categoryId);
        return Object.keys(groupData).map(d => ({
            id: d,
            label:
                i18n.language === "ko"
                    ? groupData[d][0].categoryName_ko
                    : groupData[d][0].categoryName_en
        }));
    };
}

export default withTranslation()(CategoriesSection);
