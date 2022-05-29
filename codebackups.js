code backups


function DrawCards({products, setProducts, page}) { //products is an array
	let cards = [];
	let cardRow = [];
	let counter = 0;
	const limit = (products.length >= 24) ? 24 : products.length;
	let forEnd = page * limit;
	for (let i = (page - 1) * limit ; i < forEnd ; i += 4 ) { // this is the simplest I can create within the time constraint
		cardRow.push(<ProductsCard {...products[i]} />);
		if (i + 1 < forEnd)
			cardRow.push(<ProductsCard {...products[i+1]} />)
		if (i + 2 < forEnd)
			cardRow.push(<ProductsCard {...products[i+2]} />)
		if (i + 3 < forEnd)
			cardRow.push(<ProductsCard {...products[i+3]} />)
		
		cards.push(<Row>{cardRow}</Row>);
		cardRow = []; // this is needed to clear. if not, then expect repeating rows.
	}
	return (<Row>{cards}</Row>);
}

import {Card, Button, Col} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'

export default function ProductsCard({name, description, price, stock, _id, img}) {
	console.log(img)
	const navi = useNavigate();
	const clickHandle = () => navi(`/products/get/${_id}`)
	let link = (img && img.link) ? img.link : "https://wallpaperaccess.com/full/4966661.jpg"
	return(
		<Card onClick={clickHandle} style={{height: "340px", cursor: "pointer"}} className="p-0 m-2 cardWidth">
			<Card.Img src={link} style={{height: "2400px", objectFit: "cover"}} className=" m-0 p-0 border cardWidth "/>
			<Card.Body className="cardHighlight m-0 p-0 cardWidth" >
				<Card.Title className="  px-2 pt-2 pb-0 mb-0 cardWidth" style={{overflow: "hidden"}}>{name}</Card.Title>
			</Card.Body>
			<Card.Footer className="d-flex justify-content-end">
				<Card.Subtitle>₱{price}</Card.Subtitle>
			</Card.Footer>
		</Card>

	);
}