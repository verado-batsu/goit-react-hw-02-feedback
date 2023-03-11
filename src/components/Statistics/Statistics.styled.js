import styled from "@emotion/styled";

export const Container = styled.div`
	padding: 10px;
`;

export const ButtonWrapper = styled.div`
	margin-bottom: 10px;

	h2 {
		margin-bottom: 5px;
	}
	
	ul {
		display: flex;
		gap: 10px;
	}

	li > button {
		padding: 5px 10px;

		background-color: #fff;
		border: 1px solid #000;
		border-radius: 10px;

		:hover,
		:focus {
			background-color: #000;
			color: #fff;
		}
	}
`;

export const StatisticWrapper = styled.div`
	h2 {
		margin-bottom: 5px;
	}

	ul li {
		margin-bottom: 5px;
	}
`;