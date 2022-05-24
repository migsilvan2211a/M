import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import SingleProductSmall from '../components/Products/SingleProductSmall'
import SingleProductBig from '../components/Products/SingleProductBig'
import {SingleProductProvider} from '../components/Contexts/SingleProductContext';
export default function SingleProduct() {
	const {id} = useParams();
	const [product, setProduct] = useState({});
	
	useEffect(() => {
		fetch(`https://infinite-sea-39312.herokuapp.com/products/get/${id}`).then(res => res.json())
		.then(data => setProduct(data))
	}, []); //needs validation
	const isSmall = useMediaQuery({maxWidth: 768})
	return(
		<SingleProductProvider value={{id, product}}>
		{
			(isSmall) ?
			<SingleProductSmall /> :
			<SingleProductBig />
		}
		</SingleProductProvider>
	)
}