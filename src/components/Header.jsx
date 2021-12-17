import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header = () => {
	return (
		<div>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand as={Link} to="/">
						CryptoCoinInfo
					</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link as={Link} to="/">
							Home
						</Nav.Link>
						<Nav.Link as={Link} to="/cryptocurrency">
							Market
						</Nav.Link>
						<Nav.Link as={Link} to="/news">
							News
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;
