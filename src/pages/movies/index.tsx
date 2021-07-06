import { Container, Header, Form, Grid } from './styles';
import Input from '../../components/input';
import MovieItem from '../../components/movie-item';
import { emptyMovie, MovieProps } from './../../domain/movies/index';
import api from '../../services/api';
import React from 'react';

const Movies = () => {
	const [movies, setMovies] = React.useState<MovieProps>(emptyMovie);

	React.useEffect(() => {
		api
			.get<MovieProps>('/films')
			.then(({ data }) => {
				setMovies(data);
			})
			.catch(() => console.log('Houve um erro'));
	}, []);

	const renderMovieItem = () => {
		return movies.results.map((movie) => (
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
				<Input />
				<Grid>{renderMovieItem()}</Grid>
			</Form>
		</Container>
	);
};

export default Movies;
