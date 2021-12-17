import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Card } from 'react-bootstrap';
const CryptoCurrenciesCard = ({ coins }) => {
	return (
		<>
			{coins.map((coin) => (
				<Col key={coin.id}>
					<Card
						as={Link}
						to={`/coin/${coin.id}`}
						key={coin.id}
						style={{ textDecoration: 'none' }}
					>
						<Card.Body
							key={coin.id}
							className="d-flex justify-content-between align-items-center"
						>
							<img
								height="32"
								width="32"
								src={coin.iconUrl}
								alt={coin.symbol}
							/>
							<div className="d-flex flex-column align-items-center">
								<div className="px-1">
									<h6 style={{ color: 'black' }}>{coin.name}</h6>
								</div>
								<div
									className="px-1 align-self-end"
									style={{
										color: coin.change > 0 ? 'green' : 'red',
									}}
								>
									<small>
										<i
											className={
												coin.change > 0
													? 'bi bi-caret-up-fill'
													: 'bi bi-caret-down-fill'
											}
										>
											{' '}
										</i>
										{coin.change}
									</small>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
			))}
		</>
	);
};

export default CryptoCurrenciesCard;
