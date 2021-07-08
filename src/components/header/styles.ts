import styled from 'styled-components';

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
