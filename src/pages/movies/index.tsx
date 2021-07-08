import { Container, Form, Grid } from './styles';
import SearchContext from '../../context/search';
import Input from '../../components/input';
import MovieItem from '../../components/movie-item';
import {
	emptyMovie,
	MovieProps,
	SimpleMovie,
} from './../../domain/movies/index';
import api from '../../services/api';
import React from 'react';
import { Spinner } from './../../components/spinner/index';
import Header from './../../components/header/index';
import { handleFilterMovies } from '../../utils/functions/filter-movies';

const Movies = () => {
	const [movies, setMovies] = React.useState<MovieProps>(emptyMovie);
	const [search, setSearch] = React.useState('');
	const [isLoading, setIsLoading] = React.useState(false);
	const [error, setError] = React.useState(false);
	const handleChooseFile = React.useCallback(
		(title: string) => alert(`'${title}' selecionado`),
		[]
	);
	React.useEffect(() => {
		setIsLoading(true);
		setError(false);
		api
			.get<MovieProps>('/films')
			.then(({ data }) => {
				setMovies(data);
			})
			.catch(() => setError(true))
			.finally(() => setIsLoading(false));
	}, []);

	const renderMovieItem = () => {
		const filterMovies = search
			? handleFilterMovies({ search, movies: movies.results })
			: movies.results;

		return filterMovies.map((movie) => (
			<MovieItem
				key={movie.episode_id}
				movie={movie}
				chooseFilm={handleChooseFile}
			/>
		));
	};

	return (
		<Container>
			<Header />
			<Form>
				<SearchContext.Provider value={{ setSearch }}>
					<Input />
				</SearchContext.Provider>
				<Grid data-testid="grid">{renderMovieItem()}</Grid>
				{isLoading && <Spinner />}
				{error && <span data-testid="error">Aconteceu algum error</span>}
			</Form>
		</Container>
	);
};

export default Movies;
