import {Card, Button, Col} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'

export default function ProductsCard({name, description, price, stock, _id, img}) {
	console.log(img)
	const navi = useNavigate();
	const clickHandle = () => navi(`/products/get/${_id}`)
	let link = (img && img.link) ? img.link : "https://www.navigation.com/static/WFS/Shop-CitroenEMEA-Site/-/Shop-CitroenEMEA/en_GB/Product%20Not%20Found.png"
	return(
		<Card onClick={clickHandle} style={{height: "310px", width: "200px", cursor: "pointer"}} className="p-0 m-2">
			<Card.Img src={link} style={{height: "190px", width: "200px"}} className=" m-0 p-0 border "/>
			<Card.Body className="prodCard m-0 p-0" sytle={{ width: "200px"}}>
				<Card.Title className="  px-2 pt-2 pb-0 mb-0" style={{overflow: "hidden", width: "200px"}}>{name}</Card.Title>
			</Card.Body>
			<Card.Footer className="d-flex justify-content-end">
				<Card.Subtitle>₱{price}</Card.Subtitle>
			</Card.Footer>
		</Card>

	);
}