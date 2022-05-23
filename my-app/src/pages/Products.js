import React, {useState} from 'react';
import {Card, Row, Col} from 'react-bootstrap';
import ProductsCard from '../components//Products/ProductsCard';

export default function Products() {
	
	const [products, setProducts] = useState([]);
	const [notFound, setNotFound] = useState(true);
	const [page, setPage] = useState(1);
	
	fetch(`https://infinite-sea-39312.herokuapp.com/products/findAll`).then(res => res.json()).then(data => {
		if(data.message)
			setNotFound(true);
		else
			setProducts(data);
	})

	function drawCards() {
		for (let i = (page - 1)*10; i < page * 10 ; i++ ) {
			<ProductsCard {...products[i]} />
		}
	}




	return(
	<div className="row p-0 m-0 vh-100">
		<div className="col-md-2 border border-black fitHeight m-0">

		</div>
		<div className="col-md-10 d-flex border border-black fitHeight m-0">
			
		</div>
	</div>
	);
}
