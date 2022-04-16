import React, { useState, useEffect } from 'react';
import CryptoCurrenciesCard from './CryptoCurrenciesCard';
import { Container, Form, Row } from 'react-bootstrap';
import { getCoins } from '../api/cryptoApi';
import Loader from './Loader';

const CryptoCurrencies = ({ simplified }) => {
	const count = simplified ? 10 : 100;
	const [searchTerm, setSearchTerm] = useState('');
	const [coins, setCoins] = useState([]);
	useEffect(() => {
		const fetchStats = async (count, searchTerm) => {
			const { data } = await getCoins(count, searchTerm);
			const filteredData = !searchTerm.length
				? data.coins
				: data.coins.filter((coin) =>
						coin.name.toLowerCase().includes(searchTerm.toLowerCase())
				  );
			setCoins(filteredData);
		};
		fetchStats(count, searchTerm);
	}, [count, searchTerm]);

	if (coins.length === 0 && !simplified) {
		return <Loader />;
	}
	return (
		<>
			<Container className="my-2">
				{simplified && (
					<h3>
						<strong>Top Cryptocurrencies</strong>
					</h3>
				)}
				{!simplified && (
					<Form>
						<Form.Control
							type="text"
							placeholder="Search a particular coin"
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
					</Form>
				)}
				<Row xs={2} sm={3} lg={5} className="g-2 py-2">
					<CryptoCurrenciesCard coins={coins} />
				</Row>
			</Container>
		</>
	);
};

export default CryptoCurrencies;
