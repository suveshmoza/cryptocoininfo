import React from 'react';
import { Link } from 'react-router-dom';
import millify from 'millify';
import { Table } from 'react-bootstrap';

const CryptoCurrenciesCard = ({ coins }) => {
	return (
		<Table hover className="crypto-table">
			<thead>
				<tr>
					<th>#</th>
					<th>CRYPTOCURRENCY</th>
					<th>PRICE</th>
					<th>MARKET CAP</th>
					<th>24H</th>
				</tr>
			</thead>
			<tbody>
				{coins.map((coin) => (
					<tr key={coin.uuid}>
						<td>{coin.rank}</td>
						<td>
							<div className="d-flex align-items-start">
								<img
									height="32"
									width="32"
									src={coin.iconUrl}
									alt={coin.symbol}
								/>
								<Link
									to={`/coin/${coin.uuid}`}
									style={{ textDecoration: 'none', color: 'black' }}
								>
									<div className="d-flex flex-column mx-1 my-0">
										<h5>{coin.name}</h5>
										<small className="my-0">{coin.symbol}</small>
									</div>
								</Link>
							</div>
						</td>
						<td>${millify(coin.price)}</td>
						<td>${millify(coin.marketCap)}</td>
						<td
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
						</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
};

export default CryptoCurrenciesCard;
