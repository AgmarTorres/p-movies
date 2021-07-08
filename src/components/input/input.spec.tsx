import Input from '.';
import { render, RenderResult, fireEvent } from '@testing-library/react';
import SearchContext from '../../context/search';
import { theme } from '../../styles/theme';
import { ThemeProvider } from 'styled-components';

const makeSut = (): RenderResult => {
	const setSearch = jest.fn();
	const sut = render(
		<ThemeProvider theme={theme}>
			<SearchContext.Provider value={{ setSearch }}>
				<Input />
			</SearchContext.Provider>
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

	it('should return the same value', () => {
		const sut = makeSut();
		const faker = 'value';
		const searchInput = sut.getByTestId('input') as HTMLInputElement;
		fireEvent.change(searchInput, { target: { value: faker } });
		expect(searchInput.value).toBe(faker);
	});
});
