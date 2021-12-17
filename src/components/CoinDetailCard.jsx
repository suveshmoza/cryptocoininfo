import React from 'react';
import millify from 'millify';
import { Row, Col, Card } from 'react-bootstrap';

const CoinDetailCard = ({ data }) => {
	return (
		<>
			<Row xs={1} sm={2} lg={5} className="g-2 py-2">
				<Col>
					<Card style={{ border: 'none' }}>
						<Card.Body>
							<i
								className="bi bi-arrow-up px-1"
								style={{ fontSize: '1.2rem', color: '#FF0000' }}
							></i>
							All Time High ${millify(data.allTimeHigh.price)}
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card style={{ border: 'none' }}>
						<Card.Body>
							<i
								className="bi bi-arrow-left-right px-1"
								style={{ fontSize: '1.2rem', color: '#0018a8' }}
							></i>
							Total Exchanges {millify(data.numberOfExchanges)}
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card style={{ border: 'none' }}>
						<Card.Body>
							<i
								className="bi bi-clock px-1"
								style={{ fontSize: '1.2rem', color: '#000' }}
							></i>
							Volume {millify(data.volume)}
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card style={{ border: 'none' }}>
						<Card.Body>
							<i
								className="bi bi-graph-up-arrow px-1"
								style={{ fontSize: '1.2rem', color: '#39FF14' }}
							></i>
							Market Cap {millify(data.marketCap)}
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card style={{ border: 'none' }}>
						<Card.Body>
							<i
								className="bi bi-currency-dollar px-2"
								style={{ fontSize: '1.2rem', color: '#DAA520' }}
							></i>
							Price ${millify(data.price)}
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default CoinDetailCard;
