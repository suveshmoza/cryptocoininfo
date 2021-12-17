import axios from 'axios';

const headers = {
	'x-rapidapi-host': process.env.REACT_APP_CRYPTO_API_HOST,
	'x-rapidapi-key': process.env.REACT_APP_CRYPTO_API_KEY,
};

const getGlobalStats = async () => {
	const response = await axios.get(
		'https://coinranking1.p.rapidapi.com/stats',
		{
			headers,
		}
	);
	return response.data;
};

const getCoins = async (count, coinName) => {
	const response = await axios.get(
		'https://coinranking1.p.rapidapi.com/coins',
		{
			headers,
			params: {
				limit: count,
				search: coinName,
			},
		}
	);
	return response.data;
};

const getCoinDetail = async (coinId) => {
	const response = await axios.get(
		`https://coinranking1.p.rapidapi.com/coin/${coinId}`,
		{ headers }
	);
	return response.data;
};

const getCoinHistory = async (coinId, timeStamp) => {
	const response = await axios.get(
		`https://coinranking1.p.rapidapi.com/coin/${coinId}/history/${timeStamp}`,
		{ headers }
	);
	return response.data;
};

export { getGlobalStats, getCoins, getCoinDetail, getCoinHistory };
