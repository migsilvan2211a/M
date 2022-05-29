import React, { useContext, useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductsContext from '../Contexts/ProductsContext';
import Search from '../Commons/Search';
import {getData, DrawCards, productSearch} from './ProductFunctions'

export default function ProductsSmall() {
	const {products, setProducts, search, setSearch, page, setPage} = useContext(ProductsContext);
	useEffect(() => getData(setProducts), [])
	return(
		
		<div className="d-flex flex-column m-0">
			<Row className="container-fluid m-0 mt-4 p-0">
				<Search {...{search, setSearch}} />
			</Row>
			<Row className="container-fluid  m-0 my-3 p-0">
				<DrawCards {...{products, setProducts, page, search}} />
			</Row>	
		</div>
		
	);		
}