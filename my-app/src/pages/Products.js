import React, {useState,useEffect} from 'react';
import {Card, Row, Col} from 'react-bootstrap';
import ProductsCard from '../components//Products/ProductsCard';
import Search from '../components/Commons/Search';
import { useMediaQuery } from 'react-responsive';
import { ProductsProvider } from '../components/Contexts/ProductsContext';
import ProductsSmall from '../components/Products/ProductsSmall';
import ProductsBig from '../components/Products/ProductsBig';


export default function Products() {
	const [search, setSearch] = useState('')
	const [page, setPage] = useState(1);
	const [products, setProducts] = useState([])
	const isSmall = useMediaQuery({ maxWidth: 768 })

	return(
		<ProductsProvider value={{products, setProducts, page, setPage, search, setSearch}}>
		{ 
			(isSmall) ?
			<ProductsSmall /> :
			<ProductsBig />
		}
		</ProductsProvider>
	);
}


