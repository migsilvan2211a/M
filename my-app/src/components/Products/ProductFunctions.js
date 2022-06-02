import ProductsCard from './ProductsCard'
import { Button } from 'react-bootstrap';
import React, { useState } from 'react';



function getData(setProducts) {
	fetch(`https://infinite-sea-39312.herokuapp.com/products/getAllActive`).then(res => res.json()).then(data => setProducts(data))
}



/*
Draw Cards first checks for search bar matches.
We show 2 products per loading. An array is used to make the return cleaner;
This function creates a new div of cards
*/

function DrawCards({products, setProducts, page, search}) { //products is an array
	console.log(`page is ${page}`)
	let [finalRender, setFinalRender] = useState([]);
	let [loadMore, setLoadMore] = useState(false);
	let searched = productSearch(products, search)
	
	//checks the search bar for products first
		if (searched.length === 0 && search)
			return productNotFound();
	//if there is a search string, assign it to be displayed, else use the whole product list.
		let toRender = [];
		if (searched.length > 0)  
			toRender = searched;
		else
			toRender = products;
		console.log(`toRender length is ${toRender.length}`)
	//create cards to display
		let cards = [];
		const limit = (toRender.length >= 24) ? 24 : toRender.length;
		for (let i = (page - 1) * limit ; i < page * limit && i < toRender.length  ; i++ ) { //condition checks under multiple of limit (blank cards may be produced) and won't exceed renderable
			cards.push(<ProductsCard {...toRender[i]} />);
		}
    //Load More Button functions
		let drawButton1 = (page * 24 < toRender.length && page > 0) //Load More button 
		page++
		let handleLoad = () => {setLoadMore(true); drawButton1 = false;}

	//Rendering Methods
		let forFinalRender = [];
		forFinalRender.push(<>{cards}</>)
		
		if (drawButton1 && !loadMore)
			forFinalRender.push(<Button onClick={handleLoad}>Load More</Button>)
		else if (loadMore)
			forFinalRender.push(<DrawCards {...{products, setProducts, page, search}} />)
		if (finalRender.length == 0)
			setFinalRender(forFinalRender);
	return  (
		<div className="d-inline-flex flex-wrap p-0 m-0 g-0 justify-content-center">
			{forFinalRender}
		</div>
	);
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
