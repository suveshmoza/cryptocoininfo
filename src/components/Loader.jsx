import React from 'react';
import { Container, Spinner } from 'react-bootstrap';
const Loader = () => {
	return (
		<div>
			<Container
				className="py-4 d-flex justify-content-center align-items-center"
				style={{ height: '70vh' }}
			>
				<Spinner animation="grow" />
			</Container>
		</div>
	);
};

export default Loader;
