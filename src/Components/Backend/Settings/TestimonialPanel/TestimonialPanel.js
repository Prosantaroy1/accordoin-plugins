import { TextareaControl, TextControl } from '@wordpress/components';
import { updateData } from '../../../../../../bpl-tools/utils/functions';

const TestimonialPanel = ({ attributes, setAttributes, index }) => {
    const { dataFaq = [] } = attributes || {};
    const { question, answer } = dataFaq[index];

    return (
        <div>
            <TextControl
                label='Testimonial Question'
                value={question}
                onChange={(v) => setAttributes({
                    dataFaq: updateData(dataFaq, v, index, 'question')
                })}
                __nextHasNoMarginBottom={true}
            />
            <TextareaControl
                label='Testimonial Answer'
                value={answer}
                onChange={(v) => setAttributes({
                    dataFaq: updateData(dataFaq, v, index, 'answer')
                })}
                __nextHasNoMarginBottom={true}
            />
        </div>
    );
};

export default TestimonialPanel;