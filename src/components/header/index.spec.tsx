import { render, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from './../../styles/theme';
import Header from '.';
const makeSut = (): RenderResult => {
	const sut = render(
		<ThemeProvider theme={theme}>
			<Header />
		</ThemeProvider>
	);
	return sut;
};

describe('HeaderComponent', () => {
	it('should render Header', () => {
		const { getByTestId } = makeSut();
		const header = getByTestId('header');
		expect(header.childElementCount).toBe(2);
	});
});
