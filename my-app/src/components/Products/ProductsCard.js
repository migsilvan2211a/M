import {Card, Button, Col} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'

export default function ProductsCard({name, description, price, stock, _id}) {
	const navi = useNavigate();
	const clickHandle = () => navi(`/products/get/${_id}`)
	return(
		<Card onClick={clickHandle} style={{height: "310px", width: "200px", cursor: "pointer"}} className="p-0 m-2">
			<Card.Img src="" style={{height: "190px", width: "200px"}} className=" m-0 p-0"/>
			<Card.Body className="prodCard m-0 p-0" sytle={{ width: "200px"}}>
				<Card.Title className="  px-2 pt-2 pb-0 mb-0" style={{overflow: "hidden", width: "200px"}}>{name}</Card.Title>
			</Card.Body>
			<Card.Footer className="d-flex justify-content-end">
				<Card.Subtitle>₱{price}</Card.Subtitle>
			</Card.Footer>
		</Card>

	);
}