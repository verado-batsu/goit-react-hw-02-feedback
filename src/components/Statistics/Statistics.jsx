import uniqid from 'uniqid';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function Statistics({ statisticsState, total, positivePercentage }) {
	return (
			<ul>
				{statisticsState.map(el => {
						return (
							<li key={uniqid()}>
								<p >{capitalizeFirstLetter(el[0])}: {el[1]}</p>
							</li>
						)
					})
				}
				<li key={uniqid()}>
					<p >Total: {total}</p>
				</li>
				<li key={uniqid()}>
					<p >Positive feedback: {positivePercentage}%</p>
				</li>
			</ul>
	)
}

export { Statistics };