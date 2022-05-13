import React, {useState, useEffect} from 'react';
import {Form, Button} from 'react-bootstrap';
import Swal from 'sweetalert2';
import Datepicker from 'react-datepicker';
import phil from 'phil-reg-prov-mun-brgy';

export default function Register() {

	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
	const [verPass, setVerPass] = useState('');
	const [isActive, setActive] = useState(false);
	const [phone, setPhone] = useState('');
	const [bday, setBday] = useState(new Date());
	const [region, setRegion] = useState('');
	const [rCode, setRCode] = useState('');
	const [prov, setProv] = useState('');
	const [pCode, setPCode] = useState('');
	const [mun, setMun] = useState('');
	const [mCode, setMCode] = useState('');
	const [brgy, setBrgy] = useState('');
	const [zip, setZip] = useState('');
	
	useEffect(() => {
		if((email !== '' && pass !== '' && verPass !== '') && (pass === verPass))
			setActive(true)	
		else
			setActive(false)
	}, [email, pass, verPass, phone, bday, region, prov, mun, brgy, zip]);

	function registerUser(e) {
		e.preventDefault();
		setEmail('');
		setPass('');
		setVerPass('');
		Swal.fire("Success!", "Thank you for registering", "success");
	}

	function setAddress(setA, setB, data, codeName) {
		const x = JSON.parse(data);
		setA(x['name']);
		setB(x['codeName']);
	}

	return (
		<div className="p-3">
			<Form onSubmit={registerUser} className="mx-4 mx-xl-5 p-4 p-xl-5 border border-dark">
				<h1>Register:</h1>
				<Form.Group>
					<Form.Label>Email Address:</Form.Label>
					<Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} value={email} required />
					<Form.Text className="text-muted">We'll never share your email with anyone else</Form.Text>
				</Form.Group>

				<Form.Group>
					<Form.Label>Password:</Form.Label>
					<Form.Control type="password" onChange={e => setPass(e.target.value)} value={pass} required />
				</Form.Group>

				<Form.Group>
					<Form.Label>Verify Password:</Form.Label>
					<Form.Control type="password" onChange={e => setVerPass(e.target.value)} value={verPass} required />
				</Form.Group>
					
				<Form.Group>
					<Form.Label>Birth Date:</Form.Label>
					<Datepicker selected={bday} onChange={(date:Date) => setBday(date)} />
				</Form.Group>

				<Form.Group>
					<Form.Label>Region:</Form.Label>
					<Form.Select value ={region} onChange={e => {setAddress(setRegion(), setRCode(), e.target.value, "reg_code")}}>
						{phil.regions.map((x) => {
							return(<option value={JSON.stringify(x)} key={x.reg_code}>{x.name}</option>)
						})}
					</Form.Select>
				</Form.Group>

				<Form.Group>
					<Form.Label>Prov:</Form.Label>
					<Form.Select value ={prov} onChange={e => {setProv(e.target.value); setPCode(e.target.key)}}>
						{
							useEffect(() => {
								console.log("hi");
								console.log(`${region} ${rCode}`)
								phil.getProvincesByRegion({rCode}).map((x) => {
									return(<option value={JSON.stringify(x)} key={x.prov_code}>{x.name}</option>)
							})}, [rCode])
						}
					</Form.Select>
				</Form.Group>

				<Form.Group>
					<Form.Label>Mun:</Form.Label>
				</Form.Group>

				<Form.Group>
					<Form.Label>Mun:</Form.Label>
				</Form.Group>

				{isActive ? <Button type="submit" className="mt-3">Submit</Button> : <Button type="submit" className="mt-3" disabled>Submit</Button>}			
			</Form>
		</div>
	)
}
 