import React from 'react';
import { Container } from './styles';
import SearchContext from '../../context/search';
function Input() {
	const context = React.useContext(SearchContext);
	const { setSearch } = context;
	return (
		<Container>
			<input
				type="search"
				name="search"
				data-testid="input"
				placeholder="Digite aqui o nome de um filme"
				onChange={(e) => setSearch(e.target.value)}
			/>
		</Container>
	);
}

export default Input;
