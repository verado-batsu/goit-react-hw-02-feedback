import uniqid from 'uniqid';

import { FeedbackOptionsList } from 'components/FeedbackOptions/FeedbackOptions.styled';

function FeedbackOptions({ options, onLeaveFeedback }) {
	return (
			<FeedbackOptionsList>
				{options.map(name => {
					return (
							<li key={uniqid()}>
								<button name={name} type='button' onClick={onLeaveFeedback}>{name}</button>
							</li>
						)
					})
				}		
			</FeedbackOptionsList>
	)
}

export { FeedbackOptions };