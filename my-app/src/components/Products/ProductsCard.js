import {Card, Button, Col} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'

export default function ProductsCard({name, description, price, stock, _id, img}) {
	console.log(img)
	const navi = useNavigate();
	const clickHandle = () => navi(`/products/get/${_id}`)
	let link = (img && img.link) ? img.link : "https://wallpaperaccess.com/full/4966661.jpg"
	return(
		<Card onClick={clickHandle} className="p-0 m-1 m-lg-2 cardProduct">
			<Card.Img src={link} className=" m-0 p-0 border cardImage "/>
			<Card.Body className="cardHighlight m-0 p-0" >
				<Card.Title className="  px-2 pt-2 pb-0 mb-0 cardTitle">{name}</Card.Title>
			</Card.Body>
			<Card.Footer className="d-flex justify-content-end">
				<Card.Subtitle>₱{price}</Card.Subtitle>
			</Card.Footer>
		</Card>

	);
}