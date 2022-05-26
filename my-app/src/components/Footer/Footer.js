import {Row, Col} from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';

export default function Footer() {
	let isSmall = useMediaQuery({maxWidth: 768})
	
	if (!isSmall){
		return(
			<footer style={{backgroundColor: "papayawhip"}}>
				<Row className="container-fluid d-flex p-0 m-0">
					<Col md={1} className="d-flex align-items-center justify-content-center p-0 m-0">
						<h1 style={{fontSize: "90px"}}className="cardo pb-0 mb-0">M</h1>
					</Col>

					<Col md={4}>
						<Row className="p-0 m-0 pt-4">
							<p><span style={{fontSize: "30px"}} className="cardo">Express</span><span className="cardo"> yourself</span></p>
						</Row>

						<Row>
							<p><span className="cardo">with</span><span style={{fontSize: "30px"}} className="cardo"> Fashion</span></p>
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