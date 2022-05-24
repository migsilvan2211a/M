import {Card, Button, Col} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'

export default function ProductsCard({name, description, price, stock, _id}) {
	const navi = useNavigate();
	const clickHandle = () => navi(`/products/get/${_id}`)
	return(
		<Card onClick={clickHandle} style={{height: "260px", width: "200px", cursor: "pointer"}} className="p-0 m-2">
			<Card.Img src="" style={{height: "166px", width: "200px"}} className=" m-0 p-0"/>
			<Card.Body className=" m-0 p-0" sytle={{ width: "200px"}}>
				<Card.Title className="  px-1 pt-1" style={{overflow: "hidden", width: "200px"}}>{name}</Card.Title>
				<Card.Text className=" px-1" sytle={{ width: "200px"}}>{price}</Card.Text>
			</Card.Body>
		</Card>

	);
}