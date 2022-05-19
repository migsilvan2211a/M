import React from 'react';
import {Row, Col} from 'react-bootstrap';

export default Banner = () => {
	return(
		<Row className="mx-3 my-3">
			<Col>
				<h1>Batch 165 Zuitt Bootcamp</h1>
				<p>Opportunities for everyone, everywhere</p>
				<Button variant="primary">Enroll Now!</Button>
			</Col>
		</Row>
	);
}