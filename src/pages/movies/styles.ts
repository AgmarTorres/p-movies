import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
	padding: 5px;
`;

export const Header = styled.header`
	width: 100%;
	max-width: 1200px;
	margin: 20px auto;
	display: flex;
	justify-content: space-between;
	align-items: center;

	img {
		width: 200px;
	}

	span {
		font-size: ${({ theme }) => theme.sizes.fontSizes.big};
		text-decoration: underline;
	}
`;

export const Form = styled.form`
	display: flex;
	width: 100%;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Grid = styled.div`
	margin-top: 30px;
	display: grid;
	width: 100%;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	align-self: center;
	justify-self: center;
	gap: 5%;
`;
