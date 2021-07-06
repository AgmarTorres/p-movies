import { Container } from './styles';
function Input() {
	return (
		<Container>
			<input
				type="search"
				name="search"
				placeholder="Digite aqui o nome de um filme"
			/>
		</Container>
	);
}

export default Input;
