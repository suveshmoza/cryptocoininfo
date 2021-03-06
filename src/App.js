import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header, Homepage, CryptoCurrencies, CoinDetail } from './components';

const App = () => {
	return (
		<div>
			<Header />
			<Routes>
				<Route exact path="/" element={<Homepage />} />
				<Route
					path="/cryptocurrency"
					element={<CryptoCurrencies simplified={false} />}
				/>
				<Route path="/coin/:coinId" element={<CoinDetail />} />
			</Routes>
		</div>
	);
};

export default App;
