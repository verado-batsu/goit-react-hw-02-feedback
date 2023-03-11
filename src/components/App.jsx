import { Component } from 'react';
import { Statistics } from 'components/Statistics/Statistics'

export class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0,
		total: 0,
		positivePercentage: 0,
	}

	getStatistics(data) {
		this.setState({
			...data
		})
	}

	render() {
		return (
			<>
				<Statistics
					good={this.state.good}
					neutral={this.state.neutral}
					bad={this.state.bad}
					total={this.state.total}
					positivePercentage={this.state.positivePercentage}
					getStatistics={this.getStatistics}
				/>
			</>
		);
	}
};
