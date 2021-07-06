import { Container, Header, Form, Grid } from './styles';
import Input from '../../components/input';
import MovieItem from '../../components/movie-item';

const Movies = () => {
	return (
		<Container>
			<Header>
				<img src="/pismo-logo.png" alt="" />
				<span> Filmes</span>
			</Header>
			<Form>
				<Input />
				<Grid>
					<MovieItem />
				</Grid>
			</Form>
		</Container>
	);
};

export default Movies;
