export interface SimpleMovie {
	title: string;
	episode_id: number;
	opening_crawl: string;
	director: string;
	producer: string;
	release_date: string;
	created: string;
	edited: string;
	url: string;
	characters: Array<string>;
}

export interface MovieProps {
	count: number;
	results: Array<SimpleMovie>;
}

export const emptyMovie = (): MovieProps => {
	const results: SimpleMovie[] = [];
	return { count: 0, results };
};
