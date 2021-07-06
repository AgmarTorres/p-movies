import { Container, Header, Form, Grid } from './styles';
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

const Movies = () => {
	const [movies, setMovies] = React.useState<MovieProps>(emptyMovie);
	const [search, setSearch] = React.useState('');
	const [isLoading, setIsLoading] = React.useState(false);
	const [error, setError] = React.useState(false);

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

	const handleFilterMovies = (): SimpleMovie[] =>
		search
			? movies.results.filter((movie) =>
					movie.title.toLowerCase().includes(search)
			  )
			: movies.results;

	const renderMovieItem = () => {
		const filterMovies = handleFilterMovies();

		return filterMovies.map((movie) => (
			<MovieItem key={movie.episode_id} movie={movie} />
		));
	};

	return (
		<Container>
			<Header>
				<img src="/pismo-logo.png" alt="" />
				<span> Filmes</span>
			</Header>
			<Form>
				<SearchContext.Provider value={{ setSearch }}>
					<Input />
				</SearchContext.Provider>
				<Grid>{renderMovieItem()}</Grid>
				{isLoading && <Spinner />}
				{error && <span>Aconteceu algum error</span>}
			</Form>
		</Container>
	);
};

export default Movies;
