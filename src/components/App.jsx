import { Component } from 'react';
import uniqid from 'uniqid';
import { Statistics } from 'components/Statistics/Statistics';
export class App extends Component {
	utils = {
		total: 0,
		positivePercentage: 0
	}

	state = {
		good: 0,
		neutral: 0,
		bad: 0
	}

	handleClick = (e) => {
		const targetName = e.target.name;
		this.setState((prevState) => {
			if (targetName === 'good') {
				this.countPositiveFeedbackPercentage(prevState.good + 1);
			} else {
				this.countPositiveFeedbackPercentage(prevState.good);
			}
			return {
				[targetName]: prevState[targetName] + 1,
			}
		});
		this.countTotalFeedback();
		
	}

	countTotalFeedback() {
		this.utils.total += 1;
	}

	countPositiveFeedbackPercentage(good) {
		this.utils.positivePercentage = ((good * 100) / this.utils.total).toFixed(0);
	}

	render() {
		const nameBtn = Object.keys(this.state);
		const statisticsState = Object.entries(this.state);
		const { total, positivePercentage } = this.utils;
		
		return (
			<>
				{/* <Statistics/> */}
				<div>
					<h2>Please leave feedback</h2>
					<ul>
						{nameBtn.map(name => {
								return (
										<li key={uniqid()}>
											<button name={name} type='button' onClick={this.handleClick}>{name}</button>
										</li>
									)
							})
						}
						
					</ul>
				</div>

				<div>
					<h2>Statistics</h2>
					<ul>
						{statisticsState.map(el => {
								return (
										<li key={uniqid()}>
											<p >{el[0]}: {el[1]}</p>
										</li>
									)
							})
						}
						<li key={uniqid()}>
							<p >total: {total}</p>
						</li>
						<li key={uniqid()}>
							<p >Positive feedback: {positivePercentage}%</p>
						</li>
					</ul>
				</div>
			</>
		);
	}
};
