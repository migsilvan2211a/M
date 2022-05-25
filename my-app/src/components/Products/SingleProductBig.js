import React, { useContext, useState } from 'react'
import {Card, Form, Row, Col, Image, Button} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import SingleProductContext from '../Contexts/SingleProductContext';
import serverMessage from '../Commons/serverMessage'
import { useNavigate } from 'react-router-dom'
import invalidCredentials from '../Commons/invalidCredentials'


export default function SingleProductBig() {
	const navi = useNavigate();
	const {id, product} = useContext(SingleProductContext);
	const link = (product.img && product.img.link) ? product.img.link : "https://www.navigation.com/static/WFS/Shop-CitroenEMEA-Site/-/Shop-CitroenEMEA/en_GB/Product%20Not%20Found.png"
	const qUp = () => {if(quantity < product.stock) setQuantity(++quantity)}
	const qDown = () => {if(quantity > 0) setQuantity(--quantity)}
	const cartHandle = () => addToCart(id, quantity);
	let [quantity, setQuantity] = useState(0);
	let style = {
		width: "510px",
		height: "450px",
		objectFit: "cover"
	}	

	function addToCart(id, quantity) { //prodId, orderNum
		fetch(`https://infinite-sea-39312.herokuapp.com/orders/updateCart`, {
			method: "PUT",
			headers: {
				authorization: `Bearer ${localStorage.getItem("token")}`,
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				productId: id,
				orderNum: quantity
			})
		}).then(res => res.json()).then(data => { 
			if (data.error == "Invalid Credentials")
				return invalidCredentials();
			serverMessage(data, "cart")
			navi('/products'); 

		});
	}


	return(
		<div>
			<div className="p-5 d-inline-flex justify-content-center align-items-center container-fluid">
				<div style={{...style}}>
					<Image src={link} style={{...style}} className="border border-black"/>
				</div>

				<div style={{height: "450px", width: "300px", backgroundColor: "papayawhip"}} className="p-3 pt-5 m-0">
					<Row className='p-3'>
						<h5 className="ps-0 ms-0 mb-0 pb-0">{product.name}</h5>
						<p className=" py-0 my-0 ps-0 ms-0">{product.description}</p>
						<hr className="p-0 m-0 mb-3"/>
						<h5 className="p-0 m-0">₱{product.price}</h5>
						<p className="m-0 p-0">Items left: {product.stock}</p>
						<p className="m-0 p-0 mb-3">Qty: {quantity}  
						<Button className="mx-1 py-0 px-1" variant="outline-dark"onClick={qDown}> - </Button> 
						<Button className="mx-0 py-0 px-1" variant="outline-dark"onClick={qUp}> + </Button>
						</p>
					</Row>
					<Row className='p-3'>
					<Button onClick={cartHandle} className="mt-5">Add To Cart</Button>
					</Row>
				</div>
			</div>	
		</div>
	)
}