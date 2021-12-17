import axios from 'axios';

const headers = {
	'x-bingapis-sdk': process.env.REACT_APP_NEWS_API_SDK,
	'x-rapidapi-host': process.env.REACT_APP_NEWS_API_HOST,
	'x-rapidapi-key': process.env.REACT_APP_NEWS_API_KEY,
};

const getNews = async () => {
	const response = await axios.get(
		'https://bing-news-search1.p.rapidapi.com/news/search',
		{
			headers,
			params: {
				q: 'cryptocurrency',
				freshness: 'Day',
				textFormat: 'Raw',
				safeSearch: 'Off',
			},
		}
	);
	return response.data;
};

export { getNews };
