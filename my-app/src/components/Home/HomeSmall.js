import {Link} from 'react-router-dom'

export default function HomeSmall() {
	return(
		<div id="homeBar" className="d-flex flex-column  pt-3  p-2 col-5 offset-7 h-100 ">
			<h1 id="M" className="cardo">M</h1>
			<Link className="myLink" to='/products'>Products</Link>

			<hr className="my-2" />

			{	
				(localStorage.getItem("token")) ?
					<>
						{(localStorage.getItem("isAdmin") === "true") ?
						<Link className="myLink" to='/admin'>Admin Dashboard</Link>:
						<Link className="myLink" to='/user'>My Account</Link>}
						<Link className="myLink" to='/logout'>Logout</Link>
					</>
				:
				<>
					<Link className="myLink" to='/login'>Login</Link>
					<Link className="myLink" to='/register'>Sign Up</Link>
				</>
			}
		</div>
	);
}