import {Card, Button, Col} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'

export default function ProductsCard({name, description, price, stock, _id, img}) {
	const navi = useNavigate();
	const clickHandle = () => navi(`/products/get/${_id}`)
	let link = (img && img.link) ? img.link : "https://wallpaperaccess.com/full/4966661.jpg"
	return(
		<Card onClick={clickHandle} className="cardProduct">
			<img src={link} className="cardImage "/>
			<Card.Body className="cardBody" >
				<Card.Title className="cardTitle">{name}</Card.Title>
				<Card.Text className="p-0 m-0" style={{fontSize: "14px"}}>₱{price}</Card.Text>
			</Card.Body>
		</Card>

	);
}