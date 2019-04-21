import axios from "axios";
import * as React from "react";
import CategoriesSection from "../CategoriesSection";
import QuickAnswersSection from "../QuickAnswersSection";
import SearchResourcesSection from "../SearchResourcesSection";

export interface RawFaqData {
    id: string;
    categoryId: string;
    categoryName_ko: string;
    categoryName_en: string;
    question_ko: string;
    question_en: string;
    answer_ko: string;
    answer_en: string;
}

const FAQ_LIST_FILE_PATH = "/faq.json";

interface State {
    faqData?: RawFaqData[];
}
class FAQ extends React.Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = { faqData: undefined };
    }
    public async componentDidMount() {
        window.scrollTo(0, 0);
        try {
            const faqData = await this.loadFaq();
            this.setState({
                faqData
            });
        } catch (e) {
            console.error(e);
        }
    }

    public render() {
        const { faqData } = this.state;
        return (
            <div>
                <SearchResourcesSection
                    data={faqData}
                    onSelect={this.handleSelectQuestion}
                />
                <CategoriesSection
                    data={faqData}
                    onSelect={this.handleSelectCategory}
                />
                <QuickAnswersSection data={faqData} />
            </div>
        );
    }
    private handleSelectQuestion = (id: string) => {
        const dom = document.getElementById(`question-${id}`);
        if (dom) {
            const elementPosision = dom.offsetTop - 76;
            window.scroll({ behavior: "smooth", top: elementPosision });
        }
    };
    private handleSelectCategory = (id: string) => {
        const dom = document.getElementById(`category-${id}`);
        if (dom) {
            const elementPosision = dom.offsetTop - 76;
            window.scroll({ behavior: "smooth", top: elementPosision });
        }
    };
    private loadFaq = (): Promise<RawFaqData[]> => {
        return new Promise((resolve, reject) => {
            axios
                .get<RawFaqData[]>(FAQ_LIST_FILE_PATH)
                .then(result => {
                    resolve(result.data);
                })
                .catch(reject);
        });
    };
}

export default FAQ;
