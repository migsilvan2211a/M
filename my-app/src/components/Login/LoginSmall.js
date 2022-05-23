import {Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'

export default function LoginSmall({login, setEmail, email, setPass, pass}) {
	return(
		<div className="d-flex justify-content-center align-items-center">
			<Form onSubmit={login} className="d-flex flex-column border border-black p-md-3 px-md-5 m-md-5 my-5 px-3 mx-1 w-75 loginCard">
				<h1 className="text-center mt-3">Login</h1>
				<Form.Group className="p-0 m-0">
					<Form.Label>Email:</Form.Label>
					<Form.Control type="text" onChange={e => setEmail(e.target.value)} value={email} required />
				</Form.Group>

					<Form.Group className="p-0 m-0">
					<Form.Label>Password:</Form.Label>
					<Form.Control type="password" onChange={e => setPass(e.target.value)} value={pass} required />
				</Form.Group>

				<Link to="/register" className="ms-2 linkDecor text-black">New User? Click here to create account</Link>
				<Button type="submit" className="mb-3 mt-2 mx-2">Submit</Button>
			</Form>
		</div>
	);
}