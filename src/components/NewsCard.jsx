import React from 'react';
import { Card, Row, Container } from 'react-bootstrap';
const NewsCard = () => {
	return (
		<Container className="py-1">
			<h3>Top News</h3>
			<Row xs={1} sm={2} lg={5} className="g-2 py-2">
				<Card style={{ width: '18rem' }}>
					<Card.Img
						variant="top"
						src="https://media.istockphoto.com/photos/bitcoin-cryptocurrency-trends-graphs-and-charts-picture-id1294303237?b=1&k=20&m=1294303237&s=170667a&w=0&h=ZzclIt2D8SsY-E0uFzhu-qyfNYmK_YWl1Zc1x-PR9K0="
					/>
					<Card.Body>
						<Card.Title style={{ fontSize: '1.1rem' }}>
							{
								'Full ban or limited nod? India confronts a cryptocurrency Catch-22'
							}
						</Card.Title>
					</Card.Body>
				</Card>
			</Row>
		</Container>
	);
};

export default NewsCard;
