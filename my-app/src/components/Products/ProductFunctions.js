import ProductsCard from './ProductsCard'
import {Row} from 'react-bootstrap';



function getData(setProducts) {
	fetch(`https://infinite-sea-39312.herokuapp.com/products/getAllActive`).then(res => res.json()).then(data => setProducts(data))
}

function DrawCards({products, setProducts, page, search}) { //products is an array
	let searched = productSearch(products, search)
	if (searched.length === 0 && search)
		return productNotFound();
	let toRender = [];
	if (searched.length > 0)
		toRender = searched;
	else
		toRender = products;
	let cards = [];
	let counter = 0;
	const limit = (toRender.length >= 24) ? 24 : toRender.length;
	for (let i = (page - 1) * limit ; i < page * limit ; i++ ) {
		cards.push(<ProductsCard {...toRender[i]} />);
	}

	return (<div className="d-flex flex-wrap justify-content-center ">{cards}</div>);
}

function productSearch(products, search) {
	let mySearch = search.toLowerCase();
	let test = []
	if (search == undefined || search.length == 0)
		return []
	else
		test = products.filter(x => {
			return x.nameLower.includes(mySearch);
		})

	console.log(`test is ${test.length}`)
		return test
}

function productNotFound() {
	return (<h3>No products matched your search...</h3>)
}
export { getData, DrawCards }
