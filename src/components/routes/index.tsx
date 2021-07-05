import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './routes';

function Routes() {
	return (
		<Switch>
			{routes.map((o) => (
				<Route key={o?.path as string} {...o} />
			))}
		</Switch>
	);
}

export default Routes;
