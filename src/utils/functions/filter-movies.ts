import { SimpleMovie } from '../../domain/movies';

export interface FilterMoviesProps {
	search: string;
	movies: SimpleMovie[];
}
export const handleFilterMovies = ({
	search,
	movies,
}: FilterMoviesProps): SimpleMovie[] =>
	movies.filter((movie: SimpleMovie) =>
		movie.title.toLowerCase().includes(search)
	);
