import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
	padding: 5px;

	display: flex;
	align-items: center;
	flex-direction: column;
`;

export const Form = styled.form`
	display: flex;
	width: 100%;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 50px;
`;

export const Grid = styled.div`
	margin-top: 30px;
	display: grid;
	width: 100%;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	align-self: center;
	justify-self: center;
	gap: 5%;
	@media (max-width: 500px) {
		grid-template-columns: repeat(repeat, 1fr);
	}
`;

export const Button = styled.button`
	margin-top: 20px;
	width: 300px;
	height: 40px;
	background-color: ${({ theme }) => theme.colors.white};
	color: ${({ theme }) => theme.colors.primary};
	font-size: ${({ theme }) => theme.sizes.fontSizes.normal};
	border: 1px solid ${({ theme }) => theme.colors.primary};
	border-radius: 5px;

	&:hover {
		background-color: ${({ theme }) => theme.colors.primary};
		color: ${({ theme }) => theme.colors.white};
	}
`;

export const Films = styled.div``;

export const Title = styled.h3`
	margin: 10px 0;
`;
