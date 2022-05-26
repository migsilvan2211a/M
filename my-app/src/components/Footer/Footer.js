import {Row, Col} from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';

export default function Footer() {
	let isSmall = useMediaQuery({maxWidth: 768})
	
	if (!isSmall){
		return(
			<footer style={{backgroundColor: "papayawhip"}}>
				<Row className="container-fluid d-flex p-0 m-0">
					<Col md={1} className="d-flex align-items-center justify-content-end p-0 pe-0 m-0"  >
						<h1 style={{fontSize: "90px", borderRightStyle: "solid"}}className="cardo pb-0 pe-2 mb-0">M</h1>
					</Col>

					<Col md={4} className="ps-0" >
						<Row className="p-0 m-0 pt-4">
							<p style={{marginBottom: "0px"}}><span style={{fontSize: "30px"}} className="cardo p-0 m-0">Express</span><span className="cardo p-0 m-0"> yourself</span></p>
						</Row>

						<Row className="p-0 m-0 pb-4">
							<p style={{marginBottom: "0px"}}><span className="cardo p-0 m-0">with</span><span style={{fontSize: "30px"}} className="cardo p-0 m-0"> Fashion</span></p>
						</Row>
					</Col>

					<Col md={4}>

					</Col>
					
					<Col md={2}>

					</Col>
				</Row>
			</footer>
		)
	}

	else {
		return(
			<footer></footer>
		)
	}
}