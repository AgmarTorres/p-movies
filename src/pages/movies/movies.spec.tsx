import {
	render,
	RenderResult,
	fireEvent,
	waitFor,
} from '@testing-library/react';
import { theme } from '../../styles/theme';
import { ThemeProvider } from 'styled-components';
import Movie from '.';

const makeSut = (): RenderResult => {
	const sut = render(
		<ThemeProvider theme={theme}>
			<Movie />
		</ThemeProvider>
	);
	return sut;
};

describe('MoviePage', () => {
	it('should spinner be visible ', () => {
		const sut = makeSut();
		const spinner = sut.getByTestId('spinner');
		expect(spinner).toBeTruthy();
	});

	it('should be called with filter ', async () => {
		const sut = makeSut();
		const faker = 'value';
		const searchInput = sut.getByTestId('input') as HTMLInputElement;

		waitFor(() => {
			fireEvent.change(searchInput, { target: { value: '' } });
			expect(searchInput.value).toBe('');
		});
		waitFor(async () => {
			await fireEvent.change(searchInput, { target: { value: faker } });
			expect(searchInput.value).toBe(faker);
		});
	});
});
