import { createRoot } from 'react-dom/client';
import './style.scss';
import Style from './Components/Common/Style';
import { Theme } from './Components/theme/Theme';

document.addEventListener('DOMContentLoaded', () => {
	const blockNameEls = document.querySelectorAll('.wp-block-b-blocks-pratics-purpuse');
	blockNameEls.forEach(blockNameEl => {
		const attributes = JSON.parse(blockNameEl.dataset.attributes);

		createRoot(blockNameEl).render(<>
			<Style attributes={attributes} id={blockNameEl.id} />

			<div className='faq_question_main_wp_div'>
				<Theme {...{ attributes }} />
			</div>
		</>);

		blockNameEl?.removeAttribute('data-attributes');
	});
});