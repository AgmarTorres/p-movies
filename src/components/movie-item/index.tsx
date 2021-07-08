import { Container, Button } from './styles';
import { SimpleMovie } from '../../domain/movies';

type Props = {
	movie: SimpleMovie;
	chooseFilm: (title: string) => void;
};

const MovieItem = ({ movie, chooseFilm }: Props) => {
	const { title, episode_id, created } = movie;
	return (
		<Container data-testid="movie-item">
			<h3> {title}</h3>
			<span>Epsódio {episode_id}</span>
			<h4>Lançado:</h4>
			<p>{new Date(created).toLocaleDateString('pt-br')}</p>
			<Button
				type="button"
				data-testid="movie-item-button"
				onClick={() => chooseFilm(title)}
			>
				Selecionar
			</Button>
		</Container>
	);
};

export default MovieItem;
