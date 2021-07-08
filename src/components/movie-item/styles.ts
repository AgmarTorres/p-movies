import styled from 'styled-components';

export const Container = styled.div`
	width: 250px;
	height: 300px;

	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.white};
	border: 1px solid ${({ theme }) => theme.colors.secondary};
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 20px;
	transition: 1s ease;

	h3 {
		margin-top: 20px;
		font-weight: bold;
		font-size: ${({ theme }) => theme.sizes.fontSizes.normal};
	}

	span {
		margin: 10px 0;
		font-size: ${({ theme }) => theme.sizes.fontSizes.normal};
		color: ${({ theme }) => theme.colors.gray};
	}

	h4 {
		margin-top: 100px;
		font-weight: bold;
		font-size: ${({ theme }) => theme.sizes.fontSizes.normal};
		color: ${({ theme }) => theme.colors.primary};
	}

	p {
		color: ${({ theme }) => theme.colors.primary};
	}

	&:hover {
		cursor: pointer;
		transform: scale(1.1);
		border: 3px solid inherit;
	}

	@media (max-width: 500px) {
		margin: 0 auto;
	}
`;

export const Button = styled.button`
	margin-top: 20px;
	width: 80%;
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
