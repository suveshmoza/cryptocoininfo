import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Loader from './Loader.jsx';
import { getNews } from '../api/newsApi.js';

const News = () => {
	let idx = 0;
	const [newsData, setNewsData] = useState([]);
	useEffect(() => {
		const fetchNews = async () => {
			const response = await getNews();
			setNewsData(response);
		};
		fetchNews();
	}, []);

	if (!Object.keys(newsData).length) {
		return <Loader />;
	}

	return (
		<>
			<Container className="py-1">
				<h3>Top News</h3>
				<Row xs={1} sm={2} lg={5} className="g-2 py-3">
					{newsData.value.map((v) => (
						<Col key={idx++} className="d-flex align-items-stretch">
							<Card>
								<Card.Body style={{ fontSize: '0.9rem' }}>
									<a
										rel="noreferrer"
										href={v.url}
										target="_blank"
										style={{ color: 'black', textDecoration: 'none' }}
									>
										{v.name}
									</a>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
		</>
	);
};

export default News;
