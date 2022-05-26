import {Row, Col, Image} from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';

export default function Footer() {
	let isSmall = useMediaQuery({maxWidth: 768})
	
	if (!isSmall){
		return(
			<footer style={{backgroundColor: "papayawhip"}}>
				<Row className="container-fluid d-flex p-0 m-0">
					<Col className="d-flex align-items-center justify-content-end p-0 pe-0 m-0"  >
						<h1 style={{fontSize: "90px", borderRightStyle: "solid"}}className="cardo pb-0 pe-2 mb-0">M</h1>
					</Col>

					<Col  className="ps-0" >
						<Row className="p-0 m-0 pt-4">
							<p style={{marginBottom: "0px"}}><span style={{fontSize: "30px"}} className="cardo p-0 m-0">Express</span><span className="cardo p-0 m-0"> yourself</span></p>
						</Row>

						<Row className="p-0 m-0 pb-4">
							<p style={{marginBottom: "0px"}}><span className="cardo p-0 m-0">with</span><span style={{fontSize: "30px"}} className="cardo p-0 m-0"> Fashion</span></p>
						</Row>
					</Col>

					<Col >
						<Row>
							<span className="p0 m-0 cardo">Follow Us:</span>
						</Row>

						<Row className="d-flex flex-row">
							<a href="https://www.facebook.com"><Image style={{height: "50px", width:"50px", objectFit: "cover"}} className="p-0 mx-1" src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Facebook_svg-512.png"/></a>
							<a href="https://www.linkedin.com"><Image style={{height: "50px", width:"50px", objectFit: "cover"}} className="p-0 mx-1" src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Linkedin2_svg-512.png"/></a>
							<a href="https://www.instagram.com"><Image style={{height: "50px", width:"50px", objectFit: "cover"}} className="p-0 mx-1" src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Instagram_svg-512.png"/></a>
							<a href="https://www.youtube.com"><Image style={{height: "50px", width:"50px", objectFit: "cover"}} className="p-0 mx-1" src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Youtube3_svg-512.png"/></a>
							<a href="https://www.twitter.com"><Image style={{height: "50px", width:"50px", objectFit: "cover"}} className="p-0 mx-1" src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Twitter5_svg-512.png"/></a>
						</Row>
					</Col>
					
					<Col >

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