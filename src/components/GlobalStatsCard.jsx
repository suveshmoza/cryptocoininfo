import React from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import millify from 'millify';
const GlobalStatsCard = ({ data }) => {
	if (data.length === 0) {
		return (
			<Container className="py-4 d-flex justify-content-center align-items-center">
				<Spinner animation="border" role="status">
					<span className="visually-hidden">Loading...</span>
				</Spinner>
			</Container>
		);
	}
	return (
		<>
			<Container className="py-4">
				<h3>Global Stats</h3>
				<Row xs={1} sm={2} lg={5} className="g-3">
					<Col>
						<Card>
							<Card.Body className="d-flex justify-content-between align-items-center">
								<i
									className="bi bi-coin"
									style={{ fontSize: '2rem', color: '#d4af37' }}
								></i>
								<h6>
									{millify(data.totalCoins)}
									<small> Coins</small>
								</h6>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card>
							<Card.Body className="d-flex justify-content-between align-items-center">
								<i
									className="bi bi-arrow-left-right"
									style={{ fontSize: '2rem', color: '#0018a8' }}
								></i>
								<h6>
									{millify(data.totalExchanges)}
									<small> Exchanges</small>
								</h6>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card>
							<Card.Body className="d-flex justify-content-between align-items-center">
								<i
									className="bi bi-clock"
									style={{ fontSize: '2rem', color: '#FF2D00' }}
								></i>
								<h6>
									{millify(data.total24hVolume)}
									<small> 24H Volume</small>
								</h6>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card>
							<Card.Body className="d-flex justify-content-between align-items-center">
								<i
									className="bi bi-graph-up-arrow"
									style={{ fontSize: '2rem', color: '#39FF14' }}
								></i>
								<h6>
									{millify(data.totalMarketCap)}
									<small> Market Cap</small>
								</h6>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card>
							<Card.Body className="d-flex justify-content-between align-items-center">
								<i
									className="bi bi-bank"
									style={{ fontSize: '2rem', color: '#0018a8' }}
								></i>
								<h6>
									{millify(data.totalMarkets)}
									<small> Markets</small>
								</h6>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default GlobalStatsCard;
