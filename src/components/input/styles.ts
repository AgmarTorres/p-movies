import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;

	input {
		width: 100%;
		height: 40px;
		padding: 3px;
		border: 1px solid ${({ theme }) => theme.colors.gray};
		border-radius: 5px;
		::placeholder {
		}
	}
`;
