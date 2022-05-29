import React, { useContext, useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductsContext from '../Contexts/ProductsContext';
import Search from '../Commons/Search';
import {getData, DrawCards, productSearch} from './ProductFunctions'

export default function ProductsBig() {
	const {products, setProducts, search, setSearch, page, setPage} = useContext(ProductsContext);
	useEffect(() => getData(setProducts), [])
	return(
		<div className="d-flex p-0 m-0" style={{minHeight: "100vh"}}>
			<div className=" border border-black fitHeight m-0" style={{width: "350px"}}>
				<div></div>
			</div>
			<div className="d-flex flex-column border border-black m-0 p-3">
				<Row className="container-fluid">
					<Search {...{search, setSearch}} />
				</Row>
				<Row className="container-fluid d-flex flex-row mt-3">
					<DrawCards {...{products, setProducts, page, search}} />
				</Row>	
			</div>
		</div>
	);
}