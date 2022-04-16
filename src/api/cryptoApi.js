import axios from 'axios';

const headers = {
	'X-RapidAPI-Host': process.env.REACT_APP_CRYPTO_API_HOST,
	'X-RapidAPI-Key': process.env.REACT_APP_CRYPTO_API_KEY,
};

const baseURL = 'https://coinranking1.p.rapidapi.com';

const getGlobalStats = async () => {
	const response = await axios.get(baseURL + '/stats', { headers });
	return response.data;
};

const getCoins = async (count) => {
	const response = await axios.get(baseURL + '/coins', {
		headers,
		params: { limit: count },
	});
	return response.data;
};

const getCoinDetail = async (coinId) => {
	const response = await axios.get(baseURL + `/coin/${coinId}`, {
		headers,
		params: {
			referenceCurrencyUuid: 'yhjMzLPhuIDl',
			timePeriod: '24h',
		},
	});
	console.log(response.data);
	return response.data;
};

const getCoinHistory = async (coinId, timeStamp) => {
	const response = await axios.get(baseURL + `/coin/${coinId}/history`, {
		headers,
		params: {
			referenceCurrencyUuid: 'yhjMzLPhuIDl',
			timePeriod: '24h',
		},
	});
	return response.data;
};

export { getGlobalStats, getCoins, getCoinDetail, getCoinHistory };
