import { render, RenderResult, fireEvent } from '@testing-library/react';
import { theme } from '../../styles/theme';
import { ThemeProvider } from 'styled-components';
import MovieItem from '.';

type SutTypes = {
	sut: RenderResult;
	chooseFilm: (str: string) => void;
};

const empty = {
	title: '',
	episode_id: 1,
	opening_crawl: '',
	director: '',
	producer: '',
	release_date: '',
	created: '',
	edited: '',
	url: '',
};

const makeSut = (): SutTypes => {
	const chooseFilm = jest.fn();
	const sut = render(
		<ThemeProvider theme={theme}>
			<MovieItem movie={empty} chooseFilm={chooseFilm} />
		</ThemeProvider>
	);
	return { sut, chooseFilm };
};

describe('MovieItem', () => {
	it('should render movie item with props', () => {
		const { sut, chooseFilm } = makeSut();
		const movie = sut.getByTestId('movie-item');
		expect(movie.childElementCount).toBe(5);
		const movieButton = sut.getByTestId('movie-item-button');
		fireEvent.click(movieButton);
		expect(chooseFilm).toBeCalledTimes(1);
	});
});
