import React from 'react';
import { GlobalStats, CryptoCurrencies } from '.';

const Homepage = () => {
	return (
		<>
			<GlobalStats />
			<CryptoCurrencies simplified />
		</>
	);
};

export default Homepage;
