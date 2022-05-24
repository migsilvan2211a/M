import React, { useContext, useState } from 'react'
import {Card, Form, Row, Col, Image, Button} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import SingleProductContext from '../Contexts/SingleProductContext';

export default function SingleProductBig() {
	const {id, product} = useContext(SingleProductContext);
	let style = {
		width: "540px",
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

				<div style={{...style}}>
					<h3 className="ps-0 ms-0 mb-0 pb-0">{product.name}</h3>
					<h5 className=" py-0 my-0 ps-0 ms-0">{product.description}</h5>
					<h5 className="">₱{product.price}</h5>
					<h5 className="">Items left: {product.stock}</h5>
					<h5 className="">Quantity: 
					<Button className="mx-2 py-1 px-2" variant="outline-primary"onClick={qDown}> - </Button> {quantity}
					<Button className="mx-2 py-1 px-2" variant="outline-primary"onClick={qUp}> + </Button>
					</h5>
				</div>
			</div>	
		</div>
	)
}