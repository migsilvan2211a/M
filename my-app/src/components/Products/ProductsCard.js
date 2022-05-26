import {Card, Button, Col} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'

export default function ProductsCard({name, description, price, stock, _id, img}) {
	console.log(img)
	const navi = useNavigate();
	const clickHandle = () => navi(`/products/get/${_id}`)
	let link = (img && img.link) ? img.link : "https://wallpaperaccess.com/full/4966661.jpg"
	return(
		<Card onClick={clickHandle} style={{height: "310px", cursor: "pointer", objectFit: "cover"}} className="p-0 m-2 cardWidth">
			<Card.Img src={link} style={{height: "190px"}} className=" m-0 p-0 border cardWidth "/>
			<Card.Body className="cardHighlight m-0 p-0 cardWidth" >
				<Card.Title className="  px-2 pt-2 pb-0 mb-0 cardWidth" style={{overflow: "hidden"}}>{name}</Card.Title>
			</Card.Body>
			<Card.Footer className="d-flex justify-content-end">
				<Card.Subtitle>₱{price}</Card.Subtitle>
			</Card.Footer>
		</Card>

	);
}