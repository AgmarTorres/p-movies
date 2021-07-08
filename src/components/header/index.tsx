import React from 'react';
import { Header } from './styles';

function HeaderComponent() {
	return (
		<Header data-testid="header">
			<img src="/pismo-logo.png" alt="" />
			<span> Filmes</span>
		</Header>
	);
}

export default HeaderComponent;
