import {Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
export default function LoginBig({login, setEmail, email, setPass, pass}) {
	return(
		<div className="p-5 fitHeight d-flex border border-black justify-content-center">
			<Form onSubmit={e => login(e)} className="d-flex flex-column border border-black p-5 loginBig">
				<h1 className="text-center mb-3">Login</h1>
				<Form.Group className="m-2">
					<Form.Label>Email:</Form.Label>
					<Form.Control type="text" onChange={e => setEmail(e.target.value)} value={email} required />
				</Form.Group>

					<Form.Group className="m-2">
					<Form.Label>Password:</Form.Label>
					<Form.Control type="password" onChange={e => setPass(e.target.value)} value={pass} required />
				</Form.Group>


				<Link to="/register" className="m-2">Click here to create account</Link>
				<Button type="submit" className="m-2">Submit</Button>
			</Form>
		</div>
	);
}