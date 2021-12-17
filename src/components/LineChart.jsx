import React from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';

// when timestamp hours use this
// console.log(event.toLocaleTimeString([],{hour: '2-digit', minute: '2-digit',hour12:true}));

const LineChart = ({ coinHistory }) => {
	const coinPrice = [];
	const coinTimestamp = [];

	for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
		coinPrice.push(coinHistory?.data?.history[i].price);
	}
	for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
		coinTimestamp.push(
			new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString()
		);
	}

	const data = {
		labels: coinTimestamp,
		datasets: [
			{
				label: 'Price In USD',
				data: coinPrice,
				fill: false,
				backgroundColor: '#00C853',
				borderColor: '#00C853',
			},
		],
	};

	const options = {
		scales: {
			yAxes: [
				{
					type: 'linear',
					position: 'left',
					display: true,
					beginAtZero: true,
				},
			],
		},
	};

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
		<>
			<Line data={data} options={options} />
		</>
	);
};

export default LineChart;
