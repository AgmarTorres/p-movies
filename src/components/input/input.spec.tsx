import Input from '.';
import { render, RenderResult, fireEvent } from '@testing-library/react';
import { theme } from '../../styles/theme';
import { ThemeProvider } from 'styled-components';

const makeSut = (): RenderResult => {
	const sut = render(
		<ThemeProvider theme={theme}>
			<Input />
		</ThemeProvider>
	);
	return sut;
};

describe('SearchInput', () => {
	it('should start with empty value', () => {
		const sut = makeSut();
		const searchInput = sut.getByTestId('input');
		fireEvent.input(searchInput, { target: { value: '' } });
	});
});
