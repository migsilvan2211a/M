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

