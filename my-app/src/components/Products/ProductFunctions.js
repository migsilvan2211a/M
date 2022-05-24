import ProductsCard from './ProductsCard'
import {Row} from 'react-bootstrap';
function getData(setProducts) {
	fetch(`https://infinite-sea-39312.herokuapp.com/products/getAllActive`).then(res => res.json()).then(data => setProducts(data))
}

function DrawCards({products, setProducts, page}) { //products is an array
	let cards = [];
	let counter = 0;
	const limit = (products.length >= 24) ? 24 : products.length;
	for (let i = (page - 1) * limit ; i < page * limit ; i++ ) {
		cards.push(<ProductsCard {...products[i]} />);
	}

	return (<div className="d-flex flex-wrap justify-content-center g-0">{cards}</div>);
}

function productSearch({products, search}) {
	return (products.filter(x => {
		x.nameLower.includes(search.toLowerCase())
	}))
}

export {getData, DrawCards, productSearch}