import { ComponentType } from 'react';
import { RouteProps as ReactRouteProps } from 'react-router-dom';
import Films from './../../pages/films/index';

export interface RouteProps extends ReactRouteProps {
	component: ComponentType;
	private?: boolean;
	routes?: RouteProps[];
}

const options: RouteProps[] = [
	{
		path: '/',
		exact: true,
		component: Films,
	},
	{
		path: '/films',
		exact: true,
		component: Films,
	},
];

export default options;
