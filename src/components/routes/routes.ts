import { ComponentType } from 'react';
import { RouteProps as ReactRouteProps } from 'react-router-dom';
import Movies from '../../pages/movies/index';

export interface RouteProps extends ReactRouteProps {
	component: ComponentType;
	private?: boolean;
	routes?: RouteProps[];
}

const options: RouteProps[] = [
	{
		path: '/',
		exact: true,
		component: Movies,
	},
	{
		path: '/movies',
		exact: true,
		component: Movies,
	},
];

export default options;
