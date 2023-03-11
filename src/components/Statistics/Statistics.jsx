import { Component } from "react";
import { Container, ButtonWrapper, StatisticWrapper } from 'components/Statistics/Statistics.styled';

class Statistics extends Component{
	static propTypes = {};
	// static defaultProps = {
	// 	...this.props
	// };

	handleClick = (e) => {
		const targetName = e.target.name;
		this.setState((prevState) => {
			return {
				[targetName]: prevState[targetName] + 1,
			}
		});
		this.countTotalFeedback();
		this.countPositiveFeedbackPercentage();
	}

	countTotalFeedback() {
		this.setState((prevState) => {
			return {
				total: prevState.total + 1,
			}
		});
	}

	countPositiveFeedbackPercentage() {
		this.setState((prevState) => {
			return {
				positivePercentage: ((prevState.good * 100) / prevState.total).toFixed(0),
			}
		})
	}

	render() {
		console.log(this.props);
		return (
			<Container>
				{/* <ButtonWrapper>
					<h2>Please leave feedback</h2>
					<ul>
						<li>
							<button name="good" type="button" onClick={this.handleClick}>Good</button>
						</li>
						<li>
							<button name="neutral" type="button" onClick={this.handleClick}>Neutral</button>
						</li>
						<li>
							<button name="bad" type="button" onClick={this.handleClick}>Bad</button>
						</li>
					</ul>
				</ButtonWrapper>

				<StatisticWrapper>
					<h2>Statistics</h2>
					<ul>
						<li>
							<p>Good: {this.state.good}</p>
						</li>
						<li>
							<p>Neutral: {this.state.neutral}</p>
						</li>
						<li>
							<p>Bad: {this.state.bad}</p>
						</li>
						<li>
							<p>Total: {this.state.total}</p>
						</li>
						<li>
							<p>Positive feedback: {this.state.positivePercentage}%</p>
						</li>
					</ul>
				</StatisticWrapper> */}
			</Container>
			
		);
	}
}

export { Statistics };