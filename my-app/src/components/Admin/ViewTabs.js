import { MyTable } from './TableMaker';
import Search from './Search'
import CreateProduct from './CreateProduct';
import { Row, Col } from 'react-bootstrap'

function Profile() {
	const name = localStorage.getItem("fullName");
	return(
		<div>
			<h3>Welcome {name}</h3>
			<hr />

		</div>
	)
}

function Users({data, ...props}) {
	let myProp = { ...data, ...props, category: "users" }
	return(
		<div>
			<h3>Manage Users</h3>
			<hr />
			<Search {...props} />
			<div className="overflow-auto mt-3">
				{
					(data) ? <MyTable {...myProp} /> : <></>
				}
			</div>

		</div>
	)
}

function Products({data, ...props}) {
	let myProp = { ...data, ...props, category: "products" }
	return(
		<div>
			<h3>Manage Products</h3>
			<hr />
			<Row>
				<Col xs={8} lg={10} className="ps-3 pe-0">
					<Search {...props} className="m-0 p-0"/>
				</Col>
				<Col xs={4} lg={2} className="ps-3 pe-0 me-0">				
					<CreateProduct className="m-0 p-0"/>
				</Col>
			</Row>
			<div className="overflow-auto mt-3">
				{
					(data) ? <MyTable {...myProp} /> : <></>
				}
			</div>

			
		</div>
	)
}

function Orders({data, ...props}) {
	let myProp = { ...data, ...props, category: "orders" }
	return(
		<div>
			<h3>Manage Orders</h3>
			<hr />
			<Search {...props} />
			<div className="overflow-auto mt-3">
				{
					(data) ? <MyTable {...myProp} /> : <></>
				}
			</div>

		</div>
	)
}

export { Orders, Products, Users, Profile };