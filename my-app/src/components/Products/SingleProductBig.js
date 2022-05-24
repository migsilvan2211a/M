import React, { useContext, useState } from 'react'
import {Card, Form, Row, Col, Image, Button} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import SingleProductContext from '../Contexts/SingleProductContext';

export default function SingleProductBig() {
	const {id, product} = useContext(SingleProductContext);
	let style = {
		width: "510px",
		height: "450px"
	}
	let [quantity, setQuantity] = useState(0);
	const qUp = () => {if(quantity < product.stock) setQuantity(++quantity)}
	const qDown = () => {if(quantity > 0) setQuantity(--quantity)}
	console.log(product)
	console.log("hey")
	
	return(
		<div>
			<div className="p-5 d-inline-flex justify-content-center align-items-center container-fluid">
				<div style={{...style}}>
					<Image src="" style={{...style}}/>
				</div>

				<div style={{height: "450px", width: "300px", backgroundColor: "papayawhip"}} className="p-3 pt-5 m-0">
					<Row className='p-3'>
						<h5 className="ps-0 ms-0 mb-0 pb-0">{product.name}</h5>
						<p className=" py-0 my-0 ps-0 ms-0">{product.description}</p>
						<hr className="p-0 m-0 mb-3"/>
						<h5 className="p-0 m-0">₱{product.price}</h5>
						<p className="m-0 p-0">Items left: {product.stock}</p>
						<p className="m-0 p-0 mb-3">Quantity: 
						<Button className="mx-1 py-0 px-1" variant="outline-dark"onClick={qDown}> - </Button> {quantity}
						<Button className="mx-2 py-0 px-1" variant="outline-dark"onClick={qUp}> + </Button>
						</p>
					</Row>
					<Row className='p-3'>
					<Button className="mt-5">Add To Cart</Button>
					</Row>
				</div>
			</div>	
		</div>
	)
}