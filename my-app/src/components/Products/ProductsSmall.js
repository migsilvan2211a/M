import React, { useContext, useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductsContext from '../Contexts/ProductsContext';
import Search from '../Commons/Search';
import {getData, DrawCards, productSearch} from './ProductFunctions'

export default function ProductsSmall() {
	const {products, setProducts, search, setSearch, page, setPage} = useContext(ProductsContext);
	useEffect(() => getData(setProducts), [])
	return(
		
		<div className="d-flex flex-column m-0 px-2 py-3">
			<Row className="container-fluid m-0 p-0">
				<Search {...{search, setSearch}} />
			</Row>
			<Row className="container-fluid  mt-3">
				<DrawCards {...{products, setProducts, page, search}} />
			</Row>	
		</div>
		
	);		
}