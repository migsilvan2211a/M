import React from 'react';
import {Card, Row, Col} from 'react-bootstrap';

export default function ProductCard({dispName, id, description, price, img, soldNum, ratings} ) {
	<Card>
		<Card.Body>
			<Card.Img src={img} />
			<Card.Title>
				<h2>{dispName}</h2>
			</Card.Title>
			<Card.Text>
				{description}
				<div>
					<Col>
						<Row>
							{ratings}
						</Row>
						<Row>
							{soldNum}
						</Row>
					</Col>
					<Col>
						{price}
					</Col>
				</div>
			</Card.Text>
		</Card.Body>
	</Card>
};