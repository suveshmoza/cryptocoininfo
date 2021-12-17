import React from 'react';
import { News, GlobalStats, CryptoCurrencies } from '.';

const Homepage = () => {
	return (
		<>
			<GlobalStats />
			<CryptoCurrencies simplified />
			<News />
		</>
	);
};

export default Homepage;
