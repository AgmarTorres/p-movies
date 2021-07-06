export interface SimpleMovie {
	title: string;
	episode_id: 4;
	opening_crawl: string;
	director: string;
	producer: string;
	release_date: string;
	created: string;
	edited: string;
	url: string;
}

export interface MovieProps {
	count: number;
	results: Array<SimpleMovie>;
}

export const emptyMovie = (): MovieProps => {
	return { count: 0, results: [] };
};
