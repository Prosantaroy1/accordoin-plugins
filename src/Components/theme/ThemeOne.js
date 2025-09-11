import { useState } from "react";

const ThemeOne = ({ attributes }) => {
    const { dataFaq = [] } = attributes || {};

    const [openIndex, setOpenIndex] = useState(0);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faq_card_warper themeOne">
            {dataFaq.map((faq, index) => (
                <div key={faq.id || index} className={`faq_item ${openIndex === index ? "open" : ""}`}>
                    <div className="faq_deco"></div>

                    {/* Question */}
                    <h3
                        className={`faq_question ${openIndex === index ? "active" : ""}`}
                        onClick={() => toggleFaq(index)}
                    >
                        <span className="faq_square"></span>
                        <span className="faq_text">{faq.question}</span>
                        <span className="icon">{openIndex === index ? "−" : "+"}</span>
                    </h3>

                    {/* Answer */}
                    <div
                        className="faq_answer_wrapper"
                        style={{
                            maxHeight: openIndex === index ? "200px" : "0px",
                        }}
                    >
                        <p className="faq_answer">{faq.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ThemeOne;
