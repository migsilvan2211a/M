import {Row, Col, Image} from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';

export default function Footer() {
	let isSmall = useMediaQuery({maxWidth: 768})
	
		return(
			<footer style={{backgroundColor: "papayawhip"}} className="py-5">
				<div className="d-flex p-0 m-0 justify-content-center align-items-center flex-column">
					<div className="d-inline-flex">
						<div className=" p-0 pe-0 m-0 d-inline-block"  >
							<span style={{fontSize: "90px", borderRightStyle: "solid"}} className="cardo pb-0 pe-2 mb-0 justify-self-end">M</span>
						</div>

						<div className="p-0 m-0 d-inline-block" >
							<Row className="p-0 m-0 pt-4">
								<div><span style={{fontSize: "30px"}} className="cardo p-0 m-0">Express</span><span className="cardo p-0 m-0"> yourself</span></div>
							</Row>

							<Row className="p-0 m-0 pb-4">
								<div><span className="cardo p-0 m-0">with</span><span style={{fontSize: "30px"}} className="cardo p-0 m-0"> Fashion</span></div>
							</Row>
						</div>
					</div>
					<br />
					<div className="d-inline-flex flex-column p-0 m-0 justify-content-center align-items-start">
							<div style={{fontSize: "25px"}} className="p-0 m-0 cardo text-center align-self-center">Follow Us:</div>
							<Row className="d-flex ">
							<a className="col p-0 m-0" href="https://www.facebook.com"><Image style={{height: "40px", width:"40px", objectFit: "cover"}} className=" p-0 mx-1" src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Facebook_svg-512.png"/></a>
							<a className="col p-0 m-0" href="https://www.linkedin.com"><Image style={{height: "40px", width:"40px", objectFit: "cover"}} className=" p-0 mx-1" src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Linkedin2_svg-512.png"/></a>
							<a className="col p-0 m-0" href="https://www.instagram.com"><Image style={{height: "40px", width:"40px", objectFit: "cover"}} className=" p-0 mx-1" src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Instagram_svg-512.png"/></a>
							<a className="col p-0 m-0" href="https://www.youtube.com"><Image style={{height: "40px", width:"40px", objectFit: "cover"}} className=" p-0 mx-1" src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Youtube3_svg-512.png"/></a>
							<a className="col p-0 m-0" href="https://www.twitter.com"><Image style={{height: "40px", width:"40px", objectFit: "cover"}} className=" p-0 mx-1" src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Twitter5_svg-512.png"/></a>	
							</Row>
					</div>
					

				</div>
			</footer>
		)
	}