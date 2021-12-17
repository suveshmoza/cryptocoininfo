import React, { useState, useEffect } from 'react';
import LineChart from './LineChart';
import HTMLReactParser from 'html-react-parser';
import { getCoinDetail, getCoinHistory } from '../api/cryptoApi.js';
import { useParams } from 'react-router-dom';
import { Container, Spinner, Card, FloatingLabel, Form } from 'react-bootstrap';
import CoinDetailCard from './CoinDetailCard';

const CoinDetail = () => {
	const { coinId } = useParams();
	const [timePeriod, setTimePeriod] = useState('24h');
	const [data, setData] = useState([]);
	const [lineData, setLineData] = useState([]);
	useEffect(() => {
		const fetchDetails = async (coinId) => {
			const response = await getCoinDetail(coinId);
			setData(response.data.coin);
		};
		fetchDetails(coinId);
	}, [coinId]);

	useEffect(() => {
		const fetchChartData = async (coinId, timePeriod) => {
			const chartData = await getCoinHistory(coinId, timePeriod);
			setLineData(chartData);
		};
		fetchChartData(coinId, timePeriod);
	}, [timePeriod, coinId]);

	if (data.length === 0) {
		return (
			<Container
				className="py-4 d-flex justify-content-center align-items-center"
				style={{ height: '70vh' }}
			>
				<Spinner animation="grow" />
			</Container>
		);
	}

	return (
		<Container className="py-2 my-4">
			<Card className="mb-2" style={{ border: 'none' }}>
				<Card.Body className="d-flex justify-content-center align-items-center">
					<img src={data.iconUrl} alt={data.id} width={40} />
					<h3 className="px-2 ">
						{data.name}({data.symbol})
					</h3>
				</Card.Body>
			</Card>
			<div>{HTMLReactParser(data.description)}</div>
			<h3>Stats</h3>
			<CoinDetailCard data={data} />

			<FloatingLabel
				style={{ margin: 'auto', width: '18rem' }}
				controlId="floatingSelect"
				label="Select Duration"
			>
				<Form.Select
					aria-label="duration"
					onClick={(e) => {
						setTimePeriod(e.target.value);
					}}
				>
					{['24h', '7d', '30d', '1y', '5y'].map((timeStamp) => (
						<option value={timeStamp}>{timeStamp.toUpperCase()}</option>
					))}
				</Form.Select>
			</FloatingLabel>
			<LineChart coinHistory={lineData} />
		</Container>
	);
};

export default CoinDetail;
